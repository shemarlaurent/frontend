<template>
  <div>
    <component :is="dynamicComponent"/>
  </div>
</template>

<script>
  import PlazmaScreen from '../../components/Plazma/PlazmaScreen'

  export default {
    name: 'index',
    middleware: 'subscribed',
    data() {
      return {
        index: 0,
        components: [
          'plazma-screen'
        ]
      }
    },
    components: {
      'plazma-screen': PlazmaScreen
    },
    computed: {
      dynamicComponent() {
        return this.components[this.index]
      }
    }
  }
</script>
