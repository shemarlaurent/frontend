<template>
  <div class="banner-slide" v-if="banners.length">
    <heylo-swiper :navigation="true">
      <swiper-slide v-for="banner in banners" :key="banner.id">
        <img v-if="banner.image" class="w-full h-full object-cover object-center" :src="banner.image" alt=""/>
      </swiper-slide>
    </heylo-swiper>
  </div>
</template>

<script>
  export default {
    name: 'BannerSlider',


    data() {
      return {
        banners: []
      }
    },
    mounted() {
      this.getBanners()
    },
    methods: {
      getBanners() {
        this.$axios.$get('admin/settings/banner')
          .then(response => this.banners = response);
      }
    },
  }
</script>


<style lang="scss">
  .banner-slide {
    align-items: center;
    color: #999;
    display: flex;
    justify-content: center;
    background-color: #ededed;
    height: 18rem;
    overflow: hidden;
    position: relative;
  }

</style>
