
const routes = [
  {
    path: '/',
    component: () => import('layouts/Default.layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/Auth.layout.vue'),
    children: [
      { path: '', redirect: 'login' },
      { path: 'login', component: () => import('pages/Auth/Authentication.vue') },
      { path: 'profile', component: () => import('pages/Auth/Profile.vue') },
      { path: 'register', component: () => import('pages/Auth/Registration.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
