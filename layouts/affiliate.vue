<template>
  <section class="header-fixed">
    <affiliate-header :affiliate="affiliate"/>
    <div class="page-body">
      <affiliate-sidebar :affiliate="affiliate"/>

      <Nuxt :affiliate="affiliate"/>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'affiliate',

    head: {
      title: 'Helyos | Affiliate',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '/assets/vendors/iconfonts/mdi/css/materialdesignicons.css' },
        { rel: 'stylesheet', href: '/assets/vendors/css/vendor.addons.css' },
        { rel: 'stylesheet', href: '/assets/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css' },
        { rel: 'stylesheet', href: '/assets/css/shared/style.css' },
        { rel: 'stylesheet', href: '/assets/css/demo_1/style.css' }
      ],
      script: [
        { src: '/assets/vendors/js/core.js', body: true, defer: true },
        { src: '/assets/vendors/js/vendor.addons.js', body: true, defer: true },
        { src: '/assets/vendors/chartjs/Chart.min.js', body: true, defer: true },
        { src: '/assets/js/script.js', body: true, defer: true },
        { src: 'https://widget.cloudinary.com/v2.0/global/all.js' }
      ]
    },
    data() {
      return {
        affiliate: this.$cookies.get('helyos_affiliate'),
      }
    }
  }
</script>

<style scoped>

</style>
