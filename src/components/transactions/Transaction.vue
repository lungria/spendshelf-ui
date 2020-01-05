<template>
  <tr id="transaction" class="table is-size-6-desktop is-size-7-mobile">
    <td>{{this.Data.ID}}</td>
    <td class="transaction-description">{{this.Data.Description}}</td>
    <td>₴{{this.FormattedAmount}}</td>
    <td>{{this.Data.DateTime.toLocaleDateString()}}</td>
    <td>
      <DropdownWithInput v-on:on-selected="this.onCategorySelected" v-on:on-added-new="this.onCategoryCreated"/>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'
import TransactionData from '@/modules/transactions/TransactionData'
import DropdownWithInput from '@/components/inputs/DropdownWithInput.vue'
import { Action, State } from 'vuex-class'
import {
  SendTransactionActionPayload,
  SendTransactionWithExistingCategoryActionPayload
} from '@/modules/transactions/Actions'
import Category from '@/api/Category'
@Component({
  components: { DropdownWithInput }
})
export default class Transaction extends Vue {
  @Inject() readonly formatter!: Intl.NumberFormat

  @Prop()
  Data!: TransactionData

  @Action
  sendTransaction: any
  @Action
  sendTransactionWithNewCategory: any

  onCategorySelected (id: string) {
    this.sendTransaction(new SendTransactionWithExistingCategoryActionPayload(this.Data.ID, id))
  }

  onCategoryCreated (category: string) {
    this.sendTransactionWithNewCategory(new SendTransactionActionPayload(this.Data.ID, category))
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
