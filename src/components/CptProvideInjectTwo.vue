<template>
  <div class="container">
    <h3>Provide Inject Two 组件</h3>
    <div class="row">隔代组件获取Provide title: {{ title }}</div>
    <div class="row">隔代组件获取Provide age: {{ age }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator'

@Component({
  // components: { CptProvideInjectTwo }
})
export default class CptProvideInjectTwo extends Vue {
  @Prop() private msg!: string;

  @Inject() readonly title!: string;
  @Inject() readonly age!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './CptProvideInjectTwo.scss';
</style>
