<template>
  <checkout-wizard :item="item(itemId)" :nebula="true"/>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    layout: 'clear',
    name: 'Nebula-Checkout',
    middleware: 'user',
    computed: mapGetters({
      item: 'cart/ITEM'
    }),
    data() {
      return {
        itemId: this.$route.params.id,
      }
    }
  }
</script>

