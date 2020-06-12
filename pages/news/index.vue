<template>
  <div>
    <news-navbar></news-navbar>
    <div class="container">
      <div class="my-4">
        <div class="headline-sm w-full justify-center flex mx-2">
          The one place for all your Streetwear News aggregated and simplified for your reading ease.
        </div>

        <div class="flex flex-wrap justify-center my-4">
          <!--Ensurew that you put a key value-->
          <div class="news-articles" v-for="(i, index) in 10" :key="`news-article-${index}`">
            <news-card/>
          </div>
        </div>
      </div>
    </div>
    <fashion-news-source-form/>
    <footer-section/>

  </div>
</template>

<script>
  import NewsCard from '~/components/News/NewsCard'

  export default {
    name: 'index',
    components: { NewsCard }
  }
</script>

<style scoped lang="scss">
  .news-articles {
    @apply p-2;
    width: 360px;
  }

</style>
