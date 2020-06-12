<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Sellers</li>
          </ol>
        </nav>
      </div>
      <div class="content-viewport">
        <div class="row">
          <div class="col-md-12 equel-grid">
            <div class="grid">
              <div class="grid-body py-3"><p class="card-title ml-n1">Helyos Sellers</p></div>
              <div class="table-responsive">
                <table class="table table-hover table-sm">
                  <thead>
                  <tr class="solid-header">
                    <th>Seller Name</th>
                    <th>Email</th>
                    <th>Products</th>
                    <th>Earning</th>
                    <th>Date Joined</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="seller in sellers">
                    <td>
                      <small class="text-black font-weight-medium d-block">{{ seller.name }}</small>
                    </td>
                    <td>
                      <small>{{ seller.email }}</small>
                    </td>
                    <td>0</td>
                    <td>{{ format(0) }}</td>
                    <td>{{ formatDate(seller.created_at) }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <nuxt-link :to="{ name: 'admin-orders' }" class="border-top px-3 py-2 d-block text-gray">
                <small class="font-weight-medium">
                  <i class="mdi mdi-chevron-down mr-2"></i>
                  View All Order History
                </small>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sellers',
    layout: 'admin',
    middleware: 'admin',
    data() {
      return {
        sellers: []
      }
    },

    mounted() {
      this.getSellers();
    },

    methods: {
      getSellers() {
        this.$axios.$get('admin/sellers')
          .then(response => this.sellers = response)
          .catch(error => error);
      }
    }
  }
</script>

<style scoped>

</style>
