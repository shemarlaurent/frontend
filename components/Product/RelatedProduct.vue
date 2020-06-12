<template>
  <div class="container my-10 " v-show="relatedProducts">
    <div>
      <h3 class="headline-sm bg-black inline-block text-white px-4 py-2 my-4 title-bg">{{title}}</h3>
    </div>
    <!-- <div class="rounded-lg"> -->
      <!--TODO: Use the ID to get related products for that particular ID-->
      <!--List the related products from the current product ID-->

      <!-- <div class="block">
        <heylo-swiper class="below" :loop="true" :freeMode="true" :breakpoints="breakpoints" :centeredSlides="false" :autoplay="true" :navigation="false">
          <swiper-slide v-for="(product, index) in relatedProducts" class=""
                        :key="`single-product-slider-${index}-${product.id}`">
              <product-show-card :product="product" :noPrice="true"  :addToCartBtn="addToCartBtn"/>
          </swiper-slide>
        </heylo-swiper>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'RelatedProduct',
    props: {
      addToCartBtn:{
        default: false,
        type: Boolean,
        required: false
      },
      id: {
        default: 1,
        type: Number,
        required: true
      },
      title: {
        default: 'Related product',
        type: String
      },
      relatedProducts: {
        default: () => [],
        type: Array
      } 
    },
    mounted() {
      console.log(this.relatedProducts);
    },
    data() {
      return {
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 2
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 2
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          }
        }
      }
    }
  }
</script>


<style>
  .title-bg {
    background-color: #323232 !important;
  }
  
</style>