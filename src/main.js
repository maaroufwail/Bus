import Vue from 'vue'
import router from './router';
import App from './App.vue'
import VueSession from 'vue-session'
Vue.use(VueSession)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
