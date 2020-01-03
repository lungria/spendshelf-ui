<template>
  <tr id="transaction" class="table is-size-6-desktop is-size-7-mobile">
    <td>{{this.Data.ID}}</td>
    <td class="transaction-description">{{this.Data.Description}}</td>
    <td>₴{{this.FormattedAmount}}</td>
    <td>{{this.Data.DateTime.toLocaleDateString()}}</td>
    <td>
      <DropdownWithInput v-bind:Items="this.Categories" v-on:on-selected="this.removeTransactionEvent" />
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'
import TransactionData from '@/modules/transactions/TransactionData'
import DropdownWithInput from '@/components/inputs/DropdownWithInput.vue'
import { Action } from 'vuex-class'
import { SendTransactionActionPayload } from '@/modules/transactions/Actions'
@Component({
  components: { DropdownWithInput }
})
export default class Transaction extends Vue {
  @Inject() readonly formatter!: Intl.NumberFormat

  @Prop()
  Data!: TransactionData

  removeTransactionEvent (category: string) {
    this.sendTransaction(new SendTransactionActionPayload(this.Data.ID, category))
  }

  @Action sendTransaction: any
  Categories: Array<string> = []
  constructor () {
    super()
    this.Categories.push('Home')
    this.Categories.push('Car')
    this.Categories.push('Dream')
    this.Categories.push('Food')
  }

  get FormattedAmount () {
    if (this.Data) {
      return this.formatter.format(this.Data.Amount)
    } else return '0.00'
  }
}

</script>

<style scoped>
  .transaction-description {
    min-width: 30%;
    max-width: 30%; /* TODO: fix */
  }
</style>
