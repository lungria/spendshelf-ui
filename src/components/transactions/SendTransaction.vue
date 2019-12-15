<template>
  <td>
    <div class="dropdown" v-bind:class="{ 'is-active': mouseOverButton || mouseOverList }">
      <div class="dropdown-trigger">
        <div v-on:mouseover.stop="mouseOverButton = true" v-on:mouseleave.stop="mouseOverButton = false" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Category ▼</span>
          <span class="icon is-small">
        <!--fontawesome required for the icon-->
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </span>
        </div>
      </div>
      <div v-on:mouseover.stop="mouseOverList = true" v-on:mouseleave.stop="mouseOverList = false" class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            🚀 Dream
          </a>
          <a class="dropdown-item">
            🚗 Car
          </a>
          <a href="#" class="dropdown-item">
            🏠 House
          </a>
          <a href="#" class="dropdown-item">
            🍉 Food
          </a>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">

          </a>
        </div>
      </div>
    </div>
  </td>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { TransactionId } from '@/models/TransactionData'

@Component
export default class SendTransaction extends Vue {
  @Prop()
  TransactionId?: TransactionId
  mouseOverButton: boolean = false
  mouseOverList: boolean = false
}

</script>

<style scoped>

</style>
