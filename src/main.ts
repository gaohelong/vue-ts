import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import i18n from './i18n'

Vue.config.productionTip = false

// lazyload
Vue.use(VueLazyload)
// or with options
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })

// 全局事件总线
Vue.prototype.$EventBus = new Vue()
// const EventBus = new Vue()
// Object.defineProperties(Vue.prototype, {
//   $bus: {
//     get: function () {
//       return EventBus
//     }
//   }
// })

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
