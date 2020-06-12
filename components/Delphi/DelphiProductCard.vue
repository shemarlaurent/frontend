<template>
  <div class="product-card" v-if="typeof(meta) === 'object'">
    <div class="product-card-inner">
      <div>
        <div class="flex w-full justify-end">
          <div>
            <div class="btn btn-sm" :class="[suggestion]">
              {{suggestion}}
            </div>
          </div>
        </div>
      </div>
      <figure class="product-card-thumb">
        <img class="h-image" :src="meta.images[0].url"
             alt="">
      </figure>
      <div class="product-meta">
        <div class="flex items-center justify-center">
          <div class="product-price ml-10" v-show="!noPrice">
            ${{meta.price}}
          </div>
          <div class="prediction-bar" :class="[suggestion]">
            <span class="mx-1">{{difference}}%</span>
            <template v-if="suggestion==='buy'">
              <svg width="16" height="16" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0L21.3923 14.2857L0.607696 14.2857L11 0Z" fill="#13F200"/>
              </svg>
            </template>
            <template v-if="suggestion==='sell'">
              <svg width="16" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 15.0476L0.607697 0.761893L21.3923 0.761893L11 15.0476Z" fill="#FF003F"/>
              </svg>
            </template>
            <template v-if="suggestion==='keep'">
              <svg width="16" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="22" height="6" rx="1" fill="#C4C4C4"/>
              </svg>
            </template>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link class="absolute w-full h-full left-0 top-0"
               :to="{name: 'delphi-slug', params: {'slug': meta.slug}}"></nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'DelphiProductCard',
    props: {
      predicted: {
        default: 79.99,
        type: Number
      },
      noPrice: {
        default: false,
        type: Boolean
      },
      meta: {
        default() {
          return {
          }
        }
      }
    },
    data() {
      return {
      }
    },
    mounted(){
    },
    computed:{
      difference(){
        return (this.predicted - this.meta.price).toFixed(2)
      },
      suggestion(){
        return this.difference > 1 ? 'buy' : (this.difference < 0 ? 'sell' : 'keep')
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .prediction-bar {
    @apply flex justify-between items-center mx-1;
    font-weight: 500;

    &.buy {

      position: relative;
      color: #13F200;
      box-sizing: border-box;
      border-radius: 2px;

    }

    &.sell {
      /* Rectangle 89 */

      position: relative;
      color: #FF003F;
      box-sizing: border-box;
      border-radius: 2px;

    }

    &.keep {
      /* Rectangle 91 */

      position: relative;
      color: #c4c4c4;
      box-sizing: border-box;
      border-radius: 2px;

    }
  }

  .product-card {
    position: relative;
    max-width: 300px;
    @apply my-4;
    .product-card-inner {
      @apply p-3 relative;
      .product-card-thumb {
        width: 80%;
        height: 200px;
        max-width: 300px;
        overflow: hidden;
        position: relative;
        @media (max-width: 768px){
          width: 100%;
        }
        @apply bg-white flex justify-center text-gray-400 object-center object-cover mx-auto;
        img {
          @apply w-full h-full object-contain object-center;
        }
      }
    }

    .product-price {
      position: relative;
      font-style: normal;
      font-weight: 500;
      /*line-height: 15px;*/
      font-size: 20px;
      text-align: center;
      @apply ml-2;
      color: #000000;
    }
  }

  .btn {
    @apply uppercase;
    padding: 7px !important;
    &.buy {

      position: relative;
      border: 1px solid currentColor;
      color: #0000FF;
      box-sizing: border-box;
      border-radius: 2px;

    }

    &.sell {
      /* Rectangle 89 */

      position: relative;
      border: 1px solid currentColor;
      color: #FF003F;
      box-sizing: border-box;
      border-radius: 2px;

    }

    &.keep {
      /* Rectangle 91 */

      position: relative;
      color: #13F200;
      border: 1px solid currentColor;
      box-sizing: border-box;
      border-radius: 2px;

    }
  }

  .btn-sm {

  }

</style>
