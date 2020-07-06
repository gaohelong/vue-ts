<template>
  <div class="cptPE">
    <div class="row">{{ title }}</div>
    <div class="row">EventBusOne传递过来的数据：{{ childrenMsg }}</div>
    <CptEventBusOne msg="父子组件通信" />
    <CptEventBusTwo msg="兄弟组件通信" />
  </div>
</template>

<script>
import CptEventBusOne from '@/components/CptEventBusOne.vue'
import CptEventBusTwo from '@/components/CptEventBusTwo.vue'

export default {
  components: {
    CptEventBusOne,
    CptEventBusTwo
  },
  data: function () {
    return {
      title: 'eventBus事件总线 适用于父子组件、隔代组件、兄弟组件的通信',
      childrenMsg: ''
    }
  },
  methods: {

  },
  mounted () {
    // 向EventBus添加监听事件
    this.$EventBus.$on('getData', msg => {
      this.childrenMsg = msg
    })
  }
}
</script>

<style scoped>

</style>
