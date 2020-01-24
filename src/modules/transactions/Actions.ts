import { ActionTree } from 'vuex'
import { TransactionsState } from '@/modules/transactions/TransactionsState'
import ApiClient from '@/api/ApiClient'
import { mutations } from '@/modules/transactions/Mutations'
import SendTransactionRequest from '@/api/SendTransactionRequest'

export const actions: ActionTree<TransactionsState, TransactionsState> = {
  async sendTransaction ({ commit }, payload: SendTransactionWithExistingCategoryActionPayload) {
    await ApiClient.SendTransaction(new SendTransactionRequest(payload.transactionId, payload.categoryId))
    commit(mutations.removeTransaction.name, payload.transactionId)
  },

  async sendTransactionWithNewCategory ({ commit }, payload: SendTransactionActionPayload) {
    let category = await ApiClient.CreateCategory(payload.categoryName)
    commit(mutations.createCategory.name, category)
    await ApiClient.SendTransaction(new SendTransactionRequest(payload.transactionId, category.id))
    commit(mutations.removeTransaction.name, payload.transactionId)
  }
}

export class SendTransactionActionPayload {
  transactionId: string
  categoryName: string
  constructor (transactionId: string, categoryName: string) {
    this.transactionId = transactionId
    this.categoryName = categoryName
  }
}

export class SendTransactionWithExistingCategoryActionPayload {
  transactionId: string
  categoryId: string
  constructor (transactionId: string, categoryId: string) {
    this.transactionId = transactionId
    this.categoryId = categoryId
  }
}
