import TransactionData from '@/modules/transactions/TransactionData'

export default class SendTransactionRequest {
  TransactionId: string
  CategoryId: string
  constructor (TransactionId: string, CategoryId: string) {
    this.TransactionId = TransactionId
    this.CategoryId = CategoryId
  }
}
