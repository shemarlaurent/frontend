
<template>
  <div class="p-2 lg:w-5/6 md:w-5/6 mx-auto lg:border md:border border-gray-300 h-screen">
    <transition name="fade">
      <wait-loader @onWaitComplete="onWaitLoaded" v-if="!loaded"/>
      <div class="block my-16" v-else>
        <div class="headline-lg text-center font-bold">
          Terms of Service
        </div>
        <div class="text-left m-8 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias consequatur dicta dolor, ea et fugiat
            ipsa, minus nesciunt nisi officiis quam quas reiciendis sint, sunt unde voluptatibus. Nulla, numquam!
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'terms',
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
