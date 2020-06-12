<template>
  <div class="waiting" v-show="!loaded">
    <div class="text-center">
      <preloader/>
      <div class="my-6">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WaitLoader',
    props: {
      timeout: {
        default: 500,
        required: false,
        type: Number
      }
    },
    data() {
      return {
        loading: null,
        loaded: false
      }
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      startLoading() {
        if (this.timeout)
          this.loading = setTimeout(this.doneLoading, Math.floor(Math.random() * (30000 - 20000) ) + 20000)
      },
      doneLoading() {
        if (this.timeout)
          clearTimeout(this.loading)
        this.loaded = true
        this.$emit('onWaitComplete')
      }
    }
  }
</script>

<style scoped>

</style>
