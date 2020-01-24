export default class SendTransactionRequest {
  transactionId: string
  categoryId: string
  constructor (transactionId: string, categoryId: string) {
    this.transactionId = transactionId
    this.categoryId = categoryId
  }
}
