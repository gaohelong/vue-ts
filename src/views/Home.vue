<template>
  <div class="home">
    <img alt="Vue logo" v-lazy="vueLogo">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import vueLogo from '@/assets/logo.png'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      vueLogo
    }
  }
}
</script>
