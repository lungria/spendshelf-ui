export default class TransactionData {
  Amount: number;
  Description: string;
  MCC: number;
  ID: string;
  DateTime: Date;

  constructor (Amount: number, Description: string, MCC: number, ID: string, DateTime: Date) {
    this.ID = ID
    this.Amount = Amount
    this.Description = Description
    this.MCC = MCC
    this.DateTime = DateTime
  }
}
