import { ActionTree } from 'vuex'
import { TransactionsState } from '@/modules/transactions/TransactionsState'
import ApiClient from '@/api/ApiClient'
import { TransactionId } from '@/modules/transactions/TransactionData'
import { mutations } from '@/modules/transactions/Mutations'
import SendTransactionRequest from '@/api/SendTransactionRequest'

export const actions: ActionTree<TransactionsState, TransactionsState> = {
  async sendTransaction ({ commit }, payload: SendTransactionWithExistingCategoryActionPayload) {
    await ApiClient.SendTransaction(new SendTransactionRequest(payload.TransactionId, payload.CategoryId))
    commit(mutations.removeTransaction.name, payload.TransactionId)
  },

  async sendTransactionWithNewCategory ({ commit }, payload: SendTransactionActionPayload) {
    let category = await ApiClient.CreateCategory(payload.CategoryName)
    commit(mutations.createCategory.name, category)
    await ApiClient.SendTransaction(new SendTransactionRequest(payload.TransactionId, category.id))
    commit(mutations.removeTransaction.name, payload.TransactionId)
  }
}

export class SendTransactionActionPayload {
  TransactionId: TransactionId
  CategoryName: string
  constructor (TransactionId: string, CategoryName: string) {
    this.TransactionId = TransactionId
    this.CategoryName = CategoryName
  }
}

export class SendTransactionWithExistingCategoryActionPayload {
  TransactionId: TransactionId
  CategoryId: string
  constructor (TransactionId: string, CategoryId: string) {
    this.TransactionId = TransactionId
    this.CategoryId = CategoryId
  }
}
