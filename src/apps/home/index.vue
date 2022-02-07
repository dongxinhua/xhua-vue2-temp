<template>
  <div class="home">
    <router-link to="/child-page">home</router-link>
    <!-- 子路由 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  font-size: 36px;
}
</style>
