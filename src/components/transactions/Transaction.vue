<template>
  <tr id="transaction">
    <td>{{this.Data.ID}}</td>
    <td>{{this.Data.Description}}</td>
    <td>{{this.Data.Amount}}</td>
    <td>{{this.Data.MCC}}</td>
    <td>{{this.Data.DateTime.toLocaleDateString()}}</td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TransactionData from '@/models/TransactionData'

@Component
export default class Transaction extends Vue {
  @Prop()
  Data?: TransactionData
}

</script>

<style scoped>

</style>sh
