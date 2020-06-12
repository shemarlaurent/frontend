<template>
  <div class="container my-8 border border-transparent">
    <div class="flex justify-between">
      <nuxt-link :to="{name:'index'}"><logo/></nuxt-link>
      <div class="flex justify-end p-4 cursor-pointer" @click.stop="goBack">Back</div>
    </div>
    <registration-form/>
  </div>

</template>

<script>
  import RegistrationForm from '../../../components/forms/seller/RegistrationForm'
  export default {
    name: 'SellerRegistration',
    middleware: 'seller-guest',
    head: {
      title: 'Seller Registration | Helyos',

    },
    layout: 'auth',
    data() {
      return {

      }
    },
    components: {
      RegistrationForm,
    },
    mounted() {
        this.$on('seller-created', function(result) {
          this.$notification.success('Account created successfully', { timer: 5 });
          this.$store.commit('auth/SAVE_AUTH_SELLER', result);
          this.$router.push({ name: 'seller-dashboard' });
        })

    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>
