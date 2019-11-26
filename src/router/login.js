const loginRouters = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/login')
  }
]

export default loginRouters
