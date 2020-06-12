<template>
  <div class="">
    <banner-slider/>
    <div class="my-16 px-6">
        <product-listing title="Hyped Releases" :products="products.data"/>
    </div>

    <div class="ad-banner" v-if="adbanner">
      <div class=""></div>
    </div>
    <newsletter-signup/>
    <contact-form/>
    <footer-section/>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        products: [],
        current_page: 1,
        adbanner: false,
        url: 'http://res.cloudinary.com/elox/image/upload/v1578653490/products/gypxtm76keuovvov0cpl.png'
      }
    },
    mounted() {
      this.getProducts();
    },
    methods: {
      getProducts(page = 1) {
        this.$axios.$get(`store/products/all?page=${page}`)
          .then(response => this.products = response)
          .catch(error => error);
      },

      loadMore() {
        this.current_page ++;
        this.$axios.$get(`store/products/all?page=${this.current_page}`)
          .then(response => {
            response.data.forEach(item => this.products.data.push(item))
            if (response.total === this.current_page) this.current_page = 0
          })
          .catch(error => error);
      },
    }
  }
</script>

<style>

</style>
