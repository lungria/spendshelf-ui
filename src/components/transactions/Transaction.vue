<template>
  <tr id="transaction" class="table">
    <td>{{this.Data.ID}}</td>
    <td>{{this.Data.Description}}</td>
    <td>{{this.Data.MCC}}</td>
    <td>₴{{this.FormattedAmount}}</td>
    <td>{{this.Data.DateTime.toLocaleDateString()}}</td>
  </tr>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'
import TransactionData from '@/models/TransactionData'

@Component
export default class Transaction extends Vue {
  @Inject() readonly formatter!: Intl.NumberFormat

  @Prop()
  Data?: TransactionData

  get FormattedAmount () {
    if (this.Data) {
      return this.formatter.format(this.Data.Amount)
    } else return '0.00'
  }
}

</script>

<style scoped>

</style>sh
