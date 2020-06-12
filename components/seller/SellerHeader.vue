<template>
  <nav class="t-header">
    <div class="t-header-brand-wrapper">
      <nuxt-link to="/">

        <logo/>
        <b class="logo-mini text-capitalize">
          <img class="logo-mini" src="icon.png" alt="">
        </b>
      </nuxt-link>
      <button class="t-header-toggler t-header-desk-toggler d-none d-lg-block">
        <svg class="logo" viewBox="0 0 200 200">
          <path class="top" d="
                M 40, 80
                C 40, 80 120, 80 140, 80
                C180, 80 180, 20  90, 80
                C 60,100  30,120  30,120
              "></path>
          <path class="middle" d="
                M 40,100
                L140,100
              "></path>
          <path class="bottom" d="
                M 40,120
                C 40,120 120,120 140,120
                C180,120 180,180  90,120
                C 60,100  30, 80  30, 80
              "></path>
        </svg>
      </button>
    </div>
    <div class="t-header-content-wrapper">
      <div class="t-header-content">
        <button class="t-header-toggler t-header-mobile-toggler d-block d-lg-none"><i class="mdi mdi-menu"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        store: this.$cookies.get('helyos_seller').store || this.$store.state.auth.seller.store
      }
    }
  }
</script>

<style scoped>

</style>
