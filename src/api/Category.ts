import DropdownElement from '@/components/inputs/DropdownElement'

export default class Category implements DropdownElement {
  Name!: string
  Id!: string
  constructor (name: string, id: string) {
    this.Name = name
    this.Id = id
  }
}
