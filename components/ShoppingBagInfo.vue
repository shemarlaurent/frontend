<template>
  <div class="container">
    <div>
      <div class="w-full px-8 py-6 relative">
        <div class="flex items-center justify-between my-6 relative">
          <div class="headline">
            Shopping Bag Info
          </div>
          <div>
            <div v-if="item" class="badge nebula mt-2 rounded-full">1</div>
            <div v-else class="badge blue">{{ items.length}}</div>
          </div>
        </div>
        <hr>

        <div class="checkout-bag" v-if="item">
          <div class="copped w-full" v-show="item.nebula">
            <span class="copped-text">COPPED BY {{ formatNebulaDate(item.nebula.days) }}</span>
            <span class="absolute right-0 mr-3">
                <svg class="hicon" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="45">
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#5902CB"/>
                  </mask>
                  <g mask="url(#mask0)">
                  <rect x="-70" y="-36" width="170" height="125" fill="#5902CB"/>
                  </g>
                  <path
                    d="M20.328 25.432C20.328 24.568 20.52 23.856 20.904 23.296C21.304 22.72 21.88 22.096 22.632 21.424C23.208 20.912 23.632 20.472 23.904 20.104C24.192 19.72 24.336 19.288 24.336 18.808C24.336 18.136 24.064 17.592 23.52 17.176C22.976 16.76 22.248 16.552 21.336 16.552C19.608 16.552 18.304 17.168 17.424 18.4L15.096 16.888C15.784 15.944 16.672 15.224 17.76 14.728C18.848 14.216 20.128 13.96 21.6 13.96C23.392 13.96 24.816 14.352 25.872 15.136C26.944 15.904 27.48 16.968 27.48 18.328C27.48 18.984 27.368 19.56 27.144 20.056C26.936 20.552 26.68 20.976 26.376 21.328C26.072 21.664 25.672 22.056 25.176 22.504C24.568 23.048 24.112 23.528 23.808 23.944C23.52 24.36 23.376 24.856 23.376 25.432H20.328ZM21.864 31.168C21.304 31.168 20.84 30.992 20.472 30.64C20.12 30.272 19.944 29.824 19.944 29.296C19.944 28.768 20.12 28.328 20.472 27.976C20.84 27.624 21.304 27.448 21.864 27.448C22.408 27.448 22.856 27.624 23.208 27.976C23.576 28.328 23.76 28.768 23.76 29.296C23.76 29.824 23.576 30.272 23.208 30.64C22.856 30.992 22.408 31.168 21.864 31.168Z"
                    fill="white"/>
                </svg>

              </span>
          </div>
          <div class="checkout-bag-item">
            <div class="thumb">
              <img :src="item.product.images[0].url" alt="">
            </div>
            <div class="meta">
              <div class="description">
                {{ item.product.name }}
              </div>
              <div class="pricing">
                {{ format(item.price) }}
              </div>
            </div>
          </div>
        </div>
        <div class="checkout-bag" v-else>
          <div class="checkout-bag-item" v-for="item in items" v-if="!item.nebula" :key="item.uuid">
            <div class="thumb">
              <img :src="item.product.images[0].url" alt="">
            </div>
            <div class="meta">
              <div class="description">
                {{ item.product.name }}
              </div>
              <div class="pricing">
                {{ item.pricedProduct ? format(item.pricedProduct) : format(item.price) }}
              </div>
            </div>
          </div>
          <div v-for="item in items" v-if="item.nebula" :key="item.uid">
            <div class="copped w-full" v-show="item.nebula">
              <span class="copped-text">COPPED BY {{ formatNebulaDate(item.nebula.days) }}</span>
              <span class="absolute right-0 mr-3">
                <svg class="hicon" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="45">
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#5902CB"/>
                  </mask>
                  <g mask="url(#mask0)">
                  <rect x="-70" y="-36" width="170" height="125" fill="#5902CB"/>
                  </g>
                  <path
                    d="M20.328 25.432C20.328 24.568 20.52 23.856 20.904 23.296C21.304 22.72 21.88 22.096 22.632 21.424C23.208 20.912 23.632 20.472 23.904 20.104C24.192 19.72 24.336 19.288 24.336 18.808C24.336 18.136 24.064 17.592 23.52 17.176C22.976 16.76 22.248 16.552 21.336 16.552C19.608 16.552 18.304 17.168 17.424 18.4L15.096 16.888C15.784 15.944 16.672 15.224 17.76 14.728C18.848 14.216 20.128 13.96 21.6 13.96C23.392 13.96 24.816 14.352 25.872 15.136C26.944 15.904 27.48 16.968 27.48 18.328C27.48 18.984 27.368 19.56 27.144 20.056C26.936 20.552 26.68 20.976 26.376 21.328C26.072 21.664 25.672 22.056 25.176 22.504C24.568 23.048 24.112 23.528 23.808 23.944C23.52 24.36 23.376 24.856 23.376 25.432H20.328ZM21.864 31.168C21.304 31.168 20.84 30.992 20.472 30.64C20.12 30.272 19.944 29.824 19.944 29.296C19.944 28.768 20.12 28.328 20.472 27.976C20.84 27.624 21.304 27.448 21.864 27.448C22.408 27.448 22.856 27.624 23.208 27.976C23.576 28.328 23.76 28.768 23.76 29.296C23.76 29.824 23.576 30.272 23.208 30.64C22.856 30.992 22.408 31.168 21.864 31.168Z"
                    fill="white"/>
                </svg>

              </span>
            </div>
            <div class="checkout-bag-item" v-if="item.nebula">
              <div class="thumb">
                <img :src="item.product.images[0].url" alt="">
              </div>
              <div class="meta">
                <div class="description">
                  {{ item.product.name }}
                </div>
                <div class="pricing">
                  {{ item.pricedProduct ? format(item.pricedProduct) : format(item.price) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="collapsible-card">
            <accordion>
              <template slot="accordion-head" slot-scope="props">
                <div class="head">
                  <div class="headline">
                    Have voucher?
                  </div>
                  <div class="indicator" @click.stop="props.toggle">
                    <svg class="icon cursor-pointer" aria-hidden="true">
                      <use xlink:href="#icon-arrow-up" v-if="props.expanded"></use>
                      <use xlink:href="#icon-arrow-down" v-else></use>
                    </svg>
                  </div>
                </div>
              </template>
              <div class="section-body">
                <div class="body">
                  <div class="spacer-list">
                    <div class="spacer-list-item">
                      <div class="list-headline">Subtotal</div>
                      <div class="list-sideline">{{ format(parseInt(total)) }}</div>
                    </div>
                    <div class="spacer-list-item">
                      <div class="list-headline">Shipping</div>
                      <div class="list-sideline">Free</div>
                    </div>
                  </div>
                </div>
                <div class="foot">
                  <div class="spacer-list">
                    <div class="spacer-list-item">
                      <div class="list-headline">Total</div>
                      <div class="list-sideline">{{ format(parseInt(total)) }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </accordion>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as moment from 'moment';
  export default {
    name: 'ShoppingBagInfo',
    props: {
      shipping: '',
      nebula: {
        default: false
      },
      item: {
        default() {
          return null;
        }
      },
      items: {
        default() {
          return []
        }
      }
    },

    computed: {
      total() {
        if (this.items.length) {
          let amounts = this.items.map(item => (item.pricedProduct || item.price))
          return amounts.reduce((prev, next) => parseInt(prev) + parseInt(next));
        }
        else if (this.item) {
          return this.item.price;
        }

        else return 0;
      },
      isNebula() {
        if (this.item) {
          return 1;
        }
        return this.items.filter(item => ( !! item.nebula)).length
      }
    },

    methods: {
      formatNebulaDate(days) {
        return moment().add(days, 'days').format('MMM DD')
      }
    }
  }
</script>
<style scoped lang="scss">
  .checkout-bag {
    @apply block py-6;

    .checkout-bag-item {
      @apply flex items-start py-2;
      .thumb {
        width: 88px;
        height: 88px;
        background: #fff;
        border-radius: 3px;
        object-fit: fill;
        object-position: center;
      }

      .meta {
        padding-left: 12px;

        .description {
          color: #788995;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
        }

        .pricing {
          font-style: italic;
          font-weight: 300;
          font-size: 14px;
          line-height: 24px;
          color: currentColor;
        }
      }
    }
  }

</style>
