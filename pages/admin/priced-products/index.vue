<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Priced Products</li>
          </ol>
        </nav>
      </div>
      <div class="content-viewport">
        <div class="row">
          <div class="col-md-12 order-md-0">
            <div class="row">
              <div class="col-3 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-primary no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-carry-on-bag-check mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">{{ pricedProducts.total }}</span></h2>
                    <small class="text-gray d-block mt-3">Total Products</small>

                  </div>
                </div>
              </div>
              <div class="col-3 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-danger no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-salesforce mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">{{ pricedProducts.total }}</span></h2>
                    <small class="text-gray d-block mt-3">Units Sold</small>
                  </div>
                </div>
              </div>
              <div class="col-3 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-warning no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-human mdi-2x"></i>
                    </div>
                    <h2 class="font-weight-medium animated-count">{{ pricedProducts.totalUsers }}</h2>
                    <small
                      class="text-gray d-block mt-3">Total Users</small>
                  </div>
                </div>
              </div>
              <div class="col-3 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-success no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-cash mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">{{ percentageSold }}</span>%</h2>
                    <small class="text-gray d-block mt-3">Total Sales</small> <small
                    class="font-weight-medium text-success"><span
                    class="animated-count">{{ format(pricedProducts.totalSales) }}</span></small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 equel-grid">
            <div class="grid">
              <div class="grid-body py-3 flex items-center justify-between">
                <p class="card-title ml-n1">This Weeks PYP Sales</p>
              </div>
              <div class="table-responsive">
                <table class="table table-hover table-sm">
                  <thead>
                  <tr class="solid-header">
                    <th colspan="2" class="pl-4">Product</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Amount Paid</th>

                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in pricedProducts.currentWeek">
                    <td class="pr-2 pl-4">
                      <img class="profile-img img-sm" :src="item.product.images[0].url" alt="profile image">
                    </td>
                    <td class="">
                      <small class="text-black font-weight-medium d-block">{{ item.product.name }}</small>
                    </td>
                    <td class="">
                      <small class="text-black font-weight-medium d-block">{{ item.user.name }}</small>
                    </td>
                    <td class="">
                      <small class="text-black font-weight-medium d-block">i{{ item.user.email }}</small>
                    </td>
                    <td>
                      <small class="text-green-500">{{ format(item.amount) }}</small>
                    </td>

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
    name: 'PricedProducts',
    middleware: 'admin',
    layout: 'admin',

    data() {
      return {
        pricedProducts: {
          total: 0,
          currentWeek: [],
          unitsSold: 0,
          totalUsers: 0,
          totalSales: 0
        }
      }
    },

    mounted() {
      this.getDetails()
    },

    computed: {
      percentageSold() {
        if (this.pricedProducts .total > 0 && this.pricedProducts.unitsSold > 0) return (((this.pricedProducts.unitsSold / this.pricedProducts.total) * 100)).toFixed(1)
        return 0;
      }
    },

    methods: {
      getDetails() {
        this.$axios.$get('admin/priced-products/details').then(response => {
          this.pricedProducts.total = response.total;
          this.pricedProducts.currentWeek = response.currentWeek;
          this.pricedProducts.unitsSold = response.unitsSold;
          this.pricedProducts.totalUsers = response.totalUsers;
          this.pricedProducts.totalSales = response.totalSales;
        })
          .catch(error => error);
      }
    }
  }
</script>

<style scoped>

</style>
