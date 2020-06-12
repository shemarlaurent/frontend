<template>
  <div class="container my-8 border border-transparent">
    <div class="flex justify-between">
      <nuxt-link :to="{name:'index'}"><logo/></nuxt-link>
      <div class="flex justify-end p-4 cursor-pointer" @click.stop="goBack">Back</div>
    </div>
    <form class="block w-full">
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
                  <label for="token">Invitation Token</label>
                  <input type="text" name="" id="token" class="form-control"
                         placeholder="Invitation Token" v-model="form.token">
                </div>
                <div class="form-control-group">
                  <label for="signup-affiliate-first-name">First Name</label>
                  <input type="text" name="" id="signup-affiliate-first-name" class="form-control"
                         placeholder="First name" v-model="form.first_name">
                </div>
                <div class="form-control-group">
                  <label for="signup-affiliate-last-name">Last Name</label>
                  <input type="text" name="" id="signup-affiliate-last-name" class="form-control"
                         placeholder="Last name"  v-model="form.last_name">
                </div>
                <div class="form-control-group">
                  <label for="signup-affiliate-email">Email</label>
                  <input type="email" name="" id="signup-affiliate-email" class="form-control" placeholder="Email" v-model="form.email">
                </div>
                <div class="form-control-group">
                  <label for="signup-affiliate-password">Password</label>
                  <input type="password" name="" id="signup-affiliate-password" class="form-control"
                         placeholder="Password" v-model="form.password"/>
                </div>
                <div class="form-control-group flex justify-end mt-6">
                  <div @click.stop="createAccount" class="btn btn-blue px-8 py-4">Create Account</div>
                </div>
              </div>
            </div>
          </transition>
        </keep-alive>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AffiliateRegistration',
    middleware: 'affiliate-guest',
    layout: 'auth',

    data() {
      return {
        form: {
          token: this.$route.query.token || ''
        },
        loading: false
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      createAccount() {
        this.loading = true;
        this.$store.dispatch('auth/REGISTER', { type: 'affiliate', request: this.form })
          .then(result => {
            this.$store.commit('auth/SAVE_AUTH_AFFILIATE', result);

            this.$notification.success('Account created successfully');

            this.loading = false;

            this.$router.push({ name: 'affiliate-dashboard' });

          })
          .catch(error => {
            this.loading = false;

            this.$notification.error('An error has occurred');

          })
      }
    }
  }
</script>

<style scoped>

</style>
