import CategoriesResponse from '@/api/CategoriesResponse'
import Category from '@/api/Category'
import SendTransactionRequest from '@/api/SendTransactionRequest'
import TransactionsResponse from '@/api/TransactionsResponse'
import TransactionData from '@/modules/transactions/TransactionData'

const serverUrl: string = 'http://localhost:80'

interface ApiClient {
  GetCategories(): Promise<CategoriesResponse>;

  GetTransactions(): Promise<TransactionData[]>

  CreateCategory(name: string): Promise<Category>;

  SendTransaction(request: SendTransactionRequest): Promise<void>;
}

let api: ApiClient

/* if (process.env.USE_MOCK === 'true') {
  class MockApiClient implements ApiClient {
    async GetCategories (): Promise<CategoriesResponse> {
      return new Promise<CategoriesResponse>((resolve) => {
        resolve({
          categories: [
            new Category('test1', 'id1'),
            new Category('test2', 'id2')
          ] })
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
        resolve(new Category(name, Math.random().toString(36)))
      })
    }
  }

  api = new MockApiClient()
} else { */
class SpendshelfApiClient implements ApiClient {
  async GetCategories (): Promise<CategoriesResponse> {
    let response = await fetch(serverUrl + '/categories')
    return response.json()
  }

  async SendTransaction (request: SendTransactionRequest): Promise<void> {
    return new Promise((resolve) => {
      console.log(request)
      resolve()
    })
  }

  async CreateCategory (name: string): Promise<Category> {
    let req = new Request(serverUrl + '/categories', {
      method: 'post',
      body: JSON.stringify({ name: name })
    })
    let response = await fetch(req)
    let obj = await response.json()
    obj.name = name
    return obj
  }

  async GetTransactions (): Promise<TransactionData[]> {
    let response = await fetch(serverUrl + '/transactions?category=without')
    let json : TransactionsResponse = await response.json()
    console.log(json)
    return json.transactions.map(x => Object.assign({}, x, { dateTime: new Date(x.dateTime) }))
  }
}

api = new SpendshelfApiClient()

export default api as ApiClient
