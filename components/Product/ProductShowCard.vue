<template>
  <div class="product-card" v-if="typeof(product) === 'object'">
    <div class="product-show-card-inner">
      <div class="product-price" v-show="!noPrice">
        {{ format(product.price) }}
      </div>
      <figure class="product-card-thumb">
        <div class="absolute right-0 mr-4 cursor-pointer above" v-if="addToCartBtn">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <circle r="9" transform="matrix(1 0 0 -1 9.5 9.5)" stroke="black"/>
            <path
              d="M13.0625 9.93333H10.1175V12.815H9.11998V9.93333H6.17498V8.99917H9.11998V6.10167H10.1175V8.99917H13.0625V9.93333Z"
              fill="black"/>
          </svg>
        </div>
        <img class="h-image" :src="product.images[0].url" alt="">
      </figure>
      <div class="product-meta">
        <p class="title leading-normal text-sm ellipsis capitalize"  v-show="!noName">{{product.name}}</p>
      </div>
    </div>
    <nuxt-link class="absolute w-full h-full left-0 top-0"
               :to="{name: 'store-slug', params: {'slug': product.slug}}"></nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      noName:{
       default: false,
       type: Boolean
      }, noPrice:{
       default: false,
       type: Boolean
      },
      addToCartBtn:{
        default: false,
        type: Boolean,
        required: false
      },
      product: {
        default() {
          return {}
        }
      }
    }
  }
</script>


<style scoped lang="scss">
  .product-card {
    @apply bg-white  relative block flex-1;

    .product-price {
      @apply font-bold m-4 absolute right-0 text-h-300;
      z-index: 3 ;
    }

    .product-show-card-inner {
      z-index: 2;
     @apply pb-6;
    }

    .product-card-thumb {
      max-width: 250px;
      height: 250px;
      @apply flex items-center justify-center mx-auto relative ;
      @media (max-width: 768px){
      }
      .h-image {
        @apply  object-cover object-center;
      }
    }

    .product-meta {
      line-height: 1.5;
      letter-spacing: 0.03em;
      @apply text-xs text-black text-center font-normal;
    }
  }
</style>

