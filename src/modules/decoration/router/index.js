import App from '../App'

//事务模块
const decorationAdd = resolve => require(['../page/decorationAdd'], resolve);
const decorationDetail = resolve => require(['../page/decorationDetail'], resolve);


export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue

    {
      path: '',
      redirect: '/decorationAdd'
    },

    //服务申请
    {
      path: '/decorationAdd', //新增服务申请
      component: decorationAdd,
      name: 'decorationAdd',
    },
    {
      path: '/decorationDetail', //新增服务申请
      component: decorationDetail,
      name: 'decorationDetail',
    },

  ]
}]
