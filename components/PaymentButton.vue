<template>
  <div class="btn-width">
    <div class="btn px-16 py-3 btn-blue border-2 border-blue-900 rounded" @click.stop="onPay">
      <div class=" flex items-center">
        <svg width="25" height="25" class="mr-1" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.086 2.06702L5.27026 8.50023V18.1501C5.27026 27.0761 11.5916 35.4232 20.086 37.4497C28.5803 35.4232 34.9017 27.0761 34.9017 18.1501V8.50023L20.086 2.06702ZM31.6097 18.1502C31.6097 25.4197 26.704 32.1263 20.0863 34.1206C13.4687 32.1263 8.56302 25.4197 8.56302 18.1502V10.5911L20.0863 5.5893L31.6097 10.5911V18.1502ZM12.5301 19.099L10.209 21.3667L16.7938 27.8L29.9633 14.9335L27.6422 12.6497L16.7938 23.2485L12.5301 19.099Z" fill="white"/>
        </svg>

        Pay
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PaymentButton',
    methods: {
      onPay() {
        this.$emit('onPay')
      }
    }
  }
</script>

<style scoped>
  .btn-width {
    width: 250xp;
  }
</style>
