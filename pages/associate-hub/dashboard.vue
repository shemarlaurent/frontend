<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <!--            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>-->
            <li v-if="user" class="breadcrumb-item active" aria-current="page">Referral token: {{ user.code }}</li>
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
                    <h2 class="font-weight-medium"><span class="animated-count">{{ referrals.length }}</span></h2>
                    <small class="text-gray d-block mt-3">Referred Users</small>

                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-danger no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-airballoon mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">{{ activeSubscribers }}</span></h2>
                    <small class="text-gray d-block mt-3">Active Subscribers</small>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-warning no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-cash-usd mdi-2x"></i>
                    </div>
                    <h2 class="font-weight-medium animated-count">{{ getBalance }}</h2>
                    <small
                      class="text-gray d-block mt-3">Balance</small>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-success no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-charity mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">{{ getTotal }}</span></h2>
                    <small class="text-gray d-block mt-3">Total Earned</small>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 equel-grid">
            <div class="grid">
              <div class="grid-body py-3"><p class="card-title ml-n1">Referred Users</p></div>
              <div class="table-responsive">
                <table class="table table-hover table-sm">
                  <thead>
                  <tr class="solid-header">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Last Subscribed</th>
                    <th>Registered On</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="referral in referrals" :key="referral.id">
                    <td>{{ referral.user.name }}</td>
                    <td>{{ referral.user.email }}</td>
                    <td>{{ formatDate(referral.user.subscription.starts_at) }}</td>
                    <td>{{ formatDate(referral.user.created_at) }}</td>
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
    name: 'dashboard',
    layout: 'associate',
    middleware: 'user',
    data() {
      return {
        referrals: [],
        user: this.$cookies.get('helyos_user'),
        earning: {
          balance: 0,
          total: 0
        }
      }
    },

    mounted() {
      this.getReferrals()
    },

    computed: {
      activeSubscribers() {
        return this.referrals.filter(item => item.user.subscription != null).length
      },
      getBalance() {
        if (this.earning) return this.earning.balance;
        return 0;
      },

      getTotal() {
        if (this.earning) return this.earning.total;
        return 0;
      }
    },

    methods: {
      getReferrals() {
        this.$axios.$get('associates/details', {
          headers: {
            'Authorization': 'Bearer ' + this.user.token,
          }
        }).then(response => {
          this.referrals = response.referrals;
          this.earning = response.earning
        })
          .catch(error => this.$notification.error('Network error while loading resources'))
      }
    }
  }
</script>

<style scoped>

</style>
