<template>
  <div class="wavy-loader">
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
  </div>
</template>

<script>
  export default {
    name: 'WavyLoader'
  }
</script>

<style scoped lang="scss">
  .wavy-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      position: relative;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 0 12px;
      background-color: black;
      opacity: .5;
    }

    span:first-child {
      animation: wavy-loader 2.5s .2s ease-out infinite;
    }

    span:nth-child(2) {
      animation: wavy-loader 2.5s .4s ease-out infinite;
    }

    span:nth-child(3) {
      animation: wavy-loader 2.5s .6s ease-out infinite;
    }

    span:nth-child(4) {
      animation: wavy-loader 2.5s .8s ease-out infinite;
    }

    span:nth-child(5) {
      animation: wavy-loader 2.5s 1s ease-out infinite;
    }
  }


  @keyframes wavy-loader {
    0% {
      top: 4px;
    }
    1% {
      top: 6px;
    }
    2% {
      top: 8px;
    }
    3% {
      top: 10px;
    }
    4% {
      top: 12px;
    }
    5% {
      top: 14px;
      opacity: 1;
    }
    6% {
      top: -4px;
      opacity: 1;
    }
    7% {
      top: -6px;
      opacity: 1;
    }
    8% {
      top: -8px;
      opacity: 1;
    }
    9% {
      top: -10px;
      opacity: 1;
    }
    10% {
      top: -12px;
      opacity: 1;
    }
    11% {
      top: -14px;
      opacity: 1;
    }
    12% {
      top: 0;
      opacity: .5;
    }
    100% {
      top: 0;
      opacity: .5;
    }
  }
</style>
