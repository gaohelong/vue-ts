<template>
  <div id="app">
    <div>
      <select class="selectLang" v-model="selected" @change="selectLang">
        <option disabled value="">请选择语言</option>
        <option value="cn">中文</option>
        <option value="en">English</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <div id="nav">
      <router-link to="/">{{ $t("navList.home") }}</router-link> |
      <router-link to="/component">{{ $t("navList.component") }}</router-link> |
      <router-link to="/about">{{ $t("navList.about") }}</router-link>
    </div>
    <transition name="slide-left">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import i18n from './i18n'

export default {
  data: function () {
    return {
      selected: 'cn'
    }
  },
  methods: {
    selectLang () {
      i18n.locale = this.selected
    }
  }
}
</script>

<style lang="scss">
@import './main.scss';

.selectLang {
  line-height: 30px;
  height: 30px;
  outline: 0;
}
</style>
