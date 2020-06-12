<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Affiliates</li>
          </ol>
        </nav>
      </div>
      <div class="content-viewport">
        <div class="row">
          <div class="col-md-12 equel-grid">
          <div class="grid">
            <div class="grid-body py-3"><p class="card-title ml-n1">Helyos affiliates</p></div>
            <div class="table-responsive">
              <table class="table table-hover table-sm">
                <thead>
                <tr class="solid-header">
                  <th>Affiliate Name</th>
                  <th>Email</th>
                  <th>Total referrals</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="affiliate in affiliates">
                  <td>
                    <small class="text-black font-weight-medium d-block">{{ affiliate.name }}</small>

                  </td>
                  <td>
                    <small>{{ affiliate.email }}</small>
                  </td>
                  <td>{{ affiliate.referrals }}</td>
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
    name: 'affiliates',
    layout: 'admin',
    middleware: 'admin',

    data() {
      return {
        affiliates: []
      }
    },

    mounted() {
      this.getAffiliates();
    },

    methods: {
      getAffiliates() {
        this.$axios.$get('admin/affiliates')
          .then(response => this.affiliates = response)
          .catch(error => error);
      }
    }
  }
</script>

<style scoped>

</style>
