export default class TransactionsResponse {
  transactions!: TransactionResponseListEntry[]

  constructor (transactions: TransactionResponseListEntry[]) {
    this.transactions = transactions
  }
}

export class TransactionResponseListEntry {
  amount: number;
  description: string;
  id: string;
  dateTime: string;

  constructor (amount: number, description: string, id: string, dateTime: string) {
    this.id = id
    this.amount = amount
    this.description = description
    this.dateTime = dateTime
  }
}
