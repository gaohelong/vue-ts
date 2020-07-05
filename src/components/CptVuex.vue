<template>
  <div class="container">
    <h3>组件</h3>
    <div>props msg: {{ msg }}</div>
    <div class="state">state title: {{ stateTitle }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class CptVuex extends Vue {
  @Prop() private msg!: string;
  // vuex
  @State(state => state.title) stateTitle!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './CptVuex.scss';
</style>
