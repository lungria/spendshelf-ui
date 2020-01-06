import DropdownElement from '@/components/inputs/DropdownElement'

export default class Category implements DropdownElement {
  name!: string
  id!: string
  constructor (name: string, id: string) {
    this.name = name
    this.id = id
  }
}
