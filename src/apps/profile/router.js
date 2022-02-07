export default {
  path: '/profile',
  component: () => import(/* webpackChunkName: "profile" */ './index.vue'),
  children: [],
}
