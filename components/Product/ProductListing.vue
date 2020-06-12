<template>
  <div class="container">
    <div v-if="title">
      <h3 class="headline-lg my-6 mx-4">{{title}}</h3>
    </div>
    <div>
      <product-grid :items="products" name="product-listing">
        <product-show-card slot-scope="props" :product="props.item"/>
      </product-grid>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductListing',
    props: {
      title: {
        default: '',
        required: false,
        type: String
      },
      products: {
        type: [Object, Array],
        default() {
          return []
        },
        required: true
      }
    },
    mounted() {
      console.log(this.products);
    }
  }
</script>

