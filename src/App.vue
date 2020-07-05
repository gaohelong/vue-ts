<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/component">Component</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="slide-left">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
@import './main.scss'
</style>
