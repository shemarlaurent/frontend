<template>
  <div class="mt-6">
    <p class="font-bold">
      Membership Terminated
    </p>
    <div class="flex justify-center py-8">
      <button :disabled="loading" @click="revive" class="btn btn-black py-3 px-8">{{ loading ? 'Reviving...' : 'Revive it'}}</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TerminateComplete',
    props: ['user'],
    data() {
      return {
        loading: false
      }
    },
    methods: {
      revive() {
        this.loading = true;
        this.$axios.$get('account/revive', {
          headers: {
            'Authorization': 'Bearer ' + this.user.token
          }
        }).then(_ => {
          this.loading = false;
          this.$emit('onTerminate')
        }).catch(_ => {
          this.loading = false;
        })
      }
    }
  }
</script>

<style scoped>

</style>
