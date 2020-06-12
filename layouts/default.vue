<template>
  <div class="">
    <ais-instant-search
      ref="instant-search"
      :search-client="client"
      :search-function="searchFunction"
      index-name="products"
    >
      <!-- <div v-if="bool"> -->
        <Animation />
      <!-- </div> -->
      <navbar />
      <nuxt />
    </ais-instant-search>
  </div>
</template>

<script>
import Animation from '../components/Animation/Animation'
import algoliasearch from 'algoliasearch/lite'
import { history as historyRouter } from 'instantsearch.js/es/lib/routers'
import { simple as simpleMapping } from 'instantsearch.js/es/lib/stateMappings'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default { 
  name: 'DefaultLayout',
  components:{
    Animation
  },
  data() {
    return {
      bool: true,
      routing: {
        router: historyRouter(),
        stateMapping: simpleMapping()
      },
      searchFunction(helper) {
        try {
          if (helper.state.query) {
            helper.search()
          } else {
            const page = helper.getPage() // Retrieve the current page
            helper.search() // this call resets the page
          }
        } catch (e) {
          console.log(e)
        }
      }
    }
  },
  computed: {
    ...mapGetters({ client: 'search/searchClient' })
  }
}
</script>
