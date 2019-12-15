<template>
  <TransactionList />
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import TransactionData from '@/models/TransactionData'
import Transaction from '@/components/transactions/Transaction.vue'
import TransactionList from '@/components/transactions/TransactionList.vue'

  @Component({
    components: { TransactionList }
  })
export default class App extends Vue {

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
