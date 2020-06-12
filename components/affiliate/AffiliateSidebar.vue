<template>
  <div class="sidebar">
    <ul class="navigation-menu">
      <li class="nav-category-divider">MAIN</li>
      <li>
        <nuxt-link :to="{ name: 'affiliate-dashboard' }">
          <span class="link-title">Overview</span>
          <i class="mdi mdi-gauge link-icon"></i>
        </nuxt-link>
      </li>
<!--      <li>-->
<!--        <nuxt-link :to="{ name: 'affiliate-dashboard' }">-->
<!--          <span class="link-title">Settings</span>-->
<!--          <i class="mdi mdi-settings link-icon"></i>-->
<!--        </nuxt-link>-->
<!--      </li>-->
    </ul>
    <div class="sidebar_footer">
      <div class="user-account">

        <a class="user-profile-item" href="#"><i class="mdi mdi-account"></i> Profile</a> <a
        class="user-profile-item" href="#"><i class="mdi mdi-settings"></i> Account Settings</a> <a
        class="btn btn-primary btn-logout" href="#">Logout</a></div>
      <div class="btn-group admin-access-level" v-if="affiliate">
        <div class="user-type-wrapper"><p class="user_name text-capitalize">{{ affiliate.name }}</p>
          <div class="d-flex align-items-center">
            <div class="status-indicator small rounded-indicator bg-success"></div>
            <small class="user_access_level">Affiliate</small></div>
        </div>
        <i class="arrow mdi mdi-chevron-right"></i></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AffiliateSidebar',
    props: ['affiliate'],
  }
</script>

<style scoped>

</style>
