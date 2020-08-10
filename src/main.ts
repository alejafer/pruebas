import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'


Vue.use(VueAxios, axios)

Vue.use(Chartkick.use(Chart))


axios.defaults.baseURL='https://api.covid19api.com/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
