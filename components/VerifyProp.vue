<template>

</template>

<script>
  export default {
    name: 'VerifyProp',
    props: ['products'],
    mounted() {
      console.log(Object.entries(this.products))
    }
  }
</script>

<style scoped>

</style>
