<template>
  <div class="container">
    <h3>AttrListenersOne组件</h3>
    <div class="row">msg: {{ msg }}</div>
    <CptAttrListenersTwo msg="我是Attr ListenersTwo组件" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CptAttrListenersTwo from './CptAttrListenersTwo.vue'

@Component({
  components: { CptAttrListenersTwo }
})
export default class CPtAttrListenersOne extends Vue {
  @Prop() private msg!: string;

  private inheritAttrs = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './CptAttrListenersOne.scss';
</style>
