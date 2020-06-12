<template>
  <div class="flex border border-h-300 rounded-lg relative ">
    <div class="flex h-full items-center mx-auto w-full h-full relative">
      <div class="w-full block">
        <ais-search-box>
          <div slot-scope="{ currentRefinement, isSearchStalled, refine }">
            <div class="flex items-center">
              <div>
                <!--Brands-->
                <h-dropdown ref="brand-dropdown">
                  <template slot-scope="props">
                    <div class="flex px-1 items-center text-h-300 h-full border-r border-h-200 search-pad"
                         :title="`Search by brands`"
                         @click.stop="props.toggle">
                      <div class="hide-xs search-select pl-2">Brands</div>
                      <div class="leading-none">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-triangledownfill"></use>
                        </svg>
                      </div>
                    </div>
                  </template>
                  <!--Brand refinement list-->
                  <template v-slot:content>
                    <div class="bg-white rounded shadow-md  absolute mt-1 z-10 left-0 search-select-dropdown">
                      <ais-refinement-list attribute="brand">
                        <a class="block text-xs text-gray-800 hover:bg-h-100 relative p-2"
                           slot="item"
                           slot-scope="{ item, refine, createURL }"
                           :href="createURL(item.value)"
                           :style="{ fontWeight: item.isRefined ? 'bold' : '' }"
                           @click.prevent="refine(item.value)"
                        >
                          <ais-highlight attribute="item" :hit="item" class="text-xs"/>
                          ({{ item.count.toLocaleString() }})
                        </a>
                      </ais-refinement-list>
                    </div>
                  </template>
                </h-dropdown>
              </div>
              <!--Search box-->
              <div class="flex-auto">
                <input placeholder="Search for products, brands, colors"
                       type="search" :class="algoSearchInputClassNames"
                       v-model="searchKeyword"
                       @input="refine($event.currentTarget.value)" @keyup.enter="searchByEnterKey"
                >
              </div>
              <div class="relative h-8 w-8 block  py-1 px-2">
                <a class="cursor-pointer w-full h-full relative"
                   @click="toggleInstaSearch">
                  <img src="~assets/svg/camera.svg" class="icon object-contain object-center w-full h-full"
                       alt="">
                </a>
              </div>
            </div>
            <span v-show="searchKeyword.length" v-if="searchDropdown"
                  class="absolute bg-white w-full z-9 mt-1 py-8 rounded shadow-lg"
                  :hidden="!isSearchStalled">
                    <preloader/>
                  </span>
          </div>
        </ais-search-box>
        <ais-state-results class="search-result-panel" v-show="result" v-if="searchDropdown">
          <template slot-scope="{ query, hits }">
            <ais-hits v-if="query.length > 0" class="search-result" :class-names="algoSearchResultClassNames"
                      :escapeHTML="true">
              <ul slot-scope="{ items }">
                <li v-for="item in items" :key="item.id" class="search-result-item"
                    @click.stop="closeSearchResult">
                  <nuxt-link :to="{name: 'store-slug', params: {slug: item.slug}}">
                    <div class="search-result-item-inner">
                      <div class="search-result-thumb" v-if="item.images.length">
                        <img :src="item.images[0].url" alt="">
                      </div>
                      <div class="search-result-summary">
                        <div class="headline font-semibold ">{{item.name}}</div>
                        <div class="px-2">{{item.brand}}</div>
                      </div>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </ais-hits>
            <div v-if="!hits.length" class="shadow">
              <p style="word-wrap:break-word; padding:10px" class="py-8 block text-h-400 text-center bg-white">Nothing found for query <br> &quot;<em>{{query}}</em>&quot;
              </p>
            </div>
            <div class="search-result-overlay" @click.stop="closeSearchResult"></div>
          </template>
        </ais-state-results>


      </div>
    </div>
    <heylo-modal ref="insta-search-modal">
      <template slot-scope="props">
        <insta-search/>
      </template>
    </heylo-modal>
  </div>
</template>

<script>
  import { mapGetters }   from 'vuex'
  import { mapMutations } from 'vuex'

  export default {
    name: 'NavbarSearch',
    data() {
      return {
        filter: false,
        searchKeyword: '',
        showResult: true
      }
    },
    watch: {
      searchKeyword(present, past) {
        if (present.length && !this.showResult) {
          this.showResult = true
        }
      }
    },
    props: {
      searchDropdown: {
        default: true,
        required: false,
        type: Boolean
      }
    },
    computed: {
      result() {
        return this.searchKeyword.length && this.showResult
      },
      ...mapGetters({ client: 'search/searchClient' }),
      algoSearchInputClassNames() {
        return 'search-pad border-none px-2  w-full text-xs h-auto block whitespace-no-wrap focus:bg-transparent focus:shadow-none focus:border-none focus:outline-none'
      }, algoSearchResultClassNames() {
        return {
          'ais-Hits-list': ' p-2 block w-full',
          'ais-Hits-item': 'block text-xs text-gray-800 hover:bg-h-100 relative border-none shadow-none w-full'
        }
      }

    },
    methods: {
      closeSearchResult() {
        this.showResult = false
      },
      searchByEnterKey(e) {
        if (this.searchKeyword.length) {
          this.$store.commit('search/setSearchKeyword', this.searchKeyword)
          let query = this.getQueryParam()
          this.closeSearchResult()
          this.$router.push({ path: '/store', query: {query} })
        }
      },
      getQueryParam() {
        return this.$route.query
      },
      ...mapMutations({
          'setKeyword': 'search/setSearchKeyword'
        }),
      toggleInstaSearch() {
        this.$refs['insta-search-modal'].toggleState()
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-pad {
    @apply py-3;
  }

  .divider {
    position: relative;
    bottom: 0;
    display: block;
    border-bottom: 1px solid #ededed;
    width: 90%;
    left: 5%;
    right: 5%;
    height: 1px;
  }

  .search-result-panel {
    z-index: 10;
    @apply absolute w-full mt-2;
  }

  .search-result-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba(247, 247, 247, 0);
    left: 0;
    z-index: 7;
  }

  .search-result {
    background: #FFFFFF;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    z-index: 9;
    position: relative;
    left: 0;
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-height: 90vmin;
    overflow-y: auto;
    @apply block absolute mt-1  bg-white;

    .search-result-item {
      position: relative;
      cursor: pointer;
      @apply overflow-hidden ;
      &:hover {
        @apply bg-h-100;
      }

      .search-result-item-inner {
        @apply flex items-center w-full p-2;
      }

      .search-result-thumb {
        width: 211.05px;
        height: 150px;
        box-sizing: border-box;
        @apply relative overflow-hidden rounded-lg block p-2;
        img {
          mix-blend-mode: multiply;
          margin: 0 auto;
          @apply w-full relative block object-center object-contain h-full
          }
      }

      .search-result-summary {
        @apply relative overflow-hidden flex-auto p-1;
        @media handheld, (max-width: 530px) {
          div {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            font-size: .95em;
          }
        }
      }
    }

  }


  .search-select {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    @apply text-xs;


  }

  .search-select-dropdown {
    max-width: 200px;
    min-width: 150px;
  }

  @media(max-width: 455px) {
    .hide-xs {
      display: none;
    }
  }

</style>
