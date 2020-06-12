<template>
  <div class="authentication-theme auth-style_1">
    <div class="row">
      <div class="col-12 logo-section">
        <nuxt-link to="/" class="d-flex justify-content-center text-xl text-helyos-dark hover:text-helyos">
          <!-- <img src="/assets/images/logo.svg" alt="logo"> -->
          <b>Helyos Store</b>
        </nuxt-link>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-5 col-md-7 col-sm-9 col-11 mx-auto">
        <div class="grid">
          <div class="grid-body">
            <div class="row">
              <div class="col-lg-7 col-md-8 col-sm-9 col-12 mx-auto form-wrapper">
                <login-form/>
                <div class="signup-link">
                  <p>Don't have an account yet?</p>
                  <nuxt-link to="/seller/auth/register">Sign Up</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="auth_footer"><p class="text-muted text-center">© Helyos 2019</p></div>
  </div>
</template>

<script>
  import LoginForm from '../../../components/forms/seller/LoginForm'

  export default {
    // middleware: 'seller-guest',
    head: {
      title: 'Seller Login | Helyos',
    },
    layout: 'backend',
    components: {
      LoginForm,

    },
    mounted() {
      this.$on('login-successful', function() {
        this.$router.push('/seller/dashboard');
      })
    }
  }
</script>
