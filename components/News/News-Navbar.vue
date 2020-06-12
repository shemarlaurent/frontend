<template>
  <div class="abyss-navbar">
    <div class="container">
      <div class="flex  items-center py-2 px-2">
        <nuxt-link :to="{name: 'news'}">
          <logo src="/news_logo.svg" :height="70" />
        </nuxt-link>

        <div class="ml-auto p-2">
          <slot name="aside-link">
            <nuxt-link :to="{name: 'news-login'}">Login</nuxt-link>
          </slot>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'News-Navbar'
  }
</script>

