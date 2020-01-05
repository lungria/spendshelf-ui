import TransactionData from '@/modules/transactions/TransactionData'
import Category from '@/api/Category'

export interface TransactionsState {
    Transactions: TransactionData[];
    Categories: Category[];
}
