<template>
  <div class="cptPE">
    <div class="title">{{ title }}</div>
    <div class="state">state title: {{ this.$store.state.title }}</div>
    <button class="btn" @click="changeState">点击修改状态</button>
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
      title: 'vuex 适用于父子组件、兄弟组件、隔代组件的通信.'
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
    console.log(this.$store.state.title)
  },
  beforeDestroy () {
    console.log('beforeDestroy')
    console.log(this.$store.getters.getTitle)
  },
  methods: {
    changeState () {
      this.$store.dispatch('changeTitle', 'vuex')
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
