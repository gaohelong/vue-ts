<template>
  <div class="container">
    <h3>EventBusTwo组件</h3>
    <div class="row">msg: {{ msg }}</div>
    <button class="btn" @click="sendDataEventBusOne">向EventButOne组件传递数据</button>
    <div class="row">EventBusOne msg: {{ eventBusOneMsg }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
const $EventBus = Vue.prototype.$EventBus

@Component
export default class CptEventBusTwo extends Vue {
  @Prop() private msg!: string;
  // data
  eventBusOneMsg = '';

  // methods
  sendDataEventBusOne () {
    // 触发EventBus事件
    $EventBus.$emit('sendDataEventBusOne', '来自CptEventBusOne组件的数据')
  }

  // 生命周期
  private mounted (): void {
    // 向EventBus添加监听事件
    $EventBus.$on('sendDataEventBusTwo', (msg: string): void => {
      console.log('sendDataEventBusTwo:', msg)
      this.eventBusOneMsg = msg
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './CptEventBusTwo.scss';
</style>
