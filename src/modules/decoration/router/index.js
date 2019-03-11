import App from '../App'

//事务模块
const decorationAdd = resolve => require(['../page/decorationAdd'], resolve);
const decorationDetail = resolve => require(['../page/decorationDetail'], resolve);


export default [{
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
