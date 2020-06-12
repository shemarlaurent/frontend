<template>
  <div class="container mx-auto">
    <div class="headline-lg">
      Orders
    </div>
    <div class="result-hint">{{ orders.length }} previous orders</div>

    <div>
      <div class="product-listing-linear">
        <div
          class="linear-product-card"
          v-for="order in orders"
          :key="order.id"
        >
          <div
            class="flex items-stretch justify-around w-full "
          >
            <!-- Image -->
            <figure class="product-card-thumb">
              <!-- Image url here -->
             <nuxt-link to="/">
                <img
                :src="order.product_variation.product.images[0].url"
                alt="Product Image"
              />
             </nuxt-link>
            </figure>

            <!-- Product meta -->
            <div class="product-meta ">
              <span class="text-lg font-semibold block">
                Shipped: Date
              </span>

              <div class=" hint block">
                <span class="capitalize truncate">
                  {{ order.product_variation.product.name }}
                </span>
                <span>{{ order.size }}</span>
              </div>

              <div class=" product-price font-bold my-2">
                {{ format(order.amount) }}
              </div>

              <!-- Buttons -->
              <button
                @click="reorder"
                class="z-3 btn-blue btn btn-sm rounded text-xs m-0"
                v-if="order.type !== 'nebula'"
              >
                Buy it again
              </button>

              <button
                @click="reorderNebula"
                class="z-3 btn-nebula btn btn-sm rounded text-xs m-0"
                v-else
              >
                Buy Again
              </button>
            </div>
            <!-- End product meta -->

            <!-- Date purchased -->
            <div
              class="flex-1 my-auto px-2 flex-shrink-0 whitespace-no-wrap text-xs"
            >
              <div class="hint">Data purchased</div>
              <div class="hint">Item #: {{ order.code }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductLikesListing',
  props: {
    title: {
      default: 'Product'
    },
    orders: {
      default: [],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-listing-linear {
  @apply block border-t border-h-300 ;
  .hover {
    &:hover {
      @apply border-h-300;
    }
  }

  .linear-product-card {
    @apply w-full px-3 bg-white relative overflow-hidden  border-b border-h-300 relative;

    

    .product-card-thumb {
      width: 250px;
      max-height: 170px;
      overflow: hidden;
      position: relative;
      @apply bg-white flex justify-center text-gray-400;
      img {
        top: 0;
        left: 0;
        @apply w-full h-full object-center object-contain;
      }
    }

    .product-meta {
      @apply w-full text-xs relative  px-8 py-4 block h-full;
      .product-price {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
      color: #000000;
    }
    }
  }

  .load-more {
    @apply flex justify-center w-screen my-12;
    button {
      @apply rounded-full border border-black w-24 h-24 p-2  font-semibold font-sans leading-normal overflow-hidden  text-black;
    }
  }
}

@media (min-width: 1024px) and (max-width: 1280px) {
  .product-listing {
    .product-card {
      @apply w-1/3;
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .product-listing {
    .product-card {
      @apply w-1/2;
    }
  }
}

@media (max-width: 768px) {
  .product-listing {
    .product-card {
      @apply w-11/12;
    }
  }
}
</style>
