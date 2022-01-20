import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './apps/home/router'
import ProfileRouter from './apps/profile/router'

Vue.use(VueRouter)

const routes = [HomeRouter, ProfileRouter]

const router = new VueRouter({
  routes,
})

export default router
