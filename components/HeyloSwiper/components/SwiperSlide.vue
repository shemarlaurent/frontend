<template>
  <div class="swiper-slide">
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'Swiper-slide'
  }
</script>

<style scoped lang="scss">
  .swiper-slide {
    font-size: 18px;
    display: block;
    min-height: 10rem;
    z-index: auto;
  @apply w-auto;  
  }
</style>
