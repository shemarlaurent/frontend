<template>
  <div class="block">
    <div class="block w-full">
        <!--Aside-->
        <product-filter ref="filter">
          <div slot-scope="props" v-if="props">
            <product-listing :products="props" />
          </div>
        </product-filter>
        <!--main-->
    </div>
  </div>
</template>

<script>
  import VerifyProp from '../../components/VerifyProp'
  export default {
    name: 'ProductIndex',
    components: { VerifyProp },
    data() {
      return {
        data: null,
      }
    },

    mounted() {
      this.getProducts();
    },
    methods:{
      toggleFilter(){
        this.$refs['filter'].reveal();
      },

      getProducts(page = 1) {
        this.$axios.$get(`store/products/all?page=${page}`)
          .then(response => this.data = response.data)
          .catch(error => error);
      },
    }
  }
</script>
