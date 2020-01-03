import Vue from 'vue'
import App from './App.vue'
import Vuex, { StoreOptions } from 'vuex'
import { TransactionsState } from './modules/TransactionsState'
import TransactionData from '@/modules/transactions/TransactionData'
import { mutations } from '@/modules/Mutations'

Vue.config.productionTip = false

Vue.use(Vuex)

const store: StoreOptions<TransactionsState> = {
  strict: true, // TODO disable in production
  state: {
    Transactions: [
      new TransactionData(100, 'ATB', 'ob1', new Date(2019, 12, 2, 1, 12)),
      new TransactionData(102, 'asd', 'ob3', new Date(2019, 4, 2, 1, 12)),
      new TransactionData(101, 'fasfasf', 'on4', new Date(2019, 3, 2, 1, 12)),
      new TransactionData(102, 'asd', 'obq3', new Date(2019, 2, 2, 1, 12))
    ].sort((x, y) => y.DateTime.getTime() - x.DateTime.getTime())
  },
  mutations: mutations
}

new Vue({
  render: h => h(App),
  store: new Vuex.Store<TransactionsState>(store)
}).$mount('#app')
