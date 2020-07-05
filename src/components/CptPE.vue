<template>
  <div class="container">
    <h3>组件</h3>
    <div>props msg: {{ msg }}</div>
    <button class="btn" @click="changeParentState">点我更改父组件状态</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CptPE extends Vue {
  @Prop() private msg!: string;

  // methods
  changeParentState () {
    console.log('click changeState')
    this.$emit('changeParentState', 'saber')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './CptPE.scss';
</style>
