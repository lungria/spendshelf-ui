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
      new TransactionData(100, 'ATB', '5e124d89a1583b0db666adc4', new Date(2019, 12, 2, 1, 12)),
      new TransactionData(102, 'Silpo', '5e124d89a1583b0db666adc5', new Date(2019, 4, 2, 1, 12)),
      new TransactionData(101, 'Le Silpo', '5e124d89a1583b0db666adc6', new Date(2019, 3, 2, 1, 12)),
      new TransactionData(102, 'Каша Маслом', '5e124d89a1583b0db666adc7', new Date(2019, 2, 2, 1, 12))
    ].sort((x, y) => y.DateTime.getTime() - x.DateTime.getTime()),
    Categories: new Map<string, Category>([
      ['id1', new Category('Food', 'id1')],
      ['id2', new Category('Rent', 'id2')],
      ['id3', new Category('Health', 'id3')]
    ])
  },
  mutations: mutations,
  actions: actions
}

new Vue({
  render: h => h(App),
  store: new Vuex.Store<TransactionsState>(store)
}).$mount('#app')
