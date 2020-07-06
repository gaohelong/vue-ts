<template>
  <div class="container">
    <h3>EventBusOne组件</h3>
    <div class="row">msg: {{ msg }}</div>
    <button class="btn" @click="sendData">向EventBus组件传递数据</button>
    <div class="row">EventBusTwo msg: {{ eventBusTwoMsg }}</div>
    <button class="btn" @click="sendDataEventBusTwo">向EventBusTwo组件传递数据</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

const $EventBus = Vue.prototype.$EventBus

@Component
export default class CptEventBusOne extends Vue {
  @Prop() private msg!: string;

  eventBusTwoMsg = '';

  // methods
  sendData () {
    // 触发EventBus事件
    $EventBus.$emit('getData', '来自CptEventBusOne组件的数据')
  }

  sendDataEventBusTwo () {
    $EventBus.$emit('sendDataEventBusTwo', '来自sendDataEventBusTwo的数据')
  }

  // 声明周期
  private mounted (): void {
    // 向EventBus添加监听事件
    $EventBus.$on('sendDataEventBusOne', (msg: string): void => {
      console.log('sendDataEventBusOne:', msg)
      this.eventBusTwoMsg = msg
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './CptEventBusOne.scss';
</style>
