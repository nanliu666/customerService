import App from '../App'

//事务模块
const reportAdd = resolve => require(['../page/reportAdd'], resolve);
const reportDetail = resolve => require(['../page/reportDetail'], resolve);


export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue

    {
      path: '',
      redirect: '/reportAdd'
    },

    //报事报修
    {
      path: '/reportAdd', //新增报事报修
      component: reportAdd,
      name: 'reportAdd',
    },
    {
      path: '/reportDetail', //报事报修详情
      component: reportDetail,
      name: 'reportDetail',
    },


  ]
}]
