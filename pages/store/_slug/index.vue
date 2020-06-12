<template>
  <div>
    <div class="my-4">
      <single-product @like="toggleLike" @picked="sizePicked" v-if="product" :product="product" :featured="featured"  @onShowPaymentSidebar="showSidebar"/>
      <!--Use the ID of the current product to get the related products-->
      <related-product :relatedProducts="relatedProducts" :id="1"/>
      <transition name="slide-from-right">
        <single-product-sidebar @purchase="checkOptions" @buyNow="buyNow" @addToCart="addToCart" :pyp="pyp" :price="parseInt(cartItem.price)"  ref="sidebar"/>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Product_id',
    head() {
      return {
        title: this.product  ? `Helyos | ${this.productName}` : 'Helyos product'
      }
    },
    data() {
      return {
        user:this.$store.state.auth.user || this.$cookies.get('helyos_user'),
        like: false,
        product: null,
        relatedProducts: [],
        featured: [],
        pyp: {},
        cartItem: {
          size: null,
          price: null
        }
      }
    },

    computed: {
      productName() {
        if (this.product) return this.product.name

        return ''
      }
    },
    created() {
      // this.$store.commit('cart/CLEAR_CART')
      this.getProduct();
      this.getFeaturedProducts();
      this.getPYPDetails();
    },
    methods: {
      showSidebar() {
        if (this.cartItem.size && this.cartItem.price) {
          if (this.user) {
            this.$refs['sidebar'].toggleShow()
          }
          else {
            this.$router.push({ name: 'auth-sign-in', query: { redirect: this.$route.fullPath}})
          }
        }
        else {
          this.$swal({
            type: 'warning',
            text: 'Please select a size to purchase'
          })
        }
      },
      getProduct() {
        this.$axios.$get('store/products/' + this.$route.params.slug)
          .then(response =>  {
            this.product = response.product;
            this.relatedProducts = response.related;
          })
          .catch(error => error)
      },

      getFeaturedProducts() {
        this.$axios.$get('store/products/featured')
          .then(result => this.featured = result)
          .catch(error => error);
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
      sizePicked(payload) {
        this.cartItem.size = payload.size
        this.cartItem.price = payload.price
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

      toggleLike(value) {
        if (this.user) {
          this.$axios.$post(`like`, {
            product_id: this.product.id,
            size: value.size
          }, {
            headers: {
              'Authorization': 'Bearer ' + this.user.token
            }
          })
            .then(response => {
              if (product.likes) {
                this.$notification.success('Product Liked')
                this.product.likes.push(response)
              }
              else {
                this.product.likes = [response]
              }
            })
            .catch(error => console.log(error.response.data));
        }
      }
    }
  }
</script>

<style scoped>

</style>
