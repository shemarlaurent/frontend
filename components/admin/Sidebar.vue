<template>
  <div class="sidebar">
    <ul class="navigation-menu">
      <li class="nav-category-divider">MAIN</li>
      <li>
        <nuxt-link to="/admin/dashboard">
          <span class="link-title">Overview</span>
          <i class="mdi mdi-gauge link-icon"></i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/sellers">
          <span class="link-title">Sellers</span>
          <i class="mdi mdi-human-handsup link-icon"></i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/affiliates">
          <span class="link-title">Affiliates</span>
          <i class="mdi mdi-link-box link-icon"></i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'admin-priced-products' }">
          <span class="link-title">Priced Products</span>
          <i class="mdi mdi-sale link-icon"></i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'admin-abyss' }">
          <span class="link-title">Abyss</span>
          <i class="mdi mdi-forum link-icon"></i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'admin-pryo' }">
          <span class="link-title">Pryo</span>
          <i class="mdi mdi-group link-icon"></i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'admin-settings' }">
          <span class="link-title">Settings</span>
          <i class="mdi mdi-settings link-icon"></i>
        </nuxt-link>
      </li>

      <li class="nav-category-divider">TRADES</li>
      <li>
        <nuxt-link to="/admin/orders">
          <span class="link-title">Orders</span>
          <i class="mdi mdi-ornament link-icon"></i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/invitations">
          <span class="link-title">Invitations</span>
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
        <div class="user-type-wrapper"><p class="user_name" v-if="admin">{{ admin.name }}</p>
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
        admin: this.$cookies.get('helyos_admin')
      }
    }
  }
</script>

<style scoped>

</style>
