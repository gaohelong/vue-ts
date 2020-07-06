<template>
  <div class="container">
    <h3>AttrListenersTwo组件</h3>
    <div class="row">msg: {{ msg }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CptAttrListenersTwo extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './CptAttrListenersTwo.scss';
</style>
