<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Overview</li>
          </ol>
        </nav>
      </div>
      <div class="content-viewport">
        <div class="row">
          <div class="col-md-12 order-md-0">
            <div class="row">
              <div class="col-md-3 col-sm-12 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-primary no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-account-group mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">{{ details.customers }}</span></h2>
                    <small class="text-gray d-block mt-3">Total Customers</small>

                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-danger no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-airballoon mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">{{ details.products }}</span></h2>
                    <small class="text-gray d-block mt-3">Products</small>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-warning no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-fire mdi-2x"></i>
                    </div>
                    <h2 class="font-weight-medium animated-count">{{ details.ordersCount }}</h2>
                    <small
                      class="text-gray d-block mt-3">Orders</small>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-success no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-charity mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">23.6</span>%</h2>
                    <small class="text-gray d-block mt-3">Engagement Rate</small> <small
                    class="font-weight-medium text-success"><i class="mdi mdi-menu-up"></i><span
                    class="animated-count">51.03</span>%</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 equel-grid">
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
                  <tr v-for="order in details.orders">
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
              <nuxt-link :to="{ name: 'seller-orders' }" class="border-top px-3 py-2 d-block text-gray">
                <small class="font-weight-medium">
                  <i class="mdi mdi-chevron-down mr-2"></i>
                  View All Order History
                </small>
              </nuxt-link>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 equel-grid">
            <div class="grid deposit-balance-card">
              <div class="grid-body"><p class="card-title">Earning</p>
                <div class="row">
                  <div class="col-md-12 mt-4">
                    <div id="current-circle">
                      <span class="circle-progress-value font-weight-medium text-primary h4"></span>
                    </div>
                  </div>
                  <div class="col-md-12 text-center mt-4"><h4 class="font-weight-medium">{{ format(details.earning) }}</h4>
                  </div>
                  <div class="col-12">
                    <button  type="button" class="btn btn-sm btn-block mt-4 btn-primary">View
                      Transactions
                    </button>
                  </div>

                    <div class="footer-col col">
                      <small>Target: 10k</small>
                      <div class="progress progress-slim mt-2">
                        <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                             role="progressbar" style="width: 76%" aria-valuenow="76"
                             aria-valuemin="0" aria-valuemax="100">

                        </div>
                      </div>
                    </div>
                    <div class="footer-col col">
                      <small>Target: 30 Days</small>
                      <div class="progress progress-slim mt-2">
                        <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                             role="progressbar" style="width: 76%" aria-valuenow="76"
                             aria-valuemin="0" aria-valuemax="100">

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
    </div>
</template>

<script>
  import $ from 'jquery';
  import circleProgress from 'jquery-circle-progress'
  export default {
    layout: 'seller',
    middleware: 'seller',
    data() {
      return {
        seller: this.$cookies.get('helyos_seller'),
        details: {
          customers: 0,
          products: 0,
          ordersCount: 0,
          orders: [],
          earning: 0
        }
      }
    },
    head() {
      return {
        title: this.seller.store.name + ' | Dashboard'
      }
    },
    mounted() {
      this.getDetails();

      let vm = this;
      setTimeout(function() {
        console.log('done');
        $('#current-circle').circleProgress({
          value: vm.percentageToTarget,
          size: 120,
          startAngle: -1.55,
          fill: {
            gradient: ['#4d8af0', '#2d92fe']
          }
        }).on('circle-animation-progress', function(e, t, a) {
          $(this).find('.circle-progress-value').text(a.toFixed(2).substr(2) + '%')
        });
      }, 2000)
    },


    computed: {
      percentageToTarget() {
        return parseFloat((this.details.earning / 10000).toFixed(2));
      }
    },

    methods: {
      getDetails() {
        this.$axios.$get('seller/store/details', {
          headers: {
            'Authorization': 'Bearer ' + this.seller.token,
          }
        })
          .then(response => {
            this.details.customers = response.customers;
            this.details.orders = response.orders;
            this.details.products = response.products;
            this.details.ordersCount = response.ordersCount;
            this.details.earning = response.earning;

          })
          .catch(error => console.log(error))
      },
      product(order) {
        order = JSON.parse(order.order)
        return order.product;
      },

      size(order) {
        order = JSON.parse(order.order)
        return order.size;
      },
    }
  }
</script>

<style scoped>

</style>
