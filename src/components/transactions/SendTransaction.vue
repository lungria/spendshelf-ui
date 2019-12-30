<template>
  <td>
    <DropdownWithInput v-bind:Items="this.Categories"/>
  </td>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import DropdownWithInput from '@/components/inputs/DropdownWithInput.vue'
@Component({
  components: { DropdownWithInput }
})
export default class SendTransaction extends Vue {
  Categories: Array<string> = []
  constructor () {
    super()
    this.Categories.push('Home')
    this.Categories.push('Car')
    this.Categories.push('Dream')
    this.Categories.push('Food')
  }
}
</script>

<style scoped lang="scss">

</style>
