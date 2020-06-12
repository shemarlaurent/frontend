<template>

  <form class="block w-full" @submit.prevent="register">
    <div class="lg:w-2/5 md:w-3/6 mx-auto border border-transparent py-12">
      <keep-alive>
        <transition name="fade" :css="true">
          <div>
            <div class="block text-center">
              <div class="headline font-bold">
                Welcome, Create your account, and start earning more with less.
              </div>
            </div>
            <div class="m-12 block border border-transparent">
              <div class="form-control-group">
                <label for="signup-seller-name">Name</label>
                <input type="text" name="" id="signup-seller-name" class="form-control" placeholder="Name" v-model="seller.name">
              </div>
              <div class="form-control-group">
                <label for="signup-seller-email">Email</label>
                <input type="email" name="" id="signup-seller-email" class="form-control" placeholder="Email" v-model="seller.email">
              </div>
              <div class="form-control-group">
                <label for="signup-seller-password">Password</label>
                <input type="password" name="" id="signup-seller-password" class="form-control"
                       placeholder="Password" v-model="seller.password"/>
              </div>
              <div class="form-control-group">
                <label for="signup-seller-store">Store Name</label>
                <input type="text" name="" id="signup-seller-store" class="form-control" placeholder="Store Name" v-model="seller.store"/>
              </div>
              <div class="form-control-group flex justify-end mt-6">
                <div @click.stop="register" class="btn btn-blue px-8 py-4">Create Account</div>
              </div>
            </div>
          </div>
        </transition>
      </keep-alive>
    </div>
  </form>
</template>

<script>
  export default {

    data() {
      return {
        loading: false,
        seller: {
          token: this.$route.query.token
        },
      }
    },

    mounted() {

    },

    methods: {
      register() {
        this.$store.dispatch('auth/REGISTER', {
          type: 'seller',
          request: this.seller
        }).then(result => {
          this.$parent.$emit('seller-created', result)
        })
      }
    }
  }
</script>

<style scoped>

</style>
