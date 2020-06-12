<template>
  <div class="">
        <Animation />
    <navbar/>
    <nuxt/>
    <footer-section/>
  </div>
</template>

<script>
import Animation from '../components/Animation/Animation'
  export default {
    name: 'SingleProductLayout',
    data () {
      return{
        bool: true
      }
    },
    components:{
      Animation
    },
  }
</script>

