<template>
  <tr id="transaction" class="table is-size-6-desktop is-size-7-mobile">
    <td>{{this.Data.ID}}</td>
    <td class="transaction-description">{{this.Data.Description}}</td>
    <td>₴{{this.FormattedAmount}}</td>
    <td>{{this.Data.DateTime.toLocaleDateString()}}</td>
    <SendTransaction v-bind:transaction-id="this.Data.ID"/>
  </tr>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'
import TransactionData from '@/modules/transactions/TransactionData'
import SendTransaction from '@/components/transactions/SendTransaction.vue'
@Component({
  components: { SendTransaction }
})
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
  .transaction-description {
    min-width: 30%;
  }
</style>
