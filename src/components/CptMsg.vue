<template>
  <div class="container">
    <span class="msg">{{ msg }}</span>
    <button>Increment</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CptMsg extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './CptTest.scss';
</style>
