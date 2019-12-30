export default class TransactionData {
  Amount: number;
  Description: string;
  ID: TransactionId;
  DateTime: Date;

  constructor (Amount: number, Description: string, ID: TransactionId, DateTime: Date) {
    this.ID = ID
    this.Amount = Amount
    this.Description = Description
    this.DateTime = DateTime
  }
}

export type TransactionId = string;
