<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Pryo</li>
          </ol>
        </nav>
      </div>
      <div class="content-viewport">
        <div class="row">
          <div class="col-md-12 equel-grid">
            <div class="grid">
              <div class="grid-body py-3 flex items-center justify-between">
                <p class="card-title ml-n1">This Months Pryo Product</p>
                <nuxt-link :to="{ name: 'admin-pryo-add-product' }" class="btn btn-sm btn-primary">New Product</nuxt-link>
              </div>
              <div class="table-responsive">
                <table class="table table-hover table-sm">
                  <thead>
                  <tr class="solid-header">
                    <th colspan="2" class="pl-4">Product</th>
                    <th>status</th>
                    <th>Actions</th>

                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in pryos">
                    <td class="pr-2 pl-4">
                      <img class="profile-img img-sm" :src="item.product.images[0].url" alt="profile image">
                    </td>
                    <td class="">
                      <small class="text-black font-weight-medium d-block">{{ item.product.name }}</small>
                    </td>
                    <td>
                      <small :class="item.status ? 'text-green-500' : 'text-yellow-500'">{{ item.status ? 'Won' : 'Pending'}}</small>
                    </td>
                    <td>
                      <a href="#" class="text-red-800 hover:text-red-500">delete</a>
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
    name: 'PryoIndex',
    middleware: 'admin',
    layout: 'admin',
    data() {
      return {
        pryos: []
      }
    },

    mounted() {
      this.getPryoDetails()
    },

    methods: {
      getPryoDetails() {
        this.$axios.$get('admin/pryo/details')
          .then(response => this.pryos = response)
      }
    }
  }
</script>

<style scoped>

</style>
