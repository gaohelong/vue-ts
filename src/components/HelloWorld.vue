<template>
  <div class="hello">
    <h1 :title="msg">{{ msg }} {{ ts }}</h1>
    <div class="state">state title: {{ stateTitle }}</div>

    <!-- button -->
    <button class="btn" @click="btnClick">{{ btnTitle }}</button>
    <button class="btn" @click="() => { btnTwoClick('china', '18') }">{{ getUserInfoTitle }}</button>

    <!-- input -->
    <input ref="inputText" type="text" v-model="inputVal" class="inputCls">
    <input ref="inputAge" type="text" :value="age" class="inputCls">

    <!-- 计算属性 -->
    <div class="computed">{{ reversedMessage }}</div>

    <!-- Any List -->
    <div class="list-title">
      Any List
    </div>
    <div class="list" @click="anyListClick">
      <div v-for="item in list" :key="item" class="item">
        {{ item }}
      </div>
    </div>

    <!-- Number List -->
    <div class="list-title">
      Number List
    </div>
    <div class="list" @click="anyListClick">
      <div v-for="item in numList" :key="item" class="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private ts!: number;

  // data
  age = 18;
  btnTitle = 'Click me';
  getUserInfoTitle = '获取用户信息';
  inputVal = 'input';
  list: any = ['saber', 'd3', 'wow', 'lol'];
  numList: number[] = [1, 2, 3, 4, 5, 6];
  message = 'tpircSepyT';

  // vuex
  @State(state => state.title) stateTitle!: string;

  // 计算属性
  private get reversedMessage (): string {
    return this.message.split('').reverse().join('')
  }

  // method
  btnClick (): void {
    this.btnTitle = 'Welcome'
  }

  btnTwoClick (name: string, age: number) {
    console.log(name, age)
  }

  // 事件委托
  anyListClick (e: any) {
    // 获取元素文本
    console.log(e.target.innerText)

    // 获取dome
    const inputText: any = this.$refs.inputText
    console.log(inputText.value)

    const inputAge: any = this.$refs.inputAge
    console.log(inputAge.value)
  }

  // 生命周期
  private beforeCreate (): void {
    console.log('beforeCreate')
  }

  private created (): void {
    console.log('created')
  }

  private beforeMount (): void {
    console.log('beforeMount')
  }

  private mounted (): void {
    console.log('mounted')
  }

  private beforeUpdate (): void {
    console.log('beforeUpdate')
  }

  private updated (): void {
    console.log('updated')
  }

  private beforeDestroy (): void {
    console.log('beforeDestroy')
  }

  private destroyed (): void {
    console.log('destroyed')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './HelloWorld.scss';

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
