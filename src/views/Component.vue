<template>
  <div class="component">
    <h3>Nav</h3>
    <div>
      <router-link v-for="item in navList" :key="item.title" :to="item.url">
        {{ item.title }}
      </router-link>
    </div>
    <h3>内容</h3>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      navList: [
        {
          url: '/component/cptPE/1?type=3',
          title: 'props $emit'
        },
        {
          url: '/component/cptVuex',
          title: 'vuex'
        },
        {
          url: '/component/cptEventBus',
          title: 'eventBus'
        },
        {
          url: '/component/cptAL',
          title: '$attrs/$listeners'
        },
        {
          url: '/component/cptPI',
          title: 'provide / inject'
        },
        {
          url: '/component/cptPC',
          title: 'ref 与 $parent / $children'
        }
      ]
    }
  },
  created () {
    console.log('created')
  }
}
</script>

<style lang="scss" scoped>
  @import './Component.scss'
</style>
