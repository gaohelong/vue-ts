import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  cn: {
    navList: {
      home: '首页',
      component: '组件',
      about: '关于'
    }
  },
  en: {
    navList: {
      home: 'Home',
      component: 'Component',
      about: 'About'
    }
  }
}

const i18n = new VueI18n({
  locale: 'cn', // 设置地区
  messages // 设置地区信息
})

export default i18n
