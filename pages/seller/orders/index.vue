<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Orders</li>
          </ol>
        </nav>
      </div>

      <div class="content-viewport">
        <div class="row">
          <div class="col-md-12 order-md-0">
            <div class="row">
              <div class="col-md-3 col-sm-12 equel-grid cursor-pointer" @click="showTotalOrders">
                  <div class="grid d-flex flex-column align-items-center justify-content-center">
                    <div class="grid-body text-center">
                      <div class="profile-img img-rounded bg-inverse-primary no-avatar component-flat mx-auto mb-4">
                        <i class="mdi mdi-carry-on-bag-check mdi-2x"></i></div>
                      <h2 class="font-weight-medium"><span class="animated-count">{{ totalOrders }}</span></h2>
                      <small class="text-gray d-block mt-3">Total Orders</small>

                    </div>
                  </div>
              </div>
              <div class="col-md-3 col-sm-12 equel-grid cursor-pointer" @click="filterCompletedOrders">
                  <div class="grid d-flex flex-column align-items-center justify-content-center">
                    <div class="grid-body text-center">
                      <div class="profile-img img-rounded bg-inverse-danger no-avatar component-flat mx-auto mb-4">
                        <i class="mdi mdi-salesforce mdi-2x"></i></div>
                      <h2 class="font-weight-medium"><span class="animated-count">{{ completedOrders }}</span></h2>
                      <small class="text-gray d-block mt-3">Fulfilled Orders</small>
                    </div>
                  </div>
              </div>
              <div class="col-md-3 col-sm-12 equel-grid cursor-pointer" @click="filterPendingOrders">
                  <div class="grid d-flex flex-column align-items-center justify-content-center">
                    <div class="grid-body text-center">
                      <div class="profile-img img-rounded bg-inverse-warning no-avatar component-flat mx-auto mb-4">
                        <i class="mdi mdi-human mdi-2x"></i>
                      </div>
                      <h2 class="font-weight-medium animated-count">{{ pendingOrders }}</h2>
                      <small
                        class="text-gray d-block mt-3">Pending Orders</small>
                    </div>
                  </div>
              </div>
              <div class="col-md-3 col-sm-12 equel-grid cursor-pointer">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-success no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-cash mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">{{ format(revenue) }}</span></h2>
                    <small class="text-gray d-block mt-3">Total Revenue</small>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 equel-grid">
            <div class="grid">
              <div class="grid-body py-3"><p class="card-title ml-n1">Order History</p></div>
              <div class="table-responsive">
                <table class="table table-hover table-sm">
                  <thead>
                  <tr class="solid-header">
                    <th colspan="2" class="pl-4">Customer</th>
                    <th>Order reference</th>
                    <th>Product</th>
                    <th>Type</th>
                    <th>amount</th>
                    <th>shipping</th>
                    <th>Purchased On</th>
                    <th>status</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="order in displayedOrders">
                    <td class="pr-0 pl-4">
                      <img class="profile-img img-sm" :src="order.product_variation.product.images[0].url" alt="Order image">
                    </td>
                    <td class="pl-md-0">
                      <small class="text-black font-weight-medium d-block">{{ order.orderable.name}}</small>
                      <span v-if="order.status">
                        <span class="status-indicator rounded-indicator small bg-success"></span>
                        paid
                      </span>
                      <span v-else>
                        <span class="status-indicator rounded-indicator small bg-warning"></span>
                        Pending
                      </span>
                    </td>
                    <td>
                      <small>{{ order.code }}</small>
                    </td>
                    <td>
                      <small>{{ order.product_variation.product.name }}</small>
                    </td>
                    <td>
                      <small>{{ order.size }}</small>
                    </td>
                    <td>
                      <small>${{ order.amount }}</small>
                    </td>
                    <td>
                      <small>free</small>
                    </td>
                    <td>Just Now</td>
                    <td>
                      <small :class="order.status === 1 ? 'text-success' : 'text-red-500' ">{{ order.status === 1 ? 'Paid' : 'pending' }}</small>
                    </td>
                    <td>Ship</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <a class="border-top px-3 py-2 d-block text-gray" href="#">
                <small class="font-weight-medium">
                  <i class="mdi mdi-chevron-down mr-2"></i>
                  View All Order History
                </small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    middleware: 'seller',
    layout: 'seller',
    data() {
      return {
        seller: this.$store.state.auth.seller || this.$cookies.get('helyos_seller'),
        orders: [],
        displayedOrders: [],
      }
    },

    mounted() {
      this.getOrders();
    },

    computed: {
      totalOrders() {
        return this.orders.length
      },

      completedOrders() {
        return this.orders.filter(item => item.status === 1).length
      },

      pendingOrders() {
        return this.orders.filter(item => item.status === 0).length
      },

      revenue() {
        if (this.orders.length > 0) return this.orders.map(item => item.amount).reduce((previous, current) => parseInt(previous) + parseInt(current))
      }
    },
    methods: {
      getOrders(page = 0) {
        this.$axios.$get('seller/orders/all', {
          headers: {
            'Authorization': 'Bearer ' + this.seller.token
          }
        }).then(response => {
          this.orders = response;
          this.displayedOrders = response;
        })
      },

      showTotalOrders() {
        this.displayedOrders = this.orders;
      },

      filterCompletedOrders() {

        this.displayedOrders = this.orders.filter(item => item.status === 1);
      },

      filterPendingOrders() {

        this.displayedOrders =  this.orders.filter(item => item.status === 0);
      }

    }
  }
</script>

<style scoped>

</style>
