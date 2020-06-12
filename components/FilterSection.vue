<template>
  <div class="filter-section">
    <accordion>
      <template slot="accordion-head" slot-scope="props">
        <div class="section-head">
          <div class="flex justify-between items-center">
            <div class="flex items-center relative">
              <span>{{title}}</span>
              <span v-show="count" class="count-badge" v-text="count"></span>
            </div>
            <div class="indicator cursor-pointer" @click.stop="props.toggle">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-arrow-up" v-if="props.expanded"></use>
                <use xlink:href="#icon-arrow-down" v-else></use>
              </svg>
            </div>
          </div>
        </div>
      </template>
      <div class="section-body">
        <slot name="filter-section-content" v-bind="slotProps"></slot>
      </div>
    </accordion>
  </div>
</template>

<script>
  export default {
    name: 'FilterSection',
    props: {
      title: {
        default: 'Title',
        type: String,
        required: true
      }
    },
    data() {
      return {
        filter: {
          type: this.title,
          payload: []
        }
      }
    },
    computed: {
      count(){
        return this.filter.payload.length
      },
      slotProps() {
        return {
          add: this.addFilter,
          toggle: this.toggleFilter,
          remove: this.removeFilter,
          count: this.count,
          has: this.findIndex
        }
      }
    },
    methods: {
      addFilter(keyword) {
        let index = this.findIndex()

        if (!index) {
          this.filter.payload.push(keyword)
          let data = {
            index: index,
            keyword: keyword
          }
          this.$emit('onFilterAdded', data)
        }
      },
      toggleFilter(keyword) {
        let index = this.findIndex(keyword)
        if (!index ) {
          this.addFilter(keyword)
        } else {
          this.removeFilter(keyword)
        }
      },
      findIndex(keyword) {
        return (this.filter.payload.indexOf(keyword) > -1)
      },
      removeFilter(keyword) {
        let index = this.findIndex(keyword)
        if(index){
          this.filter.payload.splice(index, 1)
          let data = {
            index: index,
            keyword: keyword
          }
          this.$emit('onFilterDeleted', data)
        }
      }
    }
  }
</script>

