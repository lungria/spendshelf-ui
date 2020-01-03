import CategoriesResponse from '@/api/CategoriesResponse'
import TransactionData, {TransactionId} from '@/modules/transactions/TransactionData'
import Category from '@/api/Category'

interface ApiClient {
  GetCategories(): Promise<CategoriesResponse>;
  SendTransaction(t: TransactionId, c: string): Promise<void>;
}

class SpendShelfApiClient implements ApiClient {
  public GetCategories (): Promise<CategoriesResponse> {
    return new Promise<CategoriesResponse>((resolve) => {
      resolve(new CategoriesResponse([
        new Category('test1', 'id1'),
        new Category('test2', 'id2')
      ]))
    })
  }

  async SendTransaction (t: TransactionId, c: string): Promise<void> {
    return new Promise((resolve) => {
      console.log(t)
      console.log(c)
      resolve()
    })
  }
}

let api = new SpendShelfApiClient()

export default api as ApiClient
