<template>
  <transition name="fade">
    <div @keyup.esc="escapeKeyListener" class="modal" v-if="state">
      <slot name="close-modal z-10" v-if="!noClose">
        <div @click="modalClose" class="close">&times;</div>
      </slot>
      <div class="content-layout z-9">
        <div class="absolute top-0 w-full h-full left-0" @click.stop="modalClose"></div>
        <slot v-bind="slotProps"></slot>
      </div>
    </div>

  </transition>
</template>

<script>
  export default {
    created() {
      document.addEventListener('keyup',
                                this.escapeKeyListener)
    },
    destroyed() {
      document.removeEventListener('keyup',
                                   this.escapeKeyListener)
    },
    data() {
      return {
        open: false
      }
    },
    props: {
      noClose: {
        default: false,
        required: false,
        type: Boolean
      }
    },
    computed: {
      state() {
        return this.open
      },
      slotProps() {
        return {
          open: this.open,
          toggle: this.toggleState,
          toggleOpen: this.modalOpen,
          toggleClose: this.modalClose
        }
      }
    },
    methods: {
      toggleState() {
        !this.open ? this.modalOpen() : this.modalClose()
      },
      modalOpen() {
        this.open = true
        $('body').addClass('overflow-hidden')
        this.$emit('onModalOpen')
      },
      modalClose() {
        this.open = false
        this.$emit('onModalClose')
        $('body').removeClass('overflow-hidden')
      },
      escapeKeyListener(evt) {
        if (evt.keyCode === 27) {
          if (this.open) {
            this.modalClose()
          }
        }
      }
    },
    mounted() {
      // console.log('Component mounted.')
    }
  }
</script>

<style lang="scss" scoped>

  $bg: rgba(115, 115, 115, 0.78);

  .modal {
    background-color: $bg;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    justify-content: center;
    /*border: 2px solid $primary;*/
    display: flex;
    z-index: 5000;


    .content-layout {
      background: transparent;
      padding: 0;
      display: block;
      position: relative;
      object-fit: fill;
      object-position: center;
      height: 100vh;
      width: 100vw;
      overflow: auto;
      top: 0;
      @media(max-width: 768px) {
        padding: 0;
      }
    }
  }
</style>
