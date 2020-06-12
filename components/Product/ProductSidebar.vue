<template>
  <div>
    <div :class="{ show: show }" class="product-sidebar">
      <div class="product-option">
        <span @click.stop="toggleShow" class="close">&times;</span>
        <div class="headline">
          Select an Option:
        </div>

        <div class="options">
          <div class="option-item" @click.prevent.stop="togglePricePicker">
            <div class="thumb">
              <svg
                viewBox="0 0 123 98"
                fill="none"
                width="50px"
                height="50px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.9835 27.1564C29.1832 27.5982 26.9986 29.8148 26.5976 32.6212L21.671 67.0956C21.0598 71.3728 24.74 75.0319 29.0136 74.3961L39.2638 72.871C42.039 72.4581 44.23 70.3003 44.6852 67.5317L47.1301 52.6624C47.5916 49.856 49.8348 47.682 52.6542 47.3086L66.6837 45.451C69.5082 45.077 71.7537 42.896 72.21 40.0837L73.991 29.1054C74.6949 24.7667 70.9524 21.008 66.6107 21.693L31.9835 27.1564Z"
                  fill="#0000FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M90.2811 70.3269C93.0814 69.8851 95.266 67.6684 95.667 64.862L100.594 30.3876C101.205 26.1105 97.5246 22.4514 93.2511 23.0872L83.0008 24.6123C80.2256 25.0252 78.0346 27.183 77.5794 29.9516L75.1345 44.8209C74.673 47.6273 72.4298 49.8013 69.6104 50.1746L55.5809 52.0323C52.7564 52.4063 50.5109 54.5873 50.0546 57.3996L48.2736 68.3778C47.5697 72.7165 51.3122 76.4752 55.6539 75.7902L90.2811 70.3269Z"
                  fill="#59D0FF"
                />
                <rect
                  x="51.3722"
                  y="29.3109"
                  width="4.92358"
                  height="25.1858"
                  rx="2.46179"
                  transform="rotate(10.3499 51.3722 29.3109)"
                  fill="white"
                />
              </svg>
            </div>
            Pick Your Price
          </div>
          <div class="option-item" @click.prevent.stop="toggleBuyNow">
            <div class="thumb">

                <img src="@/assets/images/buy-icon.png" alt="" />

            </div>

              Buy Now

          </div>
          <div class="option-item" @click.stop="toggleAddToCart">
            <div class="thumb">
              <img src="@/assets/images/cart-icon.png" alt="" />
            </div>
            Add to Cart
          </div>
          <div class="option-item" @click.stop="toggleNebulaPay">
            <div class="thumb-flex">
              <svg
                viewBox="0 0 57 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.8331 2.91283C26.8331 1.83087 27.8931 1.0669 28.9195 1.4091L55.0797 10.1307C55.7269 10.3465 56.1634 10.9522 56.1634 11.6345V68.4948C56.1634 69.6602 54.9481 70.4272 53.8961 69.9256L27.736 57.4521C27.1844 57.1891 26.8331 56.6324 26.8331 56.0213V2.91283Z"
                  fill="#A968FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.6488 17.9332L54.2149 70.0252L28.6488 57.9839V17.9332Z"
                  fill="#8542DE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.321655 10.3992C0.321655 8.67128 2.06642 7.4894 3.6711 8.13036L29.652 18.508V73.1936C29.652 74.9949 27.7691 76.1769 26.1469 75.3939L1.70286 63.596C0.858355 63.1884 0.321655 62.3335 0.321655 61.3957V10.3992Z"
                  fill="#5902CB"
                />
              </svg>
            </div>
            Nebula Pay
          </div>
          <div class="option-item" @click.stop="toggleFlex">
            <div class="thumb-flex">
              <svg
                viewBox="0 0 68 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6.72684"
                  y="21.456"
                  width="56.6896"
                  height="8.09851"
                  rx="4.04926"
                  transform="rotate(-21.5771 6.72684 21.456)"
                  fill="url(#paint0_linear)"
                />
                <rect
                  x="12.0877"
                  y="35.0118"
                  width="56.6896"
                  height="8.09851"
                  rx="4.04926"
                  transform="rotate(-21.5771 12.0877 35.0118)"
                  fill="url(#paint1_linear)"
                />
                <rect
                  x="6.15198"
                  y="53.035"
                  width="35.6334"
                  height="8.09851"
                  rx="4.04926"
                  transform="rotate(-21.5771 6.15198 53.035)"
                  fill="url(#paint2_linear)"
                />
                <rect
                  x="0.2164"
                  y="71.0582"
                  width="35.6334"
                  height="8.09851"
                  rx="4.04926"
                  transform="rotate(-21.5771 0.2164 71.0582)"
                  fill="url(#paint3_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="60.9377"
                    y1="27.3737"
                    x2="9.46622"
                    y2="27.5752"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5C00" />
                    <stop offset="1" stop-color="#FF0000" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="65.7688"
                    y1="42.1312"
                    x2="14.2973"
                    y2="42.3327"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5C00" />
                    <stop offset="1" stop-color="#FF0000" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="39.893"
                    y1="60.2964"
                    x2="6.95676"
                    y2="59.8337"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5C00" />
                    <stop offset="1" stop-color="#FF0000" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="34.9183"
                    y1="77.5909"
                    x2="0.603933"
                    y2="77.7253"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5C00" />
                    <stop offset="1" stop-color="#FF0000" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            Flex
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-overlay" @click.stop="closeSidebar"></div>
    <heylo-modal ref="modal" @onModalClose="reset">
      <template slot-scope="props">
        <single-product-price-picker @price="addPrice" :price="price" v-if="picker" />
        <all-gone v-else-if="gone"/>
        <no-entry v-else-if="noEntry"/>
        <no-chance v-else-if="none"/>
        <single-product-nebula-pay @selected="nebulaOptions" :cost="price" v-else-if="nebula"/>
        <coming-soon v-else-if="flex"/>
      </template>
    </heylo-modal>
  </div>
