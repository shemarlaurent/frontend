<template>
  <div>
    <abyss-navbar>
      <template slot="aside-link">
        <div class="flex">
           <span class="btn btn-back flex items-center">
          Back</span>
        </div>
      </template>
    </abyss-navbar>

    <div class="container">
      <div class="flex justify-center lg:hidden md:hidden">
        <div class="headline-lg font-bold mb-4">You Won!!!</div>
      </div>
      <div class="flex flex-wrap mb-12">
        <div class="p-2 block flex-auto flex justify-center mb-6">
          <div class="lg-cover-img">
            <figure v-if="forum.product">
              <img :src="forum.product.images[0].url" alt="Product Image">
            </figure>
          </div>
        </div>
        <!--Aside-->
        <aside class="block flex-1 mb-6  mx-2 w-2/5">
          <div class="flex justify-center xs:hidden sm:hidden">
            <div class="headline-lg font-bold mb-4">You Won!!!</div>
          </div>
          <abyss-size-picker v-if="forum.product" :forum_id="forum.id" :product="forum.product"/>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'congrats',
    middleware: 'abyss',
    data() {
      return {
        forum: {}
      }
    },

    mounted() {
      this.getForum()
    },

    methods: {
      getForum() {
        this.$axios.$get(`abyss/forums/${this.$route.params.forum}`)
            .then(forum =>
                  {
                    this.forum = forum
                  })
            .catch(error =>
                   {
                     if (error.response.status === 404) {
                       this.$router.push('/abyss')
                     }
                   })
      }
    }
  }
</script>

