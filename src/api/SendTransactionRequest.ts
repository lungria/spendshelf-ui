import TransactionData, { TransactionId } from '@/modules/transactions/TransactionData'

export default class SendTransactionRequest {
  TransactionId: TransactionId
  CategoryId: string
  constructor (TransactionId: TransactionId, CategoryId: string) {
    this.TransactionId = TransactionId
    this.CategoryId = CategoryId
  }
}
