<template>
  <td hidden>{{this.Data.ID}}</td>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { TransactionId } from '@/models/TransactionData'

@Component
export default class SendTransaction extends Vue {
  @Prop()
  TransactionId?: TransactionId
}

</script>

<style scoped>

</style>
