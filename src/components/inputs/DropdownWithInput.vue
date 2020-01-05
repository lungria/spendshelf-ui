<template>
    <div class="dropdown" v-bind:class="{ 'is-active': isActived}">
      <div class="dropdown-trigger">
        <div aria-haspopup="true" aria-controls="dropdown-menu">
          <input v-on:keyup.enter="selectedItem" v-on:keydown.down="IncSelectedItemIndex" v-on:keyup.down="IncSelectedItemIndexStop" v-on:keydown.up="DecSelectedItemIndex" v-on:keyup.up="DecSelectedItemIndexStop" v-on:input.stop="InputLetter" v-on:click.stop="clickedOnInput = true" v-on:mouseleave.stop="mouseLeave" v-on:mouseenter.stop="mouseOverInput = true" v-model="inputValue" class="input is-small" type="text" placeholder="Text input">
        </div>
      </div>
      <div v-if="isActived" v-on:mouseover.stop="mouseOverList = true" v-on:mouseleave.stop="mouseOverList = false" class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a class="dropdown-item" v-bind:class="{'is-active': k === SelectedItemData}" v-for="k in fuzzy.values()" v-bind:key="k" v-on:click.stop="selectItemByMouse(k)">
            {{ k }}
          </a>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
import _, { Cancelable } from 'lodash'
import FuzzySet from 'fuzzyset.js'
import { State } from 'vuex-class'
import DropdownElement from '@/components/inputs/DropdownElement'

@Component
export default class DropdownWithInput extends Vue {
  clickedOnInput: boolean = false
  allowToTravelByArrow: boolean = true
  mouseOverInput: boolean = false
  enteringData: boolean = false
  mouseOverList: boolean = false
  selectedItemIndex: number = -1
  IncSelectedItemIndexRid: any
  DecSelectedItemIndexRid: any
  inputValue: string = ''
  debouncer: (() => void) & Cancelable

  @State('Categories')
  Items!: Array<DropdownElement>

  @Emit()
  onSelected (id: string) {
    return id
  }

  @Emit()
  onAddedNew (name: string) {
    return name
  }

  constructor () {
    super()
    this.debouncer = _.debounce(this.Hide, 100)
  }

  InputLetter () {
    this.enteringData = true
    this.debouncer()
  }

  getIdByName (name: string) : string | null { // todo: fix https://github.com/Glench/fuzzyset.js/issues/7
    let elem = this.Items.find(x => x.Name === name)
    return elem ? elem.Id : null
  }

  selectedItem () {
    if (this.selectedItemIndex === -1) {
      this.onAddedNew(this.inputValue)
    } else {
      this.onSelected(this.getIdByName(this.sorted[this.selectedItemIndex])!)
    }
  }

  selectItemByMouse (name: string) {
    this.onSelected(this.getIdByName(name)!)
  }

  Hide () {
    this.enteringData = false
    this.selectedItemIndex = -1
    if (!this.inputValue) {
      this.allowToTravelByArrow = true
      return
    }
    let fuzzed = this.fuzzy!.get(this.inputValue)
    if (fuzzed) {
      this.allowToTravelByArrow = true
    } else {
      this.allowToTravelByArrow = false
    }
  }

  mouseLeave () {
    this.clickedOnInput = false
    this.mouseOverInput = false
    this.selectedItemIndex = -1
  }

  IncSelectedItemIndex () {
    if (!this.allowToTravelByArrow) {
      return
    }
    this.IncSelectedItemIndexRid = window.requestAnimationFrame(() => {
      if (this.selectedItemIndex < this.sorted.length - 1) {
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
    if (!this.allowToTravelByArrow) {
      return
    }
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
      return this.sorted[this.selectedItemIndex]
    }
    return ''
  }

  get fuzzy () {
    return FuzzySet(this.Items.map(x => x.Name))
  }

  get sorted () {
    return this.fuzzy === null ? [] : this.fuzzy.values()
  }
  // TODO: get activated once
  get isActived () {
    return this.clickedOnInput || this.enteringData || (this.mouseOverInput && this.inputValue.length > 1) || this.mouseOverList
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
