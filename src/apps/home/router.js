export default {
  path: '/',
  component: () => import(/* webpackChunkName: "home" */ './App.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index.vue'),
    },
  ],
}
