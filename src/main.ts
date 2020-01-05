import Vue from 'vue'
import App from './App.vue'
import Vuex, { StoreOptions } from 'vuex'
import { TransactionsState } from './modules/transactions/TransactionsState'
import TransactionData from '@/modules/transactions/TransactionData'
import { mutations } from '@/modules/transactions/Mutations'
import { actions } from '@/modules/transactions/Actions'
import Category from '@/api/Category'

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
    ].sort((x, y) => y.DateTime.getTime() - x.DateTime.getTime()),
    Categories: new Map<string, Category>([
      ['id1', new Category('test1', 'id1')],
      ['id2', new Category('test2', 'id2')],
      ['id3', new Category('test3', 'id3')]
    ])
  },
  mutations: mutations,
  actions: actions
}

new Vue({
  render: h => h(App),
  store: new Vuex.Store<TransactionsState>(store)
}).$mount('#app')
