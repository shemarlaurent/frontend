<template>
  <div class="relative">
    <div class="btn shared px-8" :class="[variant]">
      <span class="btn-title">Quantity</span>
      <div class="btn-value ">
        <span class="qty-value">{{qty}}</span>
        <div class="controls">
          <div class="flex flex-col">
            <span @click.stop="increase">&#x25B2;</span>
            <span @click.stop="decrease"> &#x25BC;</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ProductQuantitySizeButton',
    props: {
      variant: {
        default: 'blue',
        type: String,
        required: false
      },
      max: {
        default: 0,
        type: Number,
        required: true
      }
    },
    data() {
      return {
        qty: 1,
        min: 1
      }
    },
    methods: {
      increase() {
        if (this.max > this.qty) {
          this.qty++

        }
      },
      decrease() {
        if (this.qty > this.min) {
          this.qty--
          this.emit('quantity', this.qty)
        }
      }
    }
  }
</script>


<style scoped lang="scss">

  .qty-value {
    @apply flex-auto text-right px-1;
  }

  .controls {
    font-size: 14px;
    line-height: 1;

    span {
      @apply cursor-pointer px-1;
    }
  }
</style>
