<template>
  <div class="">
        <Animation />
    <navbar/>
    <nuxt/>
  </div>
</template>

<script>
import Animation from '../components/Animation/Animation'
  export default {
    name: 'AccountLayout',
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

