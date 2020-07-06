<template>
  <div class="cptPE">
    <div class="row">{{ title }}</div>
  </div>
</template>

<script>
// import CptAttrListenersOne from '@/components/CptAttrListenersOne.vue'

export default {
  components: {
    // CptAttrListenersOne
  },
  data: function () {
    return {
      title: '$attrs/$listeners 适用于隔代组件通信【封装组件】',
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
