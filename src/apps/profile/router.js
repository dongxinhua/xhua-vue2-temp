export default {
  path: '/profile',
  component: () => import(/* webpackChunkName: "profile" */ './App.vue'),
  children: [
    {
      path: '',
      name: 'profile',
      component: () =>
        import(/* webpackChunkName: "profile" */ './views/index.vue'),
    },
  ],
}
