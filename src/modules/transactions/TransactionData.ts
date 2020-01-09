export default class TransactionData {
  amount: number;
  description: string;
  id: string;
  dateTime: Date;

  constructor (amount: number, description: string, id: string, dateTime: Date) {
    this.id = id
    this.amount = amount
    this.description = description
    this.dateTime = dateTime
  }
}
