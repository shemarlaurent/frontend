<template>
  <div class="bg-white flex justify-center m-auto items-center">

    <div class="auth-card">
      <div class="headline">Sign In</div>
      <form @submit.prevent="authenticate" class="h-auth-form">
        <div class="mb-6">

          <p class="font-bold text-lg text-center ">
            Welcome Back to Paradise
          </p>
        </div>
        <!--Form inputs-->
        <div class="form-control-group">
          <label for="auth-email" class="text-xs text-gray-700 ">Email</label>
          <input type="email" required name="auth-email" class="form-control" :class="error ? 'border-red' : ''" id="auth-email" placeholder="Email address" v-model="form.email"/>
          <span v-if="error" class="text-sm text-red-600 font-sans">invalid email address or password</span>
        </div>
        <div class="form-control-group">
          <label for="auth-password" class="text-xs text-gray-700 ">Password</label>
          <input type="password" required name="auth-password" class="form-control" id="auth-password"
                 placeholder="Password" v-model="form.password"/>
        </div>

        <div class="mb-2"><a href="" class="text-xs text-blue-500">Forgot Password</a></div>
        <div>
          <button :disabled="loading" type="submit" class="btn-blue w-full btn btn-lg">{{ loading ? 'Please wait...' : 'Sign in' }}</button>
          <label
                 class="text-xs text-gray-700 flex py-1 items-center w-full text-center self-center my-3">
            <t-checkbox value="accepted"
                        unchecked-value="not_accepted"
                        id="signin-checkbox"
                        name="single-checkbox"
            />
            <span class="ml-3">Keep me signed in until I sign out</span>
          </label>

          <div class="flex justify-center text-xs text-gray-700 mt-2">
            New here?&nbsp;<nuxt-link  :to="{name: 'auth-sign-up' }" class="text-blue-500 cursor-pointer">Sign up</nuxt-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'auth',
    name: 'sign-in',
    middleware: 'user-guest',
    data() {
      return {
        form: {},
        loading: false,
        error: false
      }
    },


    methods: {
      authenticate() {
        this.loading = true;

        this.$axios.$post('auth/login', this.form)
          .then(response => {
            this.loading = false;
            this.$store.commit('auth/SAVE_AUTH_USER', response);
            this.$notification.success('Authentication successful');
            if (!! this.$route.query.redirect) this.$router.push(this.$route.query.redirect);
            else this.$router.push('/');

          })
          .catch(error =>
          {
            if (error.response.status === 401) this.error = true;
            this.form.password = ''
            this.loading = false;
          });
      },

    }
  }
</script>

<style scoped lang="scss">
</style>
