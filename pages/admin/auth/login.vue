<template>
  <div class="authentication-theme auth-style_2">
      <div class="row inner-wrapper">
        <div class="col-md-7 banner-section">
          <div class="auth_footer">
            <p class="text-muted text-center">© Helyos 2019</p>
          </div>
        </div>
        <div class="col-md-5 form-section">
          <div class="logo-section">
              <nuxt-link to="/" class="logo hover:text-helyos">
                <!-- <img src="/assets/images/logo.svg" alt="logo"> -->
                <b class="text-xl text-helyos-dark">Helyos Admin</b>
              </nuxt-link>
            </div>

          <login-form></login-form>
        </div>
      </div>
    </div>
</template>

<script>
  import LoginForm from '../../../components/forms/auth/LoginForm'
export default {
    middleware: 'admin-guest',
  layout: 'backend',
  head: {
      title: 'Admin Login | Helyos',
  },
    components: {
      LoginForm,

    },
  mounted() {
      this.$on('login-successful', function() {
        this.$router.push('/admin/dashboard');
      })
  }
}
</script>

<style>

</style>
