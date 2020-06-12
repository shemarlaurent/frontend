<template>
  <div class="sidebar">
    <ul class="navigation-menu">
      <li class="nav-category-divider">MAIN</li>
      <li>
        <nuxt-link :to="{ name: 'seller-dashboard' }">
          <span class="link-title">Overview</span>
          <i class="mdi mdi-gauge link-icon"></i>
        </nuxt-link>
      </li>
      <li>
        <a  href="#products" data-toggle="collapse" aria-expanded="false">
          <span class="link-title">Products</span>
          <i class="mdi mdi-carry-on-bag-check link-icon"></i>
        </a>
        <ul id="products" class="collapse navigation-submenu">
          <li>
            <nuxt-link :to="{ name: 'seller-products-all' }">All Products</nuxt-link>
            <nuxt-link :to="{name: 'seller-products-create' }">Add Product</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="nav-category-divider">TRADES</li>
      <li>
        <nuxt-link  :to="{ name: 'seller-orders' }">
        <span class="link-title">Orders</span>
        <i class="mdi mdi-ornament-variant link-icon"></i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/invitations">
          <span class="link-title">Shipments</span>
          <i class="mdi mdi-airplane link-icon"></i>
        </nuxt-link>
      </li>
    </ul>
    <div class="sidebar_footer">
      <div class="user-account">

        <a class="user-profile-item" href="#"><i class="mdi mdi-account"></i> Profile</a> <a
        class="user-profile-item" href="#"><i class="mdi mdi-settings"></i> Account Settings</a> <a
        class="btn btn-primary btn-logout" href="#">Logout</a></div>
      <div class="btn-group admin-access-level">
        <div class="user-type-wrapper"><p class="user_name text-capitalize">{{ seller.name }}</p>
          <div class="d-flex align-items-center">
            <div class="status-indicator small rounded-indicator bg-success"></div>
            <small class="user_access_level">Admin</small></div>
        </div>
        <i class="arrow mdi mdi-chevron-right"></i></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        seller: this.$store.state.auth.seller || this.$cookies.get('helyos_seller')
      }
    }
  }
</script>

<style scoped>

</style>
