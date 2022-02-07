<template>
  <div class="child-page">
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '../../components/hello-world'

export default {
  name: 'ChildPage',
  components: {
    HelloWorld,
  },
}
</script>
