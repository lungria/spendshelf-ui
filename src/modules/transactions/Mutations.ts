import { MutationTree } from 'vuex'
import { TransactionsState } from './TransactionsState'
import { TransactionId } from '@/modules/transactions/TransactionData'
import Category from '@/api/Category'

export const mutations: MutationTree<TransactionsState> = {
  removeTransaction (state, payload: TransactionId) {
    let index = state.Transactions.findIndex(x => x.ID === payload)
    state.Transactions.splice(index, 1)
  },
  createCategory (state, payload: Category) {
    state.Categories.set(payload.id, payload)
  }
}
