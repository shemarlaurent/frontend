<template>
  <div>
    <div class="my-4">
      <featured-product v-if="product" @onShowPaymentSidebar="showSidebar" :product="product"/>
      <!--Use the ID of the current product to get the related products-->
      <related-product :relatedProducts="relatedProducts" :id="1"/>
      <transition name="slide-from-right">
        <single-product-sidebar @purchase="checkOptions" @buyNow="buyNow" @addToCart="addToCart" :pyp="pyp" :price="parseInt(cartItem.price)"  ref="sidebar"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import FeaturedProduct from '~/components/Product/FeaturedProduct'

  export default {
    name: 'Featured',
    head() {
      return {
        title: this.product != null ? `Helyos | ${this.productName}` : 'Helyos product'
      }
    },
    components: { FeaturedProduct },
    data() {
      return {
        ready: false,
        product: null,
        relatedProducts: [],
        pyp: {},
        cartItem: {
          size: null,
          price: null
        },
        items: []
      }
    },
    computed: {
      productName() {
        if (this.product) return this.product.name

        return ''
      }
    },
    created() {
      this.getProduct();
      this.getPYPDetails();

    },
    methods: {
      isReady() {
        this.ready = true
        clearTimeout(this.timeout)
      },
      showSidebar() {
        this.$refs['sidebar'].toggleShow()
      },
      getProduct() {
        this.$axios.$get('store/products/' + this.$route.params.slug)
          .then(response =>  {
            this.product = response.product;
            this.relatedProducts = response.related;
            this.getVariation(this.product);
          })
          .catch(error => error)
      },

      getPYPDetails() {
        if (this.user) {
          this.$axios.$get('pyp/details')
            .then(details => {
              this.pyp.dailySales = details.dailySales;
              this.pyp.userUsage = details.userUsage
            })
        }
      },

      checkOptions(options) {
        if (options.pricedProduct) {
          this.cartItem.pricedProduct = options.pricedProduct
        } else if (options.nebula) {
          this.cartItem.nebula = options.nebula
        }
        this.addToCart();

      },

      addToCart() {
        this.cartItem.product = this.product;
        this.cartItem.uid = Math.floor(Math.random() * 10000);
        this.$store.commit('cart/ADD_TO_CART', this.cartItem);
        this.$notification.success('added to cart');
        if (this.cartItem.nebula) this.checkout(this.cartItem.uid);

        this.showSidebar();
      },

      getVariation(product) {
        this.cartItem = {}
        let variation =
          product.variations[
            Math.floor(Math.random() * product.variations.length)
            ]
        this.cartItem.size = variation.size
        this.cartItem.price = variation.price
      },
      checkout(id) {
        if (this.cartItem.nebula) {
          this.$router.push({ name: 'checkout-id-nebula', params: { id } })

        } else {
          this.$router.push({ name: "checkout-id", params: { id } })

        }

      },
      buyNow(options) {
        this.checkOptions(options);
        this.$router.push('/checkout')
      },
    }
  }
</script>

<style scoped>

</style>
