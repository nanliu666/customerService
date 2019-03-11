import App from '../App'

//事务模块
const serviceAdd = resolve => require(['../page/serviceAdd'], resolve);
const serviceDetail = resolve => require(['../page/serviceDetail'], resolve);


export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue

    {
      path: '',
      redirect: '/serviceAdd'
    },

    //服务申请
    {
      path: '/serviceAdd', //新增服务申请
      component: serviceAdd,
      name: 'serviceAdd',
    },
    {
      path: '/serviceDetail', //新增服务申请
      component: serviceDetail,
      name: 'serviceDetail',
    },

  ]
}]