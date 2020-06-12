<template>
  <div class="font-body text-base">
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AccountPage',
  }
</script>

<style lang="scss">
  .alert {
    width: 913px;
    position: relative;
    text-align: left;
    padding: 24px;
    display: flex;

    .alert-btn {
      position: relative;
      border: 1.13978px solid #000000;
      box-sizing: border-box;
      border-radius: 3.03943px;
      display: inline-block;
      margin-top: 12px;
      @apply p-2;
    }

    &.info {
      background: rgba(96, 241, 172, 0.6);
    }
  }
</style>
