import { ActionTree } from 'vuex'
import { TransactionsState } from '@/modules/transactions/TransactionsState'
import ApiClient from '@/api/ApiClient'
import { TransactionId } from '@/modules/transactions/TransactionData'
import { mutations } from '@/modules/transactions/Mutations'

export const actions: ActionTree<TransactionsState, TransactionsState> = {
  async sendTransaction ({ commit }, payload: SendTransactionActionPayload) {
    await ApiClient.SendTransaction(payload.ID, payload.CategoryName)
    commit(mutations.removeTransaction.name, payload.ID)
  }
}

export class SendTransactionActionPayload {
  ID!: TransactionId
  CategoryName: string
  // todo add ID to dropdown for existing properties
  constructor (ID: string, CategoryName: string) {
    this.ID = ID
    this.CategoryName = CategoryName
  }
}
