<template>
  <Page v-slot:content>
    <TransactionList/>
  </Page>
</template>

<script lang="ts">

import { Component, Provide, Vue } from 'vue-property-decorator'
import TransactionList from '@/components/transactions/TransactionList.vue'
import Page from '@/components/page/Page.vue'

  @Component({
    components: { Page, TransactionList }
  })
export default class App extends Vue {
    @Provide() formatter = new Intl.NumberFormat('en-us', { minimumFractionDigits: 2 })
}

</script>

<style lang="scss">
  #app {
  }
</style>
