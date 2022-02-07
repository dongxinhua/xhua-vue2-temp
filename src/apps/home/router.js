export default {
  path: '/',
  component: () => import(/* webpackChunkName: "home" */ './index.vue'),
  children: [
    {
      path: 'child-page',
      name: 'child-page',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/child-page/index.vue'),
    },
  ],
}
