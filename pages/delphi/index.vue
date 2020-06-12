<template>
  <div class="block">
    <div class="block w-full">
      <div class="flex w-full my-4">
        <!--Aside-->
        <product-filter>
          <div slot-scope="props">
            <div class="container">
              <div class="w-auto relative flex-auto mx-auto">
                <div class="caption-text text-center px-6 text-sm my-4">
                  See the future with Delphi, our A.I. uses previous user data to predict the future prices of items up to a
                  week in advance
                </div>
                <div>
                  <product-grid :items="props" name="delphi-product-listing">
                      <delphi-product slot-scope="props" :meta="props.item"/>
                  </product-grid>

                </div>
              </div>
            </div>
          </div>
        </product-filter>
        <!--main-->

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    layout: 'delphi',
    data() {
      return {
        loaded: false,
        products: [],
      }
    },

    mounted() {

      this.getProducts();
    },
    methods: {
      getProducts(page = 0) {
        this.$axios.$get('store/products/all')
          .then(response => this.products = response)
          .catch(error => error);
      }
    }
  }
</script>

<style scoped lang="scss">
  .filter-sidebar {
    position: relative;
    min-width: 250px;
    max-width: 300px;
    @media (max-width: 1024px) {
      position: absolute;
      left: -100%;
    }
  }

  .caption-text {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;

    color: #000000;
  }
</style>
