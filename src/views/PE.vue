<template>
  <div class="cptPE">
    <div>{{ title }} - {{ t }}</div>
    <CptPE :msg="helloWorldMsg" @changeParentState="changeState" />
  </div>
</template>

<script>
import CptPE from '@/components/CptPE.vue'

export default {
  components: {
    CptPE
  },
  data: function () {
    return {
      title: 'Props $emit实现父子组件的通信',
      helloWorldMsg: '欢迎使用HellowWorld组件',
      helloWorldTs: '我是Ts组件',
      t: 'a'
    }
  },
  created () {
    console.log('query:', this.$route.query)
    console.log('params:', this.$route.params)
  },
  beforeUpdate () {
    console.log('beforeUpdate')
    console.log(this.$data.t)
    console.log(this.t)
  },
  updated () {
    console.log('updated')
    console.log(this.$data.t)
    console.log(this.t)
  },
  methods: {
    changeState (t) {
      console.log(this.t)
      this.t = t
      console.log(t)
    }
  }
}
</script>

<style scoped>

</style>
