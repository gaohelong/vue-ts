<template>
  <div class="container">
    <h3>Provide Inject One 组件</h3>
    <div class="row">子组件获取父组件Provide title: {{ title }}</div>
    <CptProvideInjectTwo />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator'
import CptProvideInjectTwo from './CptProvideInjectTwo.vue'

@Component({
  components: { CptProvideInjectTwo }
})
export default class CptProvideInjectOne extends Vue {
  @Prop() private msg!: string;

  @Inject() title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './CptProvideInjectOne.scss';
</style>
