import Vuex, { Store, StoreOptions } from 'vuex'
import { TransactionsState } from '@/modules/transactions/TransactionsState'
import TransactionData from '@/modules/transactions/TransactionData'
import Category from '@/api/Category'
import { mutations } from '@/modules/transactions/Mutations'
import { actions } from '@/modules/transactions/Actions'
import Vue from 'vue'
import ApiClient from '@/api/ApiClient'

Vue.use(Vuex)

export function buildStore (categories : Map<string, Category>, transactions: TransactionData[]) {
  return new Vuex.Store<TransactionsState>({
    strict: true, // TODO disable in production
    state: {
      Transactions: transactions.sort((x, y) => y.dateTime.getTime() - x.dateTime.getTime()),
      Categories: categories
    },
    mutations: mutations,
    actions: actions
  })
}

export async function initAppState (): Promise<Store<TransactionsState>> {
  let ctgs = await ApiClient.GetCategories()
  let mapCtg = new Map<string, Category>(ctgs.categories.map(z => [z.id, z]))
  let tr = await ApiClient.GetTransactions()
  return buildStore(mapCtg, tr)
}
