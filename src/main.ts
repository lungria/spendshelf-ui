import Vue from 'vue'
import App from './App.vue'
import { initAppState } from '@/storebuilder'

Vue.config.productionTip = false

initAppState().then(x => {
  new Vue({
    render: h => h(App),
    store: x
  }).$mount('#app')
})
