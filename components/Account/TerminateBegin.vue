<template>
  <div class="mt-6">
    <p class="font-bold">
      Gone, but not forgotten... we’ll miss you hope you can come back
    </p>
    <div class="flex justify-center py-8">
      <button :disabled="loading" class="btn btn-black py-3 px-8" @click="terminate">{{ loading ? 'Terminating...' : 'Terminate it'}}</button>
      <div class="btn btn-black py-3 px-8" @click="revive">Revive it</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TerminateBegin',
    data() {
      return {
        loading: false
      }
    },
    props: ['user'],
    methods: {
      terminate() {
        this.loading = true;
        this.$axios.$get('account/terminate', {
          headers: {
            'Authorization': 'Bearer ' + this.user.token
          }
        }).then(_ => {
          this.loading = false;
          this.$emit('onTerminate')
        }).catch(_ => {
          this.loading = false;
        })
      }, revive() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
