<template>
  <div class="container">
    <delphi-slider v-if="product" :product="product"/>
    <!--Related product-->
    <related-product :relatedProducts="related" :id="1" title="Related Products"/>
  </div>
</template>

<script>
  export default {
    name: 'index',
    layout: 'delphi',
    data() {
      return {
        product: null,
        related: []
      }
    },

    mounted() {
      this.getProduct();
    },

    methods: {
      getProduct() {
        this.$axios.$get('store/products/' + this.$route.params.slug)
          .then(response => {
            this.product = response.product
            this.related = response.related
          })
          .catch(error => error)
      },

    }
  }
</script>

<style lang="scss">

</style>
