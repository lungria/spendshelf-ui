<template>
  <table class="table" id="app">
    <tbody>
     <Transaction v-for="t in info" v-bind:key="t.ID" v-bind:Data="t" />
    </tbody>
  </table>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import TransactionData from '@/models/TransactionData'
import Transaction from '@/components/transactions/Transaction.vue'

  @Component({
    components: { Transaction }
  })
export default class App extends Vue {
    info: TransactionData[] = [
      new TransactionData(100, 'ATB', 123, 'ob1', new Date(2019, 12, 2, 1, 12)),
      new TransactionData(102, 'asd', 123, 'ob3', new Date(2019, 4, 2, 1, 12)),
      new TransactionData(101, 'fasfasf', 1213, 'on4', new Date(2019, 3, 2, 1, 12)),
      new TransactionData(102, 'asd', 123, 'obq3', new Date(2019, 2, 2, 1, 12))
    ].sort((x, y) => y.DateTime.getTime() - x.DateTime.getTime())
}

</script>

<style lang="scss">
  #app {
    font-family: $font-stack;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
