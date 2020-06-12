<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Abyss</li>
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
                    <h2 class="font-weight-medium"><span class="animated-count">{{ forums }}</span></h2>
                    <small class="text-gray d-block mt-3">Total Forums</small>

                  </div>
                </div>
              </div>
              <div class="col-3 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-danger no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-salesforce mdi-2x"></i></div>
                    <h2 class="font-weight-medium"><span class="animated-count">{{ totalUsers }}</span></h2>
                    <small class="text-gray d-block mt-3">All Users</small>
                  </div>
                </div>
              </div>
              <div class="col-3 equel-grid">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-warning no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-human mdi-2x"></i>
                    </div>
                    <h2 class="font-weight-medium animated-count">{{ revenue }}</h2>
                    <small
                      class="text-gray d-block mt-3">Total Revenue</small>
                  </div>
                </div>
              </div>
              <div class="col-3 equel-grid cursor-pointer" @click="createForum">
                <div class="grid d-flex flex-column align-items-center justify-content-center">
                  <div class="grid-body text-center">
                    <div class="profile-img img-rounded bg-inverse-success no-avatar component-flat mx-auto mb-4">
                      <i class="mdi mdi-plus mdi-2x"></i>
                    </div>
                    <small class="text-gray d-block mt-3">New Forum</small>
<!--                    <small class="font-weight-medium text-success">-->
<!--                      <span class="animated-count">0</span>-->
<!--                    </small>-->
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 equel-grid">
            <div class="grid">
              <div class="grid-body py-3 flex items-center justify-between">
                <p class="card-title ml-n1">Forums</p>
              </div>
              <div class="table-responsive">
                <table class="table table-hover table-sm">
                  <thead>
                  <tr class="solid-header">
                    <th colspan="2" class="pl-4">Product</th>
                    <th>status</th>
                    <th>Users</th>
                  </tr>
                  </thead>
                  <tbody v-if="details">
                  <tr v-for="item in details">
                    <td class="pr-2 pl-4">
                      <img class="profile-img img-sm" :src="item.image" alt="profile image">
                    </td>
                    <td class="">
                      <small class="text-black font-weight-medium d-block">{{ item.name }}</small>
                    </td>
                    <td>
                    </td>
                    <td>
                      <a href="#" class="text-red-800 hover:text-red-500">{{ item.users ? item.users.length : 0 }}</a>
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
    name: 'index',
    middleware: 'admin',
    layout: 'admin',
    head: {
      title: 'Helyos | Abyss'
    },

    data() {
      return {
        details: null,
        users: null
      }
    },
    computed: {
      forums() {
        if (this.details) {
          return this.details.length;
        }
        return 0;
      },

      totalUsers() {
        if (this.users) {
          return this.users.length;
        }
        return 0;
      },

      revenue() {
        if (this.details) {
          if (this.details.users) return this.details.map(user => user.id).length
        }
        else return 0;
      }
    },

    mounted() {
      this.getDetails();
    },
    methods: {
      createForum() {
        this.$router.push({ name: 'admin-abyss-create-forum'})
      },
      getDetails() {
        this.$axios.$get('abyss/forums/details').then(response => {
    this.details = response.details;
    this.users = response.users;
  });
  }
  }
  }
</script>

<style scoped>

</style>
