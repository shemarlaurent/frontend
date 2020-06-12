<template>
  <transition name="slide-from-left">
    <nav class="sidebar" @keyup.esc="escapeKeyListener" :class="{open:isOpen}" role="navigation">
      <div class="menu-overlay" v-if="isOpen" @click.stop="sidebarClose"></div>
      <div class="mx-auto container">
        <div class="nav-sidebar">
          <div class="block relative">
            <div class="relative">
              <div class="menu-headline">
                Menu
              </div>
            </div>
            <div class="menu">
              <div class="menu-item">
                <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
              </div>
              <div class="menu-item featured">
                <nuxt-link :to="{name: 'index'}">Featured</nuxt-link>
              </div>
              <div class="menu-item">
                <nuxt-link :to="{name: 'account'}">Your Account</nuxt-link>
              </div>
              <div  @click.stop="togglePlazmaModal" class="menu-item">
                Plazma
              </div>
              <div class="menu-item">
                <nuxt-link :to="{name: 'abyss'}">Abyss</nuxt-link>
              </div>
              <div class="menu-item">
                <nuxt-link :to="{name: 'delphi'}">Delphi</nuxt-link>
              </div>
              <div class="menu-item">
                <nuxt-link :to="{name: 'associate-hub'}">Associate Hub</nuxt-link>
              </div>
              <div class="menu-item">
                <nuxt-link :to="{name: 'account-order'}">Orders</nuxt-link>
              </div>
              <div class="menu-item">
                <nuxt-link :to="{name: 'account-like'}">Likes</nuxt-link>
              </div>
              <div class="menu-item featured">
                <nuxt-link :to="{name: ''}">Exclusive Access</nuxt-link>
              </div>
              <div class="menu-item" @click.stop="toggleSellerModal">
                Become a Seller
              </div>
              <div class="menu-item" @click.stop="toggleAffiliateModal">
                Become an Affiliate
              </div>

              <div class="menu-item featured">
                <nuxt-link :to="{name: 'support'}">Support</nuxt-link>
              </div>
              <div class="menu-item">
                <nuxt-link :to="{name: 'contact'}">Contact Us</nuxt-link>
              </div>
              <div class="menu-item">
                <nuxt-link :to="{name: 'alert'}">Alerts</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  </transition>
</template>

<script>
  export default {
    name: 'sideNavbar',
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
    computed: {
      isOpen() {
        return this.open
      }
    },
    methods: {
      toggleAffiliateModal(){
        this.$emit('affiliate-modal')
      },
      toggleSellerModal(){
        this.$emit('seller-modal')
      },
      togglePlazmaModal() {
        this.$emit('plazma');
      },
      escapeKeyListener(evt) {
        if (evt.keyCode === 27) {
          if (this.open) {
            this.toggleOpen()
          }
        }
      },
      sidebarOpen() {
        this.open = true
        this.$emit('onSidebarOpen')
      },
      sidebarClose() {
        this.open = false
        this.$emit('onSidebarClose')
      },
      toggleOpen() {
        !this.open ? this.sidebarOpen() : this.sidebarClose()
      }
    }
  }
</script>

<style scoped lang="scss">
  .menu-overlay {
    z-index: 20;
    position: absolute;
    background: transparent;
    width: 100vw;
    left: 100%;
    height: 100vh;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    z-index: 10;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    height: 100vh;
    width: 271px;
    background: #FFFFFF;
    display: block;
    transition: all .35s ease-in-out;
    opacity: 0;

    &.open {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .nav-sidebar {
    .menu-headline {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;

      @apply p-4 flex items-center justify-center text-h-300 border-b border-gray-200;
    }

    .menu {
      position: relative;
      overflow-y: auto;
      display: block;
      width: 100%;
      height: 90vh;

      .menu-item {
        padding: 12px 12px 12px 20px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        text-transform: capitalize;
        @apply font-sans;
        &.featured {
          background: #F8F8F8;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 15px;
          @apply text-h-300;

        }
      }
    }
  }
</style>
