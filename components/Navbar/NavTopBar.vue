<template>
  <nav class="bg-white border-b" role="navigation">
    <div class="mx-auto container">
      <div class="nav-topbar py-3">
        <div class="bg-white block flex-no-wrap flex-shrink-0 p-1">
          <div class="navbar-brand  ">
            <nuxt-link to="/">
              <logo/>
            </nuxt-link>
          </div>
          <div class="pl-1 mx-1 block">
            <div class="hamburger-menu" @click.stop="toggleSideBar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <!--Navbar search-->
        <div class="block lg:mx-10 md:mx-10 relative w-full">
          <navbar-search/>
        </div>
        <!--Navbar links-->
        <div class="bg-white block flex-no-wrap flex-shrink-0 px-2 mt-4 ">
          <div class="navbar-link">
            <div class="navbar-link-item relative wide-screen ">
              <heylo-popup :setting="heyloPopupSetting">
                <template slot-scope="props">
                  <div class="flex flex-col items-center relative" @click.stop="props.pop">
                    <img src="~assets/svg/bell.svg" class="h-icon" alt="">
                    <span v-if="true" class="badge custom-color">4</span>
                    <span class="text cursor-pointer">Alerts</span>
                  </div>
                </template>
                <template slot="popup-content" slot-scope="props">
                  <div class="absolute overflow-hidden bg-white rounded shadow  top-0 right-0 mt-12 alert-notice">
                    <!--  <span class="absolute top-0 mr-4 mt-1 text-2xl right-0 cursor-pointer"
                            @click="props.pop()">&times;</span>-->
                    <div class="px-6 my-4 text-center block">
                      <div class="font-bold text-sm py-4 block">Alert Notification</div>
                      <div class="">
                        <div
                          class="flex justify-between py-2 text-left items-center hover:bg-gray-100 border-t border-gray-200"
                          v-for="i in 3">
                          <a href="#" class="my-2 mr-4 ellipsis">Alert notification</a>
                          <span class="text-red-500 cursor-pointer px-2 ">
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10ZM5 11V9H15V11H5Z"
                                  fill="#FD0D1B"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </heylo-popup>
            </div>
            <div class="navbar-link-item">
              <nuxt-link :to="{name: 'checkout'}" class="flex flex-col items-center relative">
                <img src="~assets/svg/bag.svg" class="h-icon" alt="">
                <span class="badge blue mr-4" v-if="cartCount">{{ cartCount }}</span>
                <span class="text cursor-pointer">The Bag</span>
              </nuxt-link>
            </div>
            <div class="navbar-link-item wide-screen ">
              <heylo-popup class="flex flex-col items-center relative">
                <template slot-scope="props">
                  <img src="~assets/svg/account.svg" class="h-icon" alt="">
                  <!--Account drop down-->
                  <span class="text cursor-pointer" @click.stop="props.pop">Account</span>
                </template>
                <template slot="popup-content" slot-scope="props">
                  <ul v-if="loggedIn"
                      class="dropdown-menu bg-white rounded shadow-md absolute mt-1 right-0 search-select-dropdown">
                    <li>
                      <nuxt-link :to="{name: 'account'}"
                                 class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Your Account
                      </nuxt-link>
                    </li>
                    <li @click.stop="togglePlazmaModal" class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">
                      Plazma
                    </li>
                    <li class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100" @click.stop="toggleDelphiModal">
                      Delphi
                      
                    </li>
                    <li>
                      <nuxt-link :to="{name: 'associate-hub'}"
                                 class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Associates Hub
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="{name: 'abyss'}"
                                 class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Abyss
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="{name: 'account-order'}"
                                 class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Orders
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="{name: 'account-like'}"
                                 class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Likes
                      </nuxt-link>
                    </li>
                    <li>
                       <span class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100" @click.stop="toggleSellerModal">
                          Become a Seller
                          </span>
                    </li>
                    <li>
                      <span class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100" @click.stop="toggleAffiliateModal">
                          Become an Affiliate
                          </span>
                    </li>
                  </ul>
                  <ul v-else
                      class="dropdown-menu bg-white rounded shadow-md absolute mt-1 right-0 search-select-dropdown">
                    <li>
                      <div class="p-2">
                        <div class="w-full mb-1">
                          <nuxt-link class="btn btn-blue block text-center rounded" :to="{name: 'auth-sign-in'}">Sign in
                          </nuxt-link>
                        </div>
                        <p class="text-center  my-2">
                          New Customer?
                          <nuxt-link :to="{name: 'auth-sign-up'}" class="nowrap-text text-blue-500">Start here</nuxt-link>
                        </p>
                        <hr>
                      </div>
                    </li>
                    <li @click.stop="toggleSellerModal">
                      <span class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100 cursor-pointer">Become a Seller
                      </span>
                    </li>
                    <li @click.stop="toggleAffiliateModal">
                      <span class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100 cursor-pointer">Become an
                        Affiliate
                      </span>
                    </li>
                  </ul>
                </template>
              </heylo-popup>
            </div>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'TopNavbar',
    data() {
      return {
        loggedIn: !!this.$cookies.get('helyos_user'),
        heyloPopupSetting: {
          style: {
            'display': 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'position': 'relative'
          }
        }
      }
    },
    computed: mapGetters({
      user: 'auth/authUser',
      cartCount: 'cart/COUNT'
    }),

    methods: {
      toggleSideBar() {
        this.$emit('onToggleSidebar')
      },
      toggleAffiliateModal() {
        this.$emit('affiliate-modal')
      },
      togglePlazmaModal() {
        this.$emit('plazma');
      },
      toggleSellerModal() {
        this.$emit('seller-modal')
      },
      toggleDelphiModal() {
        this.$emit('delphi');
      }
    }
  }
