<template>
  <div class="relative w-block " v-alt:click="assertHide">
    <slot v-bind="slotProps">
      <button class="block btn btn-black relative overflow-hidden text-xs" @click.capture="toggle">Dropdown</button>
    </slot>
    <div class="relative" :class="classes">
      <slot name="content" v-bind="slotProps" v-show="open">
        <div class="bg-white rounded shadow-md absolute mt-1 z-10 w-full left-0">
          <a class="block py-2 px-4 text-xs text-gray-800 hover:bg-h-100" href="#">Content 1</a>
          <a class="block py-2 px-4 text-xs text-gray-800 hover:bg-h-100" href="">Content 2</a>
          <a class="block py-2 px-4 text-xs text-gray-800 hover:bg-h-100" href="">Content 3</a>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dropdown',
    props: {
      closeOnClickTwice: {
        default: true,
        required: false
      }
    },
    data() {
      return {
        open: false
      }
    },
    methods: {
      assertHide() {
        if (this.closeOnClickTwice) {
          this.hide()
        }
      },
      toggle() {
        if (this.closeOnClickTwice) {
          this.open = !this.open
        }
      },
      hide() {
        this.open = false
        this.$emit('on-hide')

      }, reveal() {
        this.open = true
        this.$emit('on-reveal')

      },
      onCreate() {
        this.$emit('on-create')
      }
    },
    created() {
      this.onCreate()
    },
    computed: {
      slotProps() {
        return {
          reveal: this.reveal,
          hide: this.hide,
          open: this.open,
          toggle: this.toggle
        }
      },
      classes() {
        return {
          height: this.open ? 'auto' : 0,
          'overflow-hidden': !this.open
        }
      }
    }
  }
</script>

<style scoped>

</style>
