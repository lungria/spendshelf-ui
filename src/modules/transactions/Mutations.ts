import { MutationTree } from 'vuex'
import { TransactionsState } from './TransactionsState'
import Category from '@/api/Category'

export const mutations: MutationTree<TransactionsState> = {
  removeTransaction (state, payload: string) {
    let index = state.Transactions.findIndex(x => x.id === payload)
    state.Transactions.splice(index, 1)
  },
  createCategory (state, payload: Category) {
    state.Categories.set(payload.id, payload)
  }
}
