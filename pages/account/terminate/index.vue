<template>
  <div class="my-12 block font-sans">
    <div>
      <div class="mt-16  flex justify-center">
        <div class="">
          <div class="headline font-bold flex-auto w-11/12 text-center">
            My Account 
          </div>
          <transition name="fade">
            <component :is="dynamicComponent" :user="user" @onTerminate="nextComponent"></component>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TerminateBegin from '../../../components/Account/TerminateBegin'
  import TerminateComplete from '../../../components/Account/TerminateComplete'

  export default {
    name: 'index',
    middleware: 'user',
    components: {
      TerminateBegin,
      TerminateComplete
    },
    data() {
      return {
        user: this.$cookies.get('helyos_user'),
        index: 0,
        components: [
          'terminate-begin',
          'TerminateComplete'
        ]
      }
    },
    computed: {
      dynamicComponent() {
        return this.components[this.index]
      }
    },
    methods: {
      nextComponent() {
        this.index++
      }
    }
  }
</script>

<style scoped>

</style>
