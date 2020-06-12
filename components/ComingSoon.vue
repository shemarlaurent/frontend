<template>
  <div class="block w-screen">
    <div class="coming-soon relative flex items-center justify-center flex-center">
      <div class="coming-soon-text uppercase">
        Coming soon
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ComingSoon'
  }
</script>

<style scoped lang="scss">
  .coming-soon {
    margin: 0 auto;
    height: 100vh;
    background: #FFFFFF;
    max-width: 750px;

    .coming-soon-text {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      color: #FF0000;
    }

  }

</style>
