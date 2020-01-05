import Category from '@/api/Category'

export default class CategoriesResponse {
  Categories!: Category[]
  constructor (Categories: Category[]) {
    this.Categories = Categories
  }
}
