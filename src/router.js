import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 获取路由信息
// 动态加载 apps 中所有的路由文件
const files = require.context('@/apps', true, /router\.js$/)
const routes = files.keys().map(key => {
  const page = require('@/apps' + key.replace('.', ''))
  return page.default
})

const router = new VueRouter({
  routes,
})

export default router
