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
          <div class="col-md-7 equel-grid order-md-2">
            <div class="grid d-flex flex-column justify-content-between overflow-hidden">
              <div class="grid-body">
                <div class="d-flex justify-content-between"><p class="card-title">Sales Revenue</p>
                  <div class="chartjs-legend" id="sales-revenue-chart-legend"></div>
                </div>
                <div class="d-flex"><p class="d-none d-xl-block">12.5% Growth compared to the last
                  week</p>
                  <div class="ml-auto"><h2 class="font-weight-medium text-gray"><i
                    class="mdi mdi-menu-up text-success"></i><span
                    class="animated-count">25.04</span>%</h2></div>
                </div>
              </div>
              <canvas class="mt-4" ref="canvas" id="sales-revenue-chart" height="245"></canvas>
<!--              <div style="height: 245px;">-->
<!--                <sales-chart :data="chart"/>-->
<!--              </div>-->
            </div>
          </div>
          <div class="col-md-5 order-md-0">
            <div class="row">
              <div class="col-6 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-primary no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-account-group mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">{{ data.users }}</span></h2>
                    <small class="text-gray d-block mt-3">Total Users</small>
                  </div>
                </div>
              </div>
              <div class="col-6 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-danger no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-airballoon mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">{{ data.sellers }}</span></h2>
                    <small class="text-gray d-block mt-3">Sellers</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-warning no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-fire mdi-2x"></i>
                    </div>
                    <h2 class="font-weight-medium animated-count">{{ data.affiliates }}</h2>
                    <small
                      class="text-gray d-block mt-3">Affiliates</small>
                  </div>
                </div>
              </div>
              <div class="col-6 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-success no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-charity mdi-2x"></i></div>
                    <h2 class="font-weight-normal"><span class="animated-count">{{ format(data.revenue) }}</span></h2>
                    <small class="text-gray d-block mt-3">Revenue</small>
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
                    <th>Order No</th>
                    <th>Purchased On</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="order in data.orders">
                    <td class="pr-0 pl-4">
                      <img class="profile-img img-sm" :src="order.product_variation.product.images[0].url" alt="Product image">
                    </td>
                    <td class="pl-md-0">
                      <small class="text-black font-weight-medium d-block">{{ order.orderable.name }}</small>
<!--                      <span>-->
<!--                            <span class="status-indicator rounded-indicator small bg-primary"></span>-->
<!--                            paid-->
<!--                          </span>-->
                    </td>
                    <td>
                      <small>{{ order.code }}</small>
                    </td>
                    <td>{{ formatDate(order.created_at) }}</td>
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

  import $ from 'jquery';
  import Chart from 'chart.js';
  import SalesChart from '../../components/charts/SalesChart'
  export default {
    middleware: 'admin',
    layout: 'admin',
    components: {
      SalesChart
    },
    data() {
      return {
        admin: this.$cookies.get('helyos_admin'),
        loading: false,
        data: {
          users: 0,
          sellers: 0,
          affiliates: 0,
          abyssUsers: 0,
          weeklyRevenue: 0,
          revenue: 0,
          orders: []
        },
        chart: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
            data: [100, 125, 135, 255, 190, 365, 285],
            backgroundColor: ['#1A76CA'],
            borderColor: ['#1A76CA'],
            borderWidth: 1,
            fill: 'origin',
            label: 'Previous Week'
          }, {
            data: [100, 195, 195, 355, 290, 465, 385],
            backgroundColor: ['#2d92fe'],
            borderColor: ['#2d92fe'],
            borderWidth: 1,
            fill: 'origin',
            label: 'Current Week'
          }]
        }
      }
    },

    mounted() {
      this.getDetails();

      this.generateChart();
      // let self = this;
      // setTimeout(function() {
      //   self.getgenerateChart()
      // }, 3000)
    },

    methods: {
      getDetails() {
        this.loading = true;
        this.$axios.$get('admin/details', {
          headers: {
            'Authorization': 'Bearer ' + this.admin.token
          }
        })
          .then(result => {
            this.loading = false;
            this.data.users = result.users;
            this.data.sellers = result.sellers;
            this.data.affiliates = result.affiliates;
            this.data.abyssUsers = result.abyssUsers;
            this.data.orders = result.orders;
            this.data.weeklyRevenue = result.weeklyRevenue
            this.data.revenue = result.revenue
          })
          .catch(error => {
            console.log(error.statusCode);
            this.$notification.error('Network error, try again');
          })
      },

      generateChart() {
        let t = document.getElementById('sales-revenue-chart').getContext('2d');
       let chart =  new Chart(t, {
          type: 'line',
          data: this.chart,
          options: {
            responsive: !0,
            maintainAspectRatio: !0,
            scales: {
              xAxes: [{ display: !1 }],
              yAxes: [{
                display: !0,
                ticks: {
                  display: !1,
                  stepSize: 100,
                  min: 100,
                  max: 700,
                  padding: 0,
                  beginAtZero: !0,
                  fontSize: 12,
                  fontFamily: '\'Roboto\', sans-serif',
                  fontColor: '#929292',
                  fontStyle: '500'
                },
                gridLines: { drawBorder: !1, color: 'rgb(93,93,93,0.2)' }
              }]
            },
            legend: {
              display: !1, legendCallback: function(e) {
                var t = []
                t.push('<ul class="legend-list">')
                for (var a = 0; a < e.data.datasets.length; a++) t.push('<li><span class="legend-dots" style="background:' + e.data.datasets[a].legendColor + '"></span>'), e.data.datasets[a].label && t.push(e.data.datasets[a].label), t.push('</li>')
                return t.push('</ul>'), t.join('')
              }
            },
            layout: { padding: { right: 0, top: 0, bottom: 0 } },
            elements: { point: { radius: 0 }, line: { tension: 0 } }
          }
        })
        $('#sales-revenue-chart-legend').html(chart.generateLegend())
      }
    }
  }
</script>

<style scoped>

</style>
