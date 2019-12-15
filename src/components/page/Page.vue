<template>
    <div class="column is-8-desktop is-offset-2-desktop">
      <slot name="content"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component({
  })
export default class Page extends Vue {
}

</script>

<style lang="scss">
</style>
