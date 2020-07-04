<template>
  <div class="home">
    <div :class="{ title: titleCls }">
      Title: {{ title }}
    </div>
    <img alt="Vue logo" v-lazy="vueLogo">
    <HelloWorld :msg="msg" :ts="ts" />
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
      ts: 'TypeScript',
      msg: 'Welcome to Your Vue.js App',
      title: 'TypeScript',
      titleCls: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './Home.scss';
</style>
