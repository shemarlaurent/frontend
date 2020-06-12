<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item">
              <nuxt-link :to="{ name: 'admin-dashboard' }">Dashboard</nuxt-link>
            </li>
            <li class="breadcrumb-item">
              <nuxt-link :to="{ name: 'admin-priced-products' }">Priced Products</nuxt-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Add Product</li>
          </ol>
        </nav>
      </div>
      <div class="content-viewport">
        <div class="row">
          <div class="col-lg-12">
            <div class="grid">
              <div class="grid-body">
                <h6 class="font-weight-normal mb-3">Select products</h6>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Products</label>
                        <multiselect :options="products" track-by="id" label="name" v-model="selected" :multiple="true" :close-on-select="false" />
                      </div>
                    </div>
                  </div>

                  <div class="row pt-8">
                    <div class="col-md-5 col-sm-12 col-lg-5">
                      <button class="btn btn-secondary">
                        Cancel
                      </button>
                      <button @click="addProducts" class="btn btn-primary">
                        Add Products
                      </button>
                    </div>
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
  export default {
    name: 'AddPricedProduct',
    middleware: 'admin',
    layout: 'admin',
    data() {
      return {
        selected: [],
        products: [],
        adding: false,
        loading: false,
      }
    },

    mounted() {
      this.getProducts()
    },

    methods: {
      getProducts() {
        this.$axios.$get('admin/priced-products/products')
          .then(products => this.products = products)
          .catch(error => error);
      },
      addProducts() {
        this.adding = true;
        this.$axios.$post('admin/priced-products/add', this.selected).then(_ => {
          this.$notification.success('Products added successfully');
          this.selected = [];
          this.$router.push({ name: 'admin-priced-products' })
        })
      }
    }
  }
</script>

<style scoped>

</style>
