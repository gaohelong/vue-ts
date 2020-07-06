<template>
  <div class="cptPE">
    <div class="row">{{ title }}</div>
    <CptProvideInjectOne />
  </div>
</template>

<script>
import CptProvideInjectOne from '@/components/CptProvideInjectOne.vue'

export default {
  components: {
    CptProvideInjectOne
  },
  provide () {
    return {
      title: this.provideTitle,
      age: 18
    }
  },
  data: function () {
    return {
      provideTitle: '我是Provide',
      title: 'provide / inject 适用于 隔代组件通信【封装组件】',
      childrenMsg: ''
    }
  },
  methods: {
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
