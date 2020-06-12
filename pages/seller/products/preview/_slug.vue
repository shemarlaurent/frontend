<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Product</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Preview</li>
          </ol>
        </nav>
      </div>
      <div class="content-viewport">
        <div class="row">
          <div class="col-md-12 equel-grid" ref="productContainer">
            <div class="grid" v-if="product !== null">
              <div class="grid-body py-3">
                <p class="card-title ml-n1">{{ product.name }}</p>
              </div>
              <div class="table-responsive">
                <table class="table table-hover table-sm">
                  <thead>
                  <tr class="solid-header">
                    <th colspan="2" class="pl-4">Name</th>
                    <th class="text-center">Size</th>
                    <th class="text-center">quantity</th>
                    <th class="text-center">Stock</th>
                    <th class="text-center">Price</th>
                    <th class="text-center">Sold</th>
                  </tr>
                  </thead>
                  <tbody v-if="product">
                  <tr v-for="variation in product.variations">
                    <td class="pr-0 pl-4">
                      <img class="profile-img img-sm" :src="product.images[0].url" alt="profile image">
                    </td>
                    <td>{{ product.name }}</td>
                    <td class="text-center">{{ variation.name.toUpperCase() }}</td>
                    <td class="text-center">{{ variation.quantity }}</td>
                    <td class="text-center">{{ variation.quantity }}</td>
                    <td class="text-center">{{ format(variation.price) }}</td>
                    <td class="text-center">0</td>
                  </tr>
                  </tbody>
                </table>
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
  layout: 'seller',
  middleware: 'seller',
  data() {
    return {
      seller: this.$cookies.get('helyos_seller'),
      product: null,
    }
  },
  head() {
    return {
      title: this.product ? `${this.seller.store.name} | Products | ${this.product.name}` : `${this.seller.store.name} | Product`
    }
  },

  mounted() {
      this.getProduct();
  },

  methods: {
      getProduct() {
          let loader = this.$loading.show({
             // Optional parameters
             container: this.$refs.productContainer,
            });
          this.$axios.$get('seller/store/products/' + this.$route.params.slug, {
            headers: {
              'Authorization': 'Bearer ' + this.seller.token
            }
          })
          .then(response => {
              loader.hide();
              this.product = response;
          })
          .catch(error => {
              loader.hide();
              console.log(error);
          })
      },

  }
}
</script>

<style scoped>
</style>
