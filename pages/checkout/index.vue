<template>
  <checkout-wizard :items="items" :nebula="false" />
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Checkout',
    middleware: 'user',
    computed: mapGetters({
      items: 'cart/ITEMS'
    }),


  }
</script>

<style scoped>

</style>
