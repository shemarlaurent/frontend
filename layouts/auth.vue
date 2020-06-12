<template>
  <div class="" id="auth-layout">
    <nuxt/>
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout',
    mounted() {
      setTimeout(() => {
        // Extend loader for an additional 5s
        this.$nuxt.$loading.finish()
      }, 5000)
    }
  }
</script>
<style lang="scss">
  #auth-layout {
    @apply flex h-screen bg-white;
  }

  .auth-card {
    box-shadow: 0px 4.09789px 30.7341px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    margin: 0 auto;
    display: block;
    @apply border border-gray-100 w-auto mx-auto py-5 text-center flex-col ;
    @media (min-width: 768px) {
      min-width: 360px;
    }
    .headline {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 17px;
      /* or 62% */
      letter-spacing: -0.144842px;
      color: #000000;
      @apply my-8;
    }

    .social-card {
      width: 100%;
      height: 40px;
      background: #FFFFFF;
      box-shadow: 0px 2.89684px 14.4842px rgba(0, 0, 0, 0.25);
      @apply my-6 mx-auto flex justify-between items-center py-2 px-4 rounded;
      .card-text {
        font-style: normal;
        font-weight: 600;
        font-size: 12.3811px;
        line-height: 17px;
        letter-spacing: -0.144842px;
        color: #9B9A9A;
        @apply text-center flex-1;
      }
    }

    .h-auth-form { 
      display: block;
      padding: 0 15px;
      @apply text-left w-full px-8 my-4;
    }
  }
</style>
