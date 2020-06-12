<template>
  <form action="#">
    <div class="col-md-12 mb-3">
      <label
        for="validationServer03">Email Address</label>
      <ValidationProvider rules="required|email" v-slot="{ errors }">
        <input type="email" id="validationServer03" class="form-control py-3" :class="errors[0] ? ' is-invalid' : ''"
               placeholder="Email address" v-model="admin.email">
        <div class="invalid-feedback">{{ errors[0] }}</div>
      </ValidationProvider>

    </div>
    <div class="col-md-12 mb-3">
      <ValidationProvider rules="required" v-slot="{ errors }">
        <input type="password" class="form-control py-3" :class="errors[0] ? ' is-invalid' : ''" placeholder="Password"
               v-model="admin.password">
        <div class="invalid-feedback">{{ errors[0] }}</div>
      </ValidationProvider>
    </div>
    <div class="form-inline">
      <div class="checkbox">
        <label>
          <input type="checkbox" class="form-check-input">Remember me <i class="input-frame"></i>
        </label>
      </div>
    </div>
    <button @click="authenticate" class="btn btn-primary btn-block" :disabled="loading">Login</button>
  </form>
</template>

<script>
  import { ValidationProvider } from 'vee-validate';

  export default {

    data() {
      return {
        admin: {},
        loading: false
      }
    },

    mounted() {

    },

    components: {
      ValidationProvider
    },

    watch: {},

    methods: {
      authenticate() {
        this.loading = true

        // make the authentication request
        this.$store.dispatch('auth/LOGIN', {
          type: 'admin',
          request: this.admin
        })
          .then(result => {
            this.loading = false;
            this.$notification.success('Authentication successful', {
              timer: 5
            });
            this.$store.commit('auth/SAVE_AUTH_ADMIN', result)
            this.$parent.$emit('login-successful')
        })
          .catch(error => {
            this.loading = false;
            this.$notification.error('Invalid email or password', {
              timer: 5
            });
        });
      }

    }
  }
</script>
