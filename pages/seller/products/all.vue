<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item"><nuxt-link to="/seller/dashboard">Dashboard</nuxt-link></li>
            <li class="breadcrumb-item active"><nuxt-link to="#">Products</nuxt-link></li>
          </ol>
        </nav>
      </div>

      <div class="pb-3 text-gray-800 font-weight-medium">Inventory ({{ products ? products.length : '' }})</div>
      <div class="content-viewport">
        <div class="row">
          <div class="col-lg-12">
            <div class="grid">
              <div class="grid-body">
                <div class="item-wrapper">
                  <div class="table-responsive">
                    <table id="sample-data-table" class="table table-striped">
                      <thead>
                      <tr>
                        <th colspan="2" class="pl-4">Name</th>
                        <th>Brand</th>
                        <th>Average Price</th>
                        <th>SKU</th>
                        <th>Condition</th>
                        <th>Sizes</th>
                      </tr>
                      </thead>
                      <tbody v-if="products != null">
                      <tr v-for="product in products">
                        <td class="pr-0 pl-4">
                          <img class="profile-img img-sm" :src="product.images[0].url" alt="Product image">
                        </td>
                        <td class="w-25">
                          <nuxt-link class="truncate" :to="{ name: 'seller-products-preview-slug', params: { slug: product.slug } }">
                            {{ product.name }}
                          </nuxt-link>
                        </td>
                        <td>{{ product.brand}}</td>
                        <td>{{ format(product.price) }}</td>
                        <td>{{ product.sku.toUpperCase() }}</td>
                        <td>{{ product.condition }}</td>
                        <td>{{ product.variations.length }}</td>
                      </tr>

                      </tbody>
                      <tfoot>
                      <tr>
                        <th colspan="2" class="pl-4">Name</th>
                        <th>Brand</th>
                        <th>Average Price</th>
                        <th>SKU</th>
                        <th>Condition</th>
                        <th>Sizes</th>
                      </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import DataTable from 'datatables';
  export default {
    name: 'all',
    middleware: 'seller',
    layout: 'seller',
    head: {
      title: 'All Products',
    },

    data() {
      return {
        seller: this.$store.state.auth.seller || this.$cookies.get('helyos_seller'),
        products: null,
      }
    },

    computed: {

    },

    mounted() {
      this.getProducts();
      // if (process.client) {
      //   $('#sample-data-table').dataTable();
      // }
    },

    methods: {
      getProducts(page = 0) {
        this.$axios.$get('/seller/store/products/all', {
          headers: {
            'Authorization': 'Bearer ' + this.seller.token
          }
        }).then(response => {
          this.products = response;

        })
          .catch(error => console.log(error));
      }
    }
  }
</script>

<style scoped>

</style>
