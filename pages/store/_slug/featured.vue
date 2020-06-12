<template>
  <div>
    <div class="my-4">
      <featured-product @onShowPaymentSidebar="showSidebar" :product="product"/>
      <!--Use the ID of the current product to get the related products-->
      <related-product :id="1"/>
      <transition name="slide-from-right">
        <single-product-sidebar ref="sidebar"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import FeaturedProduct from '~/components/Product/FeaturedProduct'

  export default {
    name: 'Featured',
    components: { FeaturedProduct },
    data() {
      return {
        ready: false,
        timeout: null,
        product: null,

      }
    },
    created() {
      this.demoLoader()
    },
    methods: {
      demoLoader() {
        this.getProduct();
        this.timeout = setTimeout(this.isReady, 3000)
      },
      isReady() {
        this.ready = true
        clearTimeout(this.timeout)
      },
      showSidebar() {
        this.$refs['sidebar'].toggleShow()
      },
      getProduct(){
        /*Get the product meta using the route id*/
        this.product = {
          id: 1,
          name: 'Product name',
          brand: 'Brand name',
          condition: 'New',
          sku: 'SKU: AT57H-87U',
          thumb: '',
          like: false,
          stock: 23
        }
      }
    }
  }
</script>

<style scoped>

</style>
