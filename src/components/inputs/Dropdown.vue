<template>
    <div class="dropdown" v-bind:class="{ 'is-active': isActivated}">
      <div class="dropdown-trigger">
        <div aria-haspopup="true" aria-controls="dropdown-menu">
          <input v-on:click.stop="onInputClick" v-on:keyup.enter="onInputPressEnter" v-model="inputValue" class="input is-small" type="text" placeholder="Text input">
        </div>
      </div>
      <div v-if="wasActivated" class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a class="dropdown-item" v-for="k in values" v-bind:key="k" v-on:click.stop="onDropdownElementClick(k)">
            {{ k }}
          </a>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import Category from '@/api/Category'

@Component
export default class Dropdown extends Vue {
  inputValue: string = ''

  @State('Categories')
  Items!: Map<string, Category>

  @Emit()
  onSelected (id: string) {
    return id
  }

  @Emit()
  onAddedNew (name: string) {
    return name
  }

  getIdByName (name: string) : string | null {
    let id: string | null = null
    this.Items.forEach((value: Category) => {
      if (value.name === name) {
        id = value.id
      }
    })
    return id
  }

  isActivated: boolean = false
  wasActivated: boolean = false

  get values () {
    let tmp: string[] = []
    this.Items.forEach((v) => tmp.push(v.name))
    return tmp
  }

  onInputClick () {
    this.wasActivated = true
    this.isActivated = true
  }

  onDropdownElementClick (name: string) {
    this.onSelected(this.getIdByName(name)!)
  }

  onInputPressEnter () {
    if (this.inputValue) {
      this.onAddedNew(this.inputValue!)
    }
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
