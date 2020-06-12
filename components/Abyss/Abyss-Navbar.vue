<template>
  <div class="abyss-navbar">
    <div class="container">
      <div class="flex  items-center py-2 px-3">
        <nuxt-link :to="{name: 'abyss'}">
          <logo src="/abyss_logo.svg" class="logo"/>
        </nuxt-link>

        <div class="ml-auto p-2">
          <slot name="aside-link">
            <nuxt-link :to="{name: 'abyss-login'}">Login</nuxt-link>
          </slot>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Abyss-Navbar'
  }
</script>

<style>
  
</style>
