import Category from '@/api/Category'

export default class CategoriesResponse {
  categories!: Category[]
  constructor (categories: Category[]) {
    this.categories = categories
  }
}
