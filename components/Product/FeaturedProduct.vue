<template>
  <div class="">
    <div class="static block container">

      <!--Product information section-->
      <div class="lg:flex lg:flex-wrap mb-2 z-4">
        <div class=" w-full my-2 px-2 relative ">
          <div class="single-product-card w-full flex flex-col items-center ">
            <div class="headline-lg font-bold my-2 text-center relative mx-2">
              <div :title="product.name" class="ellipsis relative block mx-auto product-name" style="max-width: 400px">
                {{product.name}}
              </div>
            </div>
            <!--Product metadata-->
            <div class="product-meta relative">
              <span class="capitalize">{{product.brand}}</span>
              <span class="capitalize">{{product.condition}}</span>
              <span>SKU:{{product.sku.toUpperCase()}}</span>
            </div>
          </div>
          <div class="flex flex-col items-center relative">
            <!--Product Thumbnail-->
            <div class="product-thumb">
              <!--Product image slider-->
              <img :src="product.images[0].url" alt=""/>
            </div>
            <!--Product cta buttons-->
            <div class="flex flex-wrap w-full justify-center items-center">
              <product-quantity-size-button @quantity="setQuantity" :max="maxStock"/>
              <payment-button @onPay="toggleProductPaymentSidebar"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import ProductQuantitySizeButton from '~/components/Product/ProductQuantitySizeButton'
  import State from '../../store/auth/state';

  export default {
    name: 'FeaturedProduct',
    components: { ProductQuantitySizeButton },
    props: {
      product: {
        default() {
          return {}
        },
        required: true,
        type: Object
      }
    },
    data() {
      return {
        data: [],
        descSidebar: false,
        user: this.$cookies.get('helyos_user').token
      }
    },
    computed: {
      // ...mapState('auth/state',[
      //   'user',
      // ]),
      maxStock() {
        return this.product.variations.map(item => item.quantity).reduce((current, next) => parseInt(current) + parseInt(next));
      }
    },
    methods: {
      closeDescSidebar() {
        this.descSidebar = false
      },
      toggleDescSidebar() {
        this.descSidebar = !this.descSidebar
      },
      toggleProductPaymentSidebar() {
        if(this.user){
          this.$emit('onShowPaymentSidebar')
        }else{
          this.$router.push({name: 'auth-sign-up'})
        }
      },
      setQuantity(value) {
        this.emit('quantity', value)
      }

    }
  }
</script>


<style scoped lang="scss">
  .product-thumb {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 500px;
    z-index: auto;
    min-height: 260px;
    @apply mb-2 block justify-center object-cover object-center;
    img {
      position: relative;
      width: 80%;
      @apply mx-auto my-auto;
    }
  }

  .single-product-card {
    @apply mt-6 px-4;
    .headline {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 2;
      color: #000000;
      position: relative;
      @apply px-4;
    }

    .product-name {
       font-style: normal;
      font-weight: 600;
      font-size: 45px;
      line-height: 55px;
      color: #000000;
    }

    @apply w-full flex items-center flex-col;
    .product-meta {
      @apply text-center;
      span {
        font-style: normal;
        line-height: 24px;
        color: #000000;
        font-weight: 500;
        font-size: 24px;
        white-space: nowrap;
        text-overflow: ellipsis;

        &:not(:last-of-type):after {
          content: '|';
          width: 2px;
          @apply h-full mx-2;
        }
      }
    }
  }

  .featured-thumb {
    @apply relative w-auto  items-center w-full justify-center;

  }

  .desc-overlay {
    z-index: 10;
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.07);
    width: 100vw;
    height: 100vh;
    left: 0;
    transition: all .35s ease-in-out;
    @media (min-width: 768px) {
      @apply hidden;
    }
  }

  .desc-sidebar {

    @apply relative ;
    @media (max-width: 1024px) {
      position: fixed;
      background: white;
      width: 50%;
      top: 0;
      right: -1000%;
      height: 100vh;
      margin: 0;
      overflow-y: auto;
      -webkit-box-shadow: -7px 0 7px 7px #000;
      -moz-box-shadow: -7px 0 7px 7px #000;
      box-shadow: -7px 0 14px -7px #c4c4c4;
      transition: all .35s ease-in-out;
      z-index: 10;
    }
    @media (max-width: 769px) {
      width: 87%;
    }


    &.open {
      right: 0 !important;
      z-index: 200;
    }
  }
</style>
