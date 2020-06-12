<template>
  <div class="container font-sans">
    <div class="headline">
      Likes
    </div>
    <div class="result-hint">
      {{likes.length }} current likes
    </div>
    <div>
      <product-grid name="liked-product-listing" :items="likes">
        <product-like-card slot-scope="props" :like="props.item"/>
        <div slot="nothing" class="py-6 text-h-500">
          Nothing Liked!
        </div>
      </product-grid>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductLikesListing',
    props: {
      title: {
        default: 'Product'
      },
      likes: {
        default: []
      }
    },
    data(){
     return {
       products: []
     }
    }
  }
</script>

