import CategoriesResponse from '@/api/CategoriesResponse'
import TransactionData, { TransactionId } from '@/modules/transactions/TransactionData'
import Category from '@/api/Category'
import SendTransactionRequest from '@/api/SendTransactionRequest'

interface ApiClient {
  GetCategories(): Promise<CategoriesResponse>;
  CreateCategory(name: string): Promise<Category>;
  SendTransaction(request: SendTransactionRequest): Promise<void>;
}

class SpendShelfApiClient implements ApiClient {
  async GetCategories (): Promise<CategoriesResponse> {
    return new Promise<CategoriesResponse>((resolve) => {
      resolve(new CategoriesResponse([
        new Category('test1', 'id1'),
        new Category('test2', 'id2')
      ]))
    })
  }

  async SendTransaction (request: SendTransactionRequest): Promise<void> {
    return new Promise((resolve) => {
      console.log(request)
      resolve()
    })
  }

  async CreateCategory (name: string): Promise<Category> {
    return new Promise<Category>((resolve) => {
      resolve(new Category(name, 'generatgedId'))
    })
  }
}

let api = new SpendShelfApiClient()

export default api as ApiClient
