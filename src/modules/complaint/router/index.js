import App from '../App'

//事务模块
const complaintAdd = resolve => require(['../page/complaintAdd'], resolve);
const complaintDetail = resolve => require(['../page/complaintDetail'], resolve);


export default [{
    path: '',
    redirect: '/complaintAdd'
  },

  //服务申请
  {
    path: '/complaintAdd', //新增服务申请
    component: complaintAdd,
    name: 'complaintAdd',
  },
  {
    path: '/complaintDetail', //新增服务申请
    component: complaintDetail,
    name: 'complaintDetail',
  },
]
