import { MutationTree } from 'vuex'
import { TransactionsState } from './TransactionsState'
import TransactionData, { TransactionId } from '@/modules/transactions/TransactionData'

export const mutations: MutationTree<TransactionsState> = {
  removeTransaction (state, payload: any) {
    console.log(payload)
    let index = state.Transactions.findIndex(x => x.ID === payload)
    state.Transactions.splice(index, 1)
  }
}