</script>

<style scoped lang="scss">
  .custom-color {
    background-color: #00FFD1 !important;
  }
  .dropdown-menu {
    top: 100%;
    width: auto;
  }

  .nav-topbar {
    @apply flex justify-between items-center flex-no-wrap font-sans py-2;
    .navbar-link {
      @apply flex items-center h-full w-full flex-auto flex-no-wrap justify-around;
      .navbar-link-item {
        min-width: 30px;
        @apply relative flex flex-col text-xs items-center flex-1 flex-grow px-1;
        span.text {
          white-space: nowrap;
          text-overflow: ellipsis;
          @apply py-1 px-2 font-medium;
          font-size: 10px;
        }
      }
    }

    .nav-topbar .navbar-link {
      margin-top: 10px;
    }


    /*Screen styling*/
    @media (min-width: 768px) {
      .navbar-brand {
        @apply flex-initial items-center flex-shrink-0 text-white mx-2;
      }
      .navbar-link {
        .navbar-link-item {

        }
      }
    }
    @media all and (max-width: 768px) {
      /*Hamburger menu toggler*/
      .hamburger-menu {
        display: block;
        position: relative;
        -webkit-user-select: none;
        user-select: none;
        width: 20px;
        @apply bg-white;
        cursor: pointer;

        span {
          display: block;
          width: 100%;
          height: 2px;
          margin-top: 4px;
          margin-bottom: 4px;
          position: relative;
          background: black;
          border-radius: 3px;
          transform-origin: 4px 0px;
          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
          background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
          opacity 0.55s ease;
          @apply mx-auto;
          &:first-child {
            transform-origin: 0 0;
          }

          &:nth-last-child(2) {
            transform-origin: 0 100%;
          }
        }
      }
      /*Brand*/
      .navbar-brand {
        @apply hidden;
      }
      /*Links*/
      .navbar-link {
        .navbar-link-item {
          .badge {
            margin-right: -10px;
            background-color: #00FFD1 !important;
          }

          &.wide-screen {
            display: none;
          }

          span.text {
            @apply hidden;
            &:hover {
            }
          }
        }
      }
    }
  }

  .alert-notice {
    max-width: 200px;
    background: #FFFFFF;

  }
</style>
