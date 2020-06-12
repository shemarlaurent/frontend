<template>
  <section class="header-fixed">
    <seller-header/>
    <div class="page-body">
      <seller-sidebar/>

      <Nuxt/>
    </div>
  </section>

</template>

<script>
  export default {

    head: {
      title: 'Helyos | Seller',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '/assets/vendors/iconfonts/mdi/css/materialdesignicons.css' },
        { rel: 'stylesheet', href: '/assets/vendors/css/vendor.addons.css' },
        { rel: 'stylesheet', href: '/assets/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css' },
        { rel: 'stylesheet', href: '/assets/css/shared/style.css' },
        { rel: 'stylesheet', href: '/assets/css/demo_1/style.css' }
      ],
      script: [
        { src: 'https://widget.cloudinary.com/v2.0/global/all.js', body: true, defer: true },
        { src: '/assets/vendors/js/core.js', body: true, defer: true },
        { src: '/assets/vendors/js/vendor.addons.js', body: true, defer: true },
        { src: '/assets/vendors/chartjs/Chart.min.js', body: true, defer: true },
        { src: '/assets/js/script.js', body: true, defer: true },
      ]
    }
  }
</script>

