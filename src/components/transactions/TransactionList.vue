<template>
  <table class="table is-striped is-fullwidth" id="app">
    <thead>
    <tr class="is-size-6 is-size-7-mobile">
      <td id="id-col">Id</td>
      <td id="description-col">Description</td>
      <td id="amount-col">Amount</td>
      <td id="date-col">Date</td>
      <td id="dropdown-col"/>
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
import { TransactionsState } from '@/modules/transactions/TransactionsState'

  @Component({
    components: { Transaction }
  })
export default class TransactionList extends Vue {
    @State
    Transactions!: TransactionData[]
}
</script>

<style lang="scss">
  #description-col {
    width: 35%;
  }
  #id-col {
    width: 20%;
  }
  #amount-col {
    width: 10%;
  }
  #date-col {
    width: 13%;
  }
  #dropdown-col {
    width: 22%;
  }
</style>
