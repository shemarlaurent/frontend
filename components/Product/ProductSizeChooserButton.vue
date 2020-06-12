<template>
  <div class="relative">
    <div class="btn shared px-8 py-3"  :class="{classes, highlight: shouldHighlight }">
      <heylo-popup>
        <template slot-scope="props">
          <span class="btn-title" @click.stop="props.pop()">Size: {{size}}</span>
          <div class="btn-value ">
            <span class="qty-value">{{format(price)}}</span>
          </div>
        </template>
        <template slot="popup-content" slot-scope="props">
          <div class="absolute mt-16 left-0 -ml-8">
            <single-product-size-chooser-popup :variations="variations" @close="props.pop()" @onPick="setPicked"/>
          </div>
        </template>
      </heylo-popup>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'SingleProductSizeChooserButton',
    props: {
      product: {
        default() {
          return {
            size: 'N/A',
            id: 1,
            price: ''
          }
        }
      },
      variations: {
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        size: this.product.size,
        price: this.product.price,
        shouldHighlight: false
      }
    },
    computed: {
      classes() {
        return {
          set: this.price.length
        }
      }
    },
    methods: {
      setPicked(payload) {
        this.price = payload.price
        this.size = payload.size

        if(this.size != null || this.size != undefined) {
          this.shouldHighlight = true;
        } else {
          this.shouldHighlight = false;
        }

        this.$emit('selected', payload)
      }
    }
  }
</script>

<style scoped lang="scss">

  .highlight {
    color: #0000FF !important;
    border: 1.5px solid #0000FF !important;
  }

  .sizing-btn {
    color: #c4c4c4;
    @apply flex whitespace-no-wrap m-2 border-h-200 border ;
    &.set {
      @apply border-blue-500 text-blue-500;
    }

    span {
      color: inherit;
      @apply pl-2 pr-4 py-4 font-normal cursor-pointer font-semibold;
      transition: all .35s ease-in;

      &.size-amount {
        min-width: 60px;
        @apply px-4;
      }

      &:not(:last-of-type) {
        @apply border-r border-gray-300;
      }
    }
  }
</style>
