<template>
    <div class="dropdown" v-bind:class="{ 'is-active': clickedOnInput || enteringData || ( mouseOverInput && categoryName.length > 1 ) || mouseOverList }">
      <div class="dropdown-trigger">
        <div aria-haspopup="true" aria-controls="dropdown-menu">
          <input v-on:keyup.enter="selectedItem" v-on:keydown.down="IncSelectedItemIndex"  v-on:keyup.down="IncSelectedItemIndexStop" v-on:keydown.up="DecSelectedItemIndex"  v-on:keyup.up="DecSelectedItemIndexStop" v-on:input.stop="InputLetter" v-on:click.stop="clickedOnInput = true" v-on:mouseleave.stop="mouseLeave" v-on:mouseenter.stop="mouseOverInput = true" v-model="categoryName" class="input is-small" type="text" placeholder="Text input">
        </div>
      </div>
      <div v-on:mouseover.stop="mouseOverList = true" v-on:mouseleave.stop="mouseOverList = false" class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a class="dropdown-item" v-bind:class="{'is-active': k === SelectedItemData}" v-for="k in Items" v-bind:key="k">
            {{ k }}
          </a>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import _, { Cancelable } from 'lodash'

@Component
export default class DropdownWithInput extends Vue {
  clickedOnInput: boolean = false
  mouseOverInput: boolean = false
  enteringData: boolean = false
  mouseOverList: boolean = false
  selectedItemIndex: number = -1
  IncSelectedItemIndexRid: any
  DecSelectedItemIndexRid: any
  categoryName: string = ''
  debouncer: (() => void) & Cancelable

  @Prop()
  Items!: Array<string>
  constructor () {
    super()
    this.debouncer = _.debounce(this.Hide, 500)
  }

  InputLetter () {
    this.enteringData = true
    console.log(this.categoryName)
    this.debouncer()
  }

  selectedItem () {
    if (this.selectedItemIndex === -1) {
      console.log('selected ' + this.categoryName)
    } else {
      console.log('selected ' + this.Items[this.selectedItemIndex])
    }
  }

  Hide () {
    this.enteringData = false
    this.selectedItemIndex = -1
    console.log('debounced')
  }

  mouseLeave () {
    this.clickedOnInput = false
    this.mouseOverInput = false
    this.selectedItemIndex = -1
  }

  IncSelectedItemIndex () {
    this.IncSelectedItemIndexRid = window.requestAnimationFrame(() => {
      if (this.selectedItemIndex < this.Items.length - 1) {
        this.selectedItemIndex++
      } else {
        window.cancelAnimationFrame(this.IncSelectedItemIndexRid)
      }
    })
  }

  IncSelectedItemIndexStop () {
    window.cancelAnimationFrame(this.IncSelectedItemIndexRid)
  }

  DecSelectedItemIndex () {
    this.DecSelectedItemIndexRid = window.requestAnimationFrame(() => {
      if (this.selectedItemIndex > -1) {
        this.selectedItemIndex--
      } else {
        window.cancelAnimationFrame(this.DecSelectedItemIndexRid)
      }
    })
  }

  DecSelectedItemIndexStop () {
    window.cancelAnimationFrame(this.DecSelectedItemIndexRid)
  }

  get SelectedItemData () {
    if (this.selectedItemIndex > -1) {
      return this.Items[this.selectedItemIndex]
    }
    return ''
  }
}
</script>

<style scoped lang="scss">
  .dropdown {
    display: block;
  }
  .dropdown-menu {
    width: 100%;
  }
</style>
