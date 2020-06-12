<template>
  <div>
    <slot name="accordion-head" v-bind="slotProps">
      <div class="flex justify-between items-center">
        <span>Head</span>
        <span @click.stop="toggle" class="btn btn-blue">trigger</span>
      </div>
    </slot>
    <transition name="fade" :css="true">
      <div :class="expansionClass" class="expandable">
        <slot>Body</slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Accordion',
    data() {
      return {
        expanded: true
      }
    },
    mounted() {

    },
    computed: {
      slotProps() {
        return {
          expanded: this.expanded,
          toggle: this.toggle,
          collapse: this.collapse,
          expand: this.expand
        }
      },
      expansionClass() {
        return {
          hide: !this.expanded
        }
      }
    },
    methods: {
      toggle() {
        this.expanded = !this.expanded
        this.$emit('onToggle', this.expanded)
      },
      expand() {
        if (!this.expanded) {
          this.expanded = true
          this.$emit('onExpand')
        }
      },
      collapse() {
        if (this.expanded) {
          this.expanded = true
          this.$emit('onCollapse')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .expandable {
    @apply relative;
    &.hide {
      overflow: hidden;
      height: 0;
    }
  }
</style>
