
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'index',
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        name: 'Components',
        path: '/comp/:ID',
        component: () => import('pages/defaultComp.vue'),
        props: route => route.params
      },
      {
        name: 'Equipments',
        path: '/equip/:ID',
        component: () => import('pages/defaultEquip.vue'),
        props: true
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
