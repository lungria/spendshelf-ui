import Vuex, { Store, StoreOptions } from 'vuex'
import { TransactionsState } from '@/modules/transactions/TransactionsState'
import TransactionData from '@/modules/transactions/TransactionData'
import Category from '@/api/Category'
import { mutations } from '@/modules/transactions/Mutations'
import { actions } from '@/modules/transactions/Actions'
import Vue from 'vue'
import ApiClient from '@/api/ApiClient'

Vue.use(Vuex)

export function buildStore (categories : Map<string, Category>) {
  return new Vuex.Store<TransactionsState>({
    strict: true, // TODO disable in production
    state: {
      Transactions: [
        new TransactionData(100, 'ATB', '5e124d89a1583b0db666adc4', new Date(2019, 12, 2, 1, 12)),
        new TransactionData(102, 'Silpo', '5e124d89a1583b0db666adc5', new Date(2019, 4, 2, 1, 12)),
        new TransactionData(101, 'Le Silpo', '5e124d89a1583b0db666adc6', new Date(2019, 3, 2, 1, 12)),
        new TransactionData(102, 'Каша Маслом', '5e124d89a1583b0db666adc7', new Date(2019, 2, 2, 1, 12))
      ].sort((x, y) => y.DateTime.getTime() - x.DateTime.getTime()),
      Categories: categories
    },
    mutations: mutations,
    actions: actions
  })
}

export async function initAppState (): Promise<Store<TransactionsState>> {
  let ctgs = await ApiClient.GetCategories()
  let mapCtg = new Map<string, Category>(ctgs.categories.map(z => [z.id, z]))
  return buildStore(mapCtg)
}
