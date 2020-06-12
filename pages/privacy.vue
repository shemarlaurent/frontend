<template>
  <div class="p-2 lg:w-5/6 md:w-5/6 mx-auto lg:border md:border border-gray-300 h-screen">
    <transition name="fade">
      <wait-loader @onWaitComplete="onWaitLoaded" v-if="!loaded"/>
      <div class="block my-16" v-else>
        <div class="headline-lg text-center font-bold">
          Privacy Policy
        </div>
        <div class="text-left m-8 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, atque dolores doloribus dolorum enim
            est
            fugit, labore minima molestiae perspiciatis possimus quas quia ratione rerum sint tempora, ut veniam vero!
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'privacy',
    // layout: 'deliverable',
    data() {
      return {
        loaded: false
      }
    },
    methods: {
      onWaitLoaded() {
        this.loaded = true
      }
    }
  }
</script>

<style scoped>

</style>
