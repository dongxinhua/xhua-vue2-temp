<template>
  <div>hello {{ msg }}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'world',
    }
  },
}
</script>

<style lang="less" scoped></style>
