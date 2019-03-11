import App from '../App'

//事务模块
const decorationAdd = resolve => require(['../page/decorationAdd'], resolve);
const decorationDetail = resolve => require(['../page/decorationDetail'], resolve);


export default [{
<<<<<<< HEAD
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
=======
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
>>>>>>> d0bdac4bfbb0401797a62cf449c2ad98576792bc
