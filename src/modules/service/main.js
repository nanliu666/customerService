import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './App'
import store from './store/index'
import * as filters from '@/assets/js/filters'
import _ from '@/assets/js/lodash' //loadsh待改进

// 手机端控制台
import VConsole from 'vconsole'
if (process.env.NODE_ENV === 'production') {
  new VConsole()
}

Vue.prototype._ = _
//注册到vue原型上
//暂时解决 vue-loader 打包太大
import {
  DatetimePlugin
} from 'vux'
import ToastPlugin from 'vux/src/plugins/toast/index.js'
import PopupPicker from 'vux/src/components/popup-picker/index.vue'
import {
  LoadingPlugin
} from 'vux'
Vue.use(DatetimePlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(PopupPicker)
// 解决点击延迟300ms
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function (event) {
    // 判断默认行为是否可以被禁用
    if (event.cancelable) {
      // 判断默认行为是否已经被禁用
      if (!event.defaultPrevented) {
        // event.preventDefault();
        FastClick.attach(document.body);
      }
    }
  }, false);
}
Vue.prototype.toAbsURL = function (url) {
  var a = document.createElement('a');
  a.href = url;
  return a.href;
};
//全局过滤器使用
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//绝对路径
Vue.prototype.toAbsURL = function (url) {
  var a = document.createElement('a');
  a.href = url;
  return a.href;
};

//在同一路由对象内返回上一级
Vue.prototype.gobackByrouter = function (url) {
  this.$router.back(-1);

};

//通过不同路由返回上一级
Vue.prototype.goback = function (url) {
  cordova.exec(null, null, "ifcaPlugIns", "goBackFunc", []);
};




//页面位置保存
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
})
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
