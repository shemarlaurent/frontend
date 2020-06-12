<template>
  <div class="sizes flex flex-wrap cursor-pointer">
    <div class="size" v-for="variation in variations" @click="pickSize(variation)" :key="variation.id">
      <div class="size-meta">
        <div class="headline mb-1" :title="variation.name">{{ variation.name }}</div>
        <i v-if="showPrice" :title="variation.price" class="price -mt-4 mb-3">{{variation.price}}</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SingleProductSizeChooserGrid',
    props: {
      variations: {
        default() {
          return [];
        }
      },
      withPrice: {
        default: true,
        required: false
      }
    },
    data() {
      return {
        showPrice: this.withPrice || false,
        /*Put all the sizes here*/
        /*This is the payload for the size picked*/
        pick: {
          size: null,
          price: null
        }
      }
    },
    methods: {
      pickSize(payload) {
        this.setPrice(payload.price)
        this.setSize(payload.name)
        this.$emit('onPick', this.pick)
      },
      setPrice(value) {
        this.pick.price = value
      }, setSize(value) {
        this.pick.size = value
      }
    }
  }
</script>

<style scoped lang="scss">
  .sizes {
    .size {
      position: relative;
      display: block;

      .size-meta {
        @apply p-2 flex flex-col items-center w-full;
        .headline {
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 42px;
          color: #000000;
          width: 100%;
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          text-align: center;
        }

        .price {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 21px;
          color: #0000FF;
        }
      }

      &:not(:nth-of-type(4n)) {
        @apply border-r ;
      }

      &:hover {
        @apply bg-h-100;
      }

      @apply flex flex-col items-center w-1/4 p-1 border-b;
    }
  }
</style>
