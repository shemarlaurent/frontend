<template>
  <div @mouseenter="popupOpen" @mouseleave="popupClose">
    <slot v-bind="slotProps">
      <div>Tip popup element</div>
    </slot>
    <transition name="fade">
      <slot v-if="open" name="content" v-bind="slotProps">
        <div class="bg-red-700">
          Content
        </div>
      </slot>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'TipPopup',
    data() {
      return {
        open: false

      }
    },
    computed: {
      slotProps() {
        return {
          toggleOpen: this.toggleOpen,
          popupClose: this.popupClose,
          popupOpen: this.popupOpen
        }
      }
    },
    methods: {
      toggleOpen() {
        this.open = !this.open
      },
      popupOpen() {
        this.open = true
      }, popupClose() {
        this.open = false
      }
    }
  }
</script>

<style scoped>

</style>
