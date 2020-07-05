<template>
  <div class="cptPE">
    <div class="title">{{ title }}</div>
    <CptVuex msg="我是Props" />
  </div>
</template>

<script>
import CptVuex from '@/components/CptVuex.vue'

export default {
  components: {
    CptVuex
  },
  data: function () {
    return {
      title: 'vuex可以实现与父子组件、兄弟组件、隔代组件的通信.'
    }
  },
  created () {
    console.log('query:', this.$route.query)
    console.log('params:', this.$route.params)
  }
}
</script>

<style scoped>
.title {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
