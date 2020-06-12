<template>
  <ais-instant-search ref="instant-search"
                      :search-client="client" :search-function="searchFunction" index-name="products"
  >
        <Animation />
    <navbar/>
    <div class="mt-6">
      <div class="container">
        <div class="headline-lg font-bold px-2">
          <div class="inline-block relative">
            Delphi
            <nuxt-link :to="{name: 'delphi'}" class="absolute bottom-0 right-0 -mr-6">
              <svg style="margin-bottom:3px;" width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 7.46308L6.37937 0H26V18.7806L19.7639 26H0V7.46308Z"
                      fill="#0000FF"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M6.01855 10.2672L9.44451 6.25928H19.9815V16.3452L16.6325 20.2222H6.01855V10.2672Z"
                      fill="white"/>
                <circle cx="13" cy="13" r="5" fill="#0000FF"/>
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
      <nuxt/>
    </div>
  </ais-instant-search>
</template>

<script>
  import Animation from '../components/Animation/Animation'
  import algoliasearch                from 'algoliasearch/lite'
  import { history as historyRouter } from 'instantsearch.js/es/lib/routers'
  import { simple as simpleMapping }  from 'instantsearch.js/es/lib/stateMappings'
  import { mapGetters }               from 'vuex'
  import { mapMutations }             from 'vuex'

  export default {
    name: 'delphi',
    data() {
      return {
        bool:true,
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
              helper.search()// this call resets the page
            }
          } catch(e) {
            console.log(e);
          }
          
        }
      }
    },
    components:{
      Animation
    },
    computed: {
      ...mapGetters({ client: 'search/searchClient' })
    }
  }
</script>

<style scoped>

</style>
