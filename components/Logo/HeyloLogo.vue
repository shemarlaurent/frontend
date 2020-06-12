<template>
  <div class="relative mx-auto flex justify-center" :style="computedStyle">
    <img :src="src" alt="Helyos" class="logo" >
  </div>
</template>

<script>
  export default {
    props: {
      src: {
        default: '/logo.svg',
        required: false,
        type: String
      },
      width: {
        type: Number,
        required: false,
        default: 100
      },
      height: {
        type: Number,
        required: false,
        default: 50
      }
    },
    computed: {
      computedWidth() {
        return this.width + 'px'
      }, computedHeight() {
        return this.height + 'px'
      },
      computedStyle() {
        return {
          width: this.computedWidth,
          height: this.computedHeight
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .logo{
    @apply relative w-full h-full object-contain object-center
  }
</style>
