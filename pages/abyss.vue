<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    layout: 'clear',
    name: 'abyss'
  }
</script>

<style lang="scss">
  .report-card {
    max-width: 446px;
    min-height: 300px;
    margin: auto;
    background: #FFFFFF;
    padding: 30px;

    .report-message {
      font-style: normal;
      font-weight: 500;
      line-height: 29px;
      color: #000000;
      padding: 15px;

    }
  }

  .lg-cover-img {
    min-width: 300px;
    width: 100%;
    max-width: 534px;
    max-height: 456px;
    min-height: 300px;
    background: #F8F8F8;
    color: #c4c4c4;
    @apply flex justify-center items-center object-center object-cover relative;
    &.extend-r{
      /*-webkit-border-radius: 20px;*/
      /*-moz-border-radius: 20px;*/
      /*border-radius: 20px;*/
     /*&:after{
       position: absolute;
       width: 100%;
       height: 90%;
       content: '';
       left: 20px;
       -webkit-border-radius: inherit;
       -moz-border-radius: inherit;
       border-radius: inherit;
       background: #ECEBEB;
       z-index: -1;
     }*/
    }
  }
</style>
