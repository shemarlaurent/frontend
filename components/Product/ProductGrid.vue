<template>
  <div class="product-listing">
    <div class="grid" v-for="(item, index) in items" :key="`product-grid-${name}-${index}`">
      <slot v-bind="{item: item, index: index}"></slot>
    </div>
    <div v-if="isEmpty(items) ">
      <slot name="nothing"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductGrid',
    props: {
      name: {
        type: String,
        required: true
      },
      items: {
        type: [Array, Object],
        required: true,
        default() {
          return []
        }
      }
    },
    methods:{
      isEmpty(obj) {
        for(var key in obj) {
          if(obj.hasOwnProperty(key))
            return false;
        }
        return true;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .product-listing {
    @apply flex flex-wrap  font-sans justify-center;

    .load-more {
      @apply flex justify-center w-screen my-12;
      button {
        @apply rounded-full border border-black w-24 h-24 p-2  font-semibold font-sans leading-normal overflow-hidden  text-black;
      }
    }
  }

  .grid {
    @apply w-3/12 ;
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .product-listing {
      .grid {
        @apply w-1/4;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .product-listing {
      .grid {
        @apply w-1/3;
      }
    }
  }

  @media (max-width: 767px) {
    .product-listing {
      .grid {
        @apply w-1/2;
      }
    }
  }
</style>
