<template>
  <table class="table is-striped is-fullwidth" id="app">
    <thead>
    <tr class="is-size-6 is-size-7-mobile">
      <td>Id</td>
      <td>Description</td>
      <td>Amount</td>
      <td>Date</td>
      <td/>
    </tr>
    </thead>
    <tbody>
     <Transaction v-for="t in Transactions" v-bind:key="t.ID" v-bind:Data="t" />
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TransactionData from '@/modules/transactions/TransactionData'
import Transaction from '@/components/transactions/Transaction.vue'
import { State } from 'vuex-class'
import { TransactionsState } from '@/modules/TransactionsState'

  @Component({
    components: { Transaction }
  })
export default class TransactionList extends Vue {
    @State
    Transactions?: TransactionData[]
}
</script>

<style lang="scss">
</style>
