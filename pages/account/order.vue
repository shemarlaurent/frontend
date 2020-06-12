<template>
  <div class="my-12 block font-sans">
    <div>
      <user-order-listing :orders="orders"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'likes',
    middleware: 'user',
    head() {
      return {
        title: 'Helyos | My orders',
      }
    },
    data() {
      return {
        orders: [],
        user: this.$cookies.get('helyos_user')
      }
    },


    mounted() {
      this.getOrders();
    },

    methods: {
      getOrders() {
        return this.$axios.$get('account/orders', {
          headers: {
            'Authorization': 'Bearer ' + this.user.token
          }
        })
          .then(orders => this.orders = orders)
          .catch(error => error);
      }
    }
  }
</script>

<style>
</style>
