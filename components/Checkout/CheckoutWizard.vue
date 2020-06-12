<template>
  <div class="checkout font-sans">
    <div id="cc-wizard">
      <template v-if="!thankYou">

        <div class="md:flex flex flex-wrap-reverse lg:flex relative">
          <!--Main-->
          <div class="relative lg:flex-1 lg:w-4/6 w-full">
            <div class="container">
              <div class="lg:px-12 py-6">
                <form-wizard :start-index="startIndex" :transition="wizardOption.transition" :shape="wizardOption.shape"
                             @on-complete="onComplete">
                  <tab-content title="Customer information" :before-change="updateCustomer">
                    <div class="cc-wizard-section">
                      <customer-info :user="user" ref="customerInfo"/>
                    </div>
                  </tab-content>
                  <tab-content title="Shipping information" :before-change="updateShipping">
                    <div class="cc-wizard-section">
                      <shipping-info ref="shippingInfo" @shipping-info="saveShippingInfo"/>
                    </div>
                  </tab-content>
                  <tab-content title="Payment information" :before-change="updatePayment">
                    <div class="cc-wizard-section">
                      <payment-selection ref="paymentInfo" @payment-info="savePaymentDetails"/>
                    </div>
                  </tab-content>

                  <template slot="footer" slot-scope="props">
                    <div class="flex items-center flex-wrap justify-between xs:justify-center my-4">
                      <div class="sm:text-center">
                        <nuxt-link :to="{name: 'index'}">
                          <wizard-button v-if="!props.activeTabIndex && !props.isLastStep" :style="backButtonStyle">
                            <svg class="icon inline mr-2" aria-hidden="true">
                              <use xlink:href="#icon-arrow-left"></use>
                            </svg>
                            Back to shop
                          </wizard-button>
                        </nuxt-link>
                        <wizard-button @click.native="props.prevTab()" v-if="props.activeTabIndex > 0"
                                       :style="backButtonStyle">
                          <svg class="icon inline mr-2" aria-hidden="true">
                            <use xlink:href="#icon-arrow-left"></use>
                          </svg>
                          {{`Back to ${stages[props.activeTabIndex-1].title}`}}
                        </wizard-button>
                      </div>
                      <div class="sm:text-center">
                        <wizard-button :disabled="loading" @click.native="props.nextTab()" class="wizard-footer-right finish-button"
                                       :style="baseButtonStyle">{{props.isLastStep ? (loading ? 'Processing...' : 'Complete Order' ) : `Continue to
                          ${stages[props.activeTabIndex+1].title}`}}
                        </wizard-button>
                      </div>
                    </div>
                  </template>
                </form-wizard>

              </div>

            </div>
          </div>
          <!--Right hand side bar-->
          <aside class="flex flex-col lg:w-2/6 w-full items-stretch border-l md:border-h-300 lg:border-h-300">
            <div class="sticky top-0">
              <shopping-bag-info :shipping="order.shipping" :item="item" :items="items" :nebula="nebula"/>
            </div>
          </aside>
        </div>
      </template>

      <template v-else>
        <transition name="fade">
          <keep-alive>
            <component :is="'thank-you'"></component>
          </keep-alive>
        </transition>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckoutWizard',
    props: {
      item: {
        default() {
          return null;
        }
      },
      items: {
        default() {
          return []
        }
      },
      nebula: {
        default: false
      }
    },
    computed: {
      backButtonStyle() {
        return {
          'background-color': 'transparent',
          'border-radius': '0',
          'font-style': 'normal',
          'font-weight': 'normal',
          'font-size': '16px',
          'line-height': '20px',
          'color': '#788995',
          'margin': '15px'
        }
      },
      completeComponent() {
        return 'thank-you'
      },
      baseButtonStyle() {
        return {
          background: this.nebula ? '#5902cb' : '#0000ff',
          'border-color': 'none',
          'box-shadow': '0px 2px 7px rgba(120, 137, 149, 0.254784)',
          'border-radius': '3px',
          'padding': '12px 18px',
          'font-style': 'normal',
          'font-weight': '600',
          'font-size': '14px',
          'line-height': '17px',
          'text-align': 'center',
          'text-transform': 'uppercase',
          'color': '#FFFFFF'
        }
      },
      startIndex() {
        if (this.user && this.user.address1 && this.user.country && this.user.city && this.user.postal_code) {
          return 1;
        }
        return 0;

      },
    },
    data() {
      return {
        loading: false,
        user: this.$store.state.auth.user || this.$cookies.get('helyos_user'),
        stages: [{ title: 'Customer info', component: 'customer-info' },
          { title: 'Shipping', component: 'shipping-info' },
          { title: 'Payment', component: 'payment-selection' }
        ],
        wizardOption: {
          transition: 'fade',
          shape: 'square'
        },
        thankYou: false,
        order: {
          cart: [],
          shipping: null,
          card: null,
        }
      }
    },
    methods: {
      updateCustomer() {
        this.$refs['customerInfo'].saveDetails();
        return true
      },
      updateShipping() {
        this.$refs['shippingInfo'].getDetails();
        return true;
      },

      updatePayment() {
        this.$refs['paymentInfo'].getPaymentDetails();
        return true;
      },

      saveShippingInfo(value) {
        this.order.shipping = value;
      },

      savePaymentDetails(value) {
        this.order.card = value;
      },
      onComplete: function() {
        this.loading = true;
        this.order.cart = [];
        if (this.item) {
          this.order.cart.push(this.item)
        }

        else {
          this.items.forEach(item => {
            let cart = {
              product: item.product.id,
              size: item.size,
              price: item.price,
              nebula: item.nebula || null,
              pricedProduct: item.pricedProduct || null,
            }
            this.order.cart.push(cart)
          })
        }

        this.$axios.$post('payment/checkout', this.order, {
          headers: {
            'Authorization': 'Bearer ' + this.user.token
          }
        }).then(response => {
          this.loading = false;
          this.thankYou = true;
          this.$store.commit('cart/CLEAR_CART')

        }).catch(error => {
          this.loading = false;
          this.$notification.error('cannot process transaction at this time');
        });

      }
    }
  }
</script>
