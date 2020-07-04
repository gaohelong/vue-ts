<template>
  <div class="home">
    <img alt="Vue logo" v-lazy="vueLogo">
    <HelloWorld :msg="msg" />
    <div :class="{ title: titleCls }">
      title: {{ title }}
    </div>
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
      vueLogo,
      msg: 'Welcome to Your Vue.js App1',
      title: 'china',
      titleCls: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './Home.scss'
</style>