</template>

<script>
export default {
  name: 'ProductSidebar',
  data() {
    return {
      user: this.$cookies.get('helyos_user'),
      show: false,
      nebula: false,
      picker: false,
      gone: false,
      none: false,
      noEntry: false,
      flex: false,
      buy: false,
      cart: false,
      options: {
        pricedProduct: null,
        nebula: null
      }
    }
  },

  props: ['price', 'pyp'],
    methods: {
      toggleShow() {
        this.show = !this.show
      },
      toggleModal() {
        this.$refs['modal'].toggleState()
      },
      togglePricePicker() {
        this.picker = !this.picker;
        this.toggleModal();
        // this.checkAvailability()
      },
      toggleNebulaPay() {
        this.nebula = !this.nebula
        this.toggleModal()
      },
      toggleFlex() {
        this.toggleModal()
      },
    closeSidebar(){
this.show = false;
    },

    toggleAddToCart() {
      this.$emit('addToCart')
    },
    toggleBuyNow() {
      if (this.user) {
        this.$emit('buyNow', this.options)
      } else
        this.$router.push({
          name: 'auth-sign-up',
          query: { redirect: this.$route.fullPath }
        })
    },
    addPrice(price) {
      this.options.pricedProduct = price
      if (this.user) {
        this.$emit('purchase', this.options)
        this.reset()
        this.toggleModal()
      } else
        this.$router.push({
          name: 'auth-sign-up',
          query: { redirect: this.$route.fullPath }
        })
    },

    nebulaOptions(plan) {
      this.options.nebula = plan
      if (this.user) {
        this.$emit('purchase', this.options)
        this.reset()
        this.toggleModal()
      } else
        this.$router.push({
          name: 'auth-sign-up',
          query: { redirect: this.$route.fullPath }
        })
    },
    reset() {
      this.picker = false
      this.nebula = false
      this.gone = false
      this.noEntry = false
      this.none = false
    },

    checkAvailability() {
      let plan = this.getSubscriptionPlan()

      // no subscription
      if (plan === 0) {
        this.noEntry = true
        this.toggleModal()
      } else if (plan !== 0 && this.pyp.dailySales >= 20) {
        this.gone = true
        this.toggleModal()
      } else if (plan === 1 && this.pyp.userUsage !== 0) {
        this.gone = true
        this.toggleModal()
      } else if (plan === 1 && this.pyp.userUsage === 0) {
        this.picker = true
        this.toggleModal()
      } else if (plan === 2 && this.pyp.userUsage === 2) {
        this.gone = true
        this.toggleModal()
      } else if (plan === 2 && this.pyp.userUsage !== 2) {
        this.picker = true
        this.toggleModal()
      } else if (plan === 3 && this.pyp.userUsage === 3) {
        this.gone = true
        this.toggleModal()
      } else if (plan === 3 && this.pyp.userUsage !== 3) {
        this.picker = true
        this.toggleModal()
      }
    },

    getSubscriptionPlan() {
      if (this.user && this.user.subscription) {
        console.log(this.user.subscription.plan_id)
        return this.user.subscription.plan_id
      } else return 0
    }
  }
}
</script>

<style scoped lang="scss">
.product-sidebar {
  position: fixed;
  display: block;
  width: 300px;
  right: -2000%;
  top: 0;
  background: #ffffff;
  z-index: 100;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease-in-out;
  @apply h-full;
  &.show {
    right: 0;
    & + .sidebar-overlay {
      position: fixed;
      background: transparent;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: 10;
    }
  }

  @media screen and (max-width: 360px) {
    min-width: 360px;
    @apply w-full;
  }

  .product-option {
    @apply overflow-hidden overflow-y-auto px-6 h-full;
    .headline {
      font-style: normal;
      font-weight: 500;
      line-height: 35px;
      color: #959595;
      @apply m-2 mt-10 px-4;
    }

    .options {
      @apply cursor-pointer;
      .option-item {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #000000;
        @apply flex items-center px-4 my-6 py-2 rounded-full;
        &:hover {
          @apply bg-gray-100;
        }

        .thumb {
          width: 50px;
          height:50px;
          position: relative;
          overflow: hidden;
          @apply object-fill object-center mr-8 rounded-lg flex justify-center items-center;

          svg {
            @apply absolute top-0 left-0 w-full h-full;
          }
        }
        .thumb-flex {
          width: 43px;
          height:43px;
          margin-left: 7px;
          position: relative;
          overflow: hidden;
          @apply object-fill object-center mr-8 rounded-lg flex justify-center items-center;

          svg {
            @apply absolute top-0 left-0 w-full h-full;
          }
        }
      }
    }
  }
}
</style>
