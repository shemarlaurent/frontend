<template>
  <div class="sticky top-0">
    <div class="flex w-full relative">
      <div class="fixed z-3 left-0 top-0 mt-20 lg:hidden w-full" @click="reveal">
        <div class="w-auto relative flex-auto mx-auto">
          <div class="btn btn-blue rounded-r shadow">
            <div class="flex items-center">
              <svg class="icon mr-2">
                <use xlink:href="#icon-equalizer"/>
              </svg>
              Filters
            </div>
          </div>
        </div>
      </div>
      <aside class="filter-sidebar " :class="showable">
        <div class="filter-overlay" @click.stop="hide"></div>

        <div id="product-filter" class="bg-white relative">
          <div class="text-sm">
            <div class="filter-section">
              <div class="section-head">
                <div class="flex justify-between ">
                  <div class="flex items-center">
                    <svg class="icon mr-2">
                      <use xlink:href="#icon-equalizer"/>
                    </svg>
                    Filters
                  </div>
                  <ais-clear-refinements>
                    <div slot-scope="{ canRefine, refine, createURL }">
                      <a class="btn clear" :href="createURL()" @click.prevent="refine" :disabled="!canRefine">
                        Clear all</a>
                    </div>
                  </ais-clear-refinements>
                </div>
              </div>
            </div>
            <div>

            </div>
            <div class="filter-section">
              <div class="capitalize bg-black py-2 px-4 rounded-full cursor-pointer text-white my-2"
                   @click.stop="toggleInStock">
                <div class="flex justify-between items-center">
                  <span>In Stock</span>
                  <svg class="h-icon m-2">
                    <transition name="fade">
                      <use xlink:href="#icon-check" v-if="inStock"/>
                      <use xlink:href="#icon-close" v-else/>
                    </transition>
                  </svg>
                </div>
              </div>
            </div>

            <div class="block">
              <!--Filter Brand section-->
              <filter-section title="Brands">
                <template slot="filter-section-content" slot-scope="props">
                  <ais-panel>
                    <template slot="default" slot-scope="{ hasRefinements }">
                      <span v-if="!hasRefinements">(no results)</span>
                      <ais-refinement-list
                        attribute="brand"
                        searchable
                        show-more
                        :limit="5"
                      >
                        <div
                          slot-scope="{
                      items,
                      isShowingMore,
                      isFromSearch,
                      canToggleShowMore,
                      refine,
                      createURL,
                      toggleShowMore,
                      searchForItems
                    }"
                        >
                          <div
                            class="flex items-center border border-gray-200 w-full rounded relative overflow-hidden">
                            <div class="flex-1 flex-shrink-0 w-auto  block h-full p-0">
                              <svg class="icon mx-2" aria-hidden="true">
                                <use xlink:type="simple" xlink:href="#icon-search"/>
                              </svg>
                            </div>
                            <input @input="searchForItems($event.currentTarget.value)" type="search"
                                   class=" block flex-auto p-2" name="" id="filter-brand-search"
                                   placeholder="search brand">

                            <label for="filter-brand-search" class="invisible w-0 h-0 absolute">Search brand</label>
                          </div>
                          <div class="block mt-2">
                            <div class="px-2" v-if="isFromSearch && !items.length">No results.</div>
                            <div class="filter-checkboxes">
                              <label v-for="brand in items"
                                     :key="brand.value">
                                <input type="checkbox" :checked="brand.isRefined" name="brand"
                                       @change="refine(brand.value)"
                                       @click="brand.isRefined ? props.add(brand.value) : props.remove(brand.value)">
                                <span>
                                  <ais-highlight attribute="item" :hit="brand" class="text-xs"/>
                                  <span class="list-count-badge">
                                    {{ brand.count.toLocaleString() }}
                                  </span>
                                </span>
                              </label>
                            </div>
                            <div class="flex">
                              <button class="more-less"
                                      @click="toggleShowMore"
                                      :disabled="!canToggleShowMore"
                              >
                                {{ !isShowingMore ? 'Show more' : 'Show less'}}
                              </button>
                            </div>

                          </div>
                        </div>
                      </ais-refinement-list>
                    </template>
                  </ais-panel>

                </template>
              </filter-section>

              <!--Filter sub category section-->
              <filter-section title="Sizes">
                <template slot="filter-section-content" slot-scope="props">
                  <div class="filter-checkboxes">

                    <ais-refinement-list show-more :limit="5" attribute="variations.name" :class-names="refineClass"
                                         searchable>
                      <div slot-scope="{
                      items,
                      isShowingMore,
                      isFromSearch,
                      canToggleShowMore,
                      refine,
                      createURL,
                      toggleShowMore,
                      searchForItems
                    }">
                        <div class="flex items-center border border-gray-200 w-full rounded relative overflow-hidden">
                          <div class="flex-1 flex-shrink-0 w-auto  block h-full p-0">
                            <svg class="icon mx-2" aria-hidden="true">
                              <use xlink:type="simple" xlink:href="#icon-search"/>
                            </svg>
                          </div>
                          <input @input="searchForItems($event.currentTarget.value)" type="search"
                                 class=" block flex-auto p-2" name="" id="filter-category-search"
                                 placeholder="search Size">
                          <label for="filter-category-search" class="invisible w-0 h-0 absolute">Search
                            Size</label>
                        </div>
                        <div class="block mt-2">
                          <div class="px-2" v-if="isFromSearch && !items.length">No results.</div>
                          <div class="filter-checkboxes">
                            <label v-for="size in items"
                                   >
                              <input type="checkbox" :checked="size.isRefined" name="category"
                                     @change="refine(size.value)"
                                     @click="size.isRefined ? props.add(size.value) : props.remove(size.value)">
                              <span>
                                <ais-highlight attribute="item" :hit="size" class="text-xs"/>
                                <span class="list-count-badge">
<!--                                  {{ size }}-->
                                </span>
                              </span>
                            </label>
                          </div>
                          <div class="flex">
                            <button class="more-less"
                                    @click="toggleShowMore"
                                    :disabled="!canToggleShowMore"
                            >
                              {{ !isShowingMore ? 'Show more' : 'Show less'}}
                            </button>
                          </div>

                        </div>
                      </div>
                    </ais-refinement-list>
                  </div>

                </template>
              </filter-section>
              <!--Filter Prices section-->
              <!--                <filter-section title="Prices">-->
              <!--                  <template slot="filter-section-content" slot-scope="props">-->
              <!--                    <div class="block relative overflow-hidden w-full">-->
              <!--                      <div class="flex flex-wrap w-full items-center">-->
              <!--                        <div class="form-control-group w-1/2 px-1">-->
              <!--                          <label for="filter-price-min">Min.</label>-->
              <!--                          <div class="flex items-center form-control">-->
              <!--                            <input type="text" v-model="filters.prices.min" placeholder="Any" id="filter-price-min"-->
              <!--                                   class="w-full plain-input"/>-->
              <!--                            <span class="text-h-300">$</span>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        <div class="form-control-group w-1/2 px-1">-->
              <!--                          <label for="filter-price-max">Max.</label>-->
              <!--                          <div class="flex items-center form-control">-->
              <!--                            <input type="text" v-model="filters.prices.max" placeholder="Any" id="filter-price-max"-->
              <!--                                   class="w-full plain-input">-->
              <!--                            <span class="text-h-300">$</span>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                    </div>-->
              <!--                  </template>-->
              <!--                </filter-section>-->
            </div>
          </div>
        </div>

      </aside>
      <div class="p-2 relative w-full h-full">

        <ais-state-results class="search-result-panel">
          <template slot-scope="{ query, hits }">
            <ais-hits v-if="hits.length">
              <ul slot-scope="{ items }">
                <slot v-bind="items">
                  <li v-for="(item, index) in items" :key="item.id">
                    {{ index }} - {{ item.name }}
                  </li>
                </slot>
              </ul>
            </ais-hits>
            <div v-else>
              <p class="h-screen w-full text-h-400 flex items-center justify-center">
                Nothing found for query &quot;<em>{{query}}</em>&quot;
              </p>
            </div>
          </template>
        </ais-state-results>
        <ais-pagination>
          <ul class="flex w-full justify-center flex-wrap"
              slot-scope="{
      currentRefinement,
      nbPages,
      pages,
      isFirstPage,
      isLastPage,
      refine,
      createURL
    }"
          >
            <li class="page-btn" v-if="!isFirstPage">
              <a :href="createURL(0)" @click.prevent="refine(0)">
                ‹‹ First
              </a>
            </li>
            <li class="page-btn" v-if="!isFirstPage">
              <a
                :href="createURL(currentRefinement - 1)"
                @click.prevent="refine(currentRefinement - 1)"
              >
                ‹ Previous
              </a>
            </li>
            <li class="page-btn" v-for="page in pages" :key="page">
              <a
                :href="createURL(page)"
                :class=" page === currentRefinement ? 'font-semibold bg-blue-500 text-white' : '' "
                @click.prevent="refine(page)"
              >
                {{ page + 1 }}
              </a>
            </li>
            <li class="page-btn" v-if="!isLastPage">
              <a title="next page"
                :href="createURL(currentRefinement + 1)"
                @click.prevent="refine(currentRefinement + 1)"
              >
                Next ›
              </a>
            </li>
            <li class="page-btn" v-if="!isLastPage">
              <a :href="createURL(nbPages)" @click.prevent="refine(nbPages)" title="last page">
                Last ››
              </a>
            </li>
          </ul>
        </ais-pagination>

      </div>
    </div>
    <!--</ais-instant-search>-->
  </div>
</template>

<script>
  import algoliasearch                from 'algoliasearch/lite'
  import 'instantsearch.css/themes/algolia-min.css'
  import { mapMutations }             from 'vuex'
  import { mapGetters }               from 'vuex'
  import { history as historyRouter } from 'instantsearch.js/es/lib/routers'
  import { simple as simpleMapping }  from 'instantsearch.js/es/lib/stateMappings'

  export default {
    name: 'ProductFilter',
    data() {
      return {
        show: false,
        inStock: true,
        routing: {
          router: historyRouter(),
          stateMapping: simpleMapping()
        },
        searchFunction(helper) {
          if (helper.state.query) {
            helper.search()
          } else {
            const page = helper.getPage() // Retrieve the current page
            helper.setQuery(this.keyword).search()// this call resets the page
          }
        }
      }
    },
    computed: {
      ...mapGetters({
                      client: 'filter/searchClient',
                      keyword: 'filter/getSearchKeyword'
                    }),
      refineClass() {
        return {
          'ais-RefinementList-checkbox': '',
          'ais-RefinementList-showMore': 'more-less',
          'ais-RefinementList-labelText': 'text-xs',
          'ais-Highlight': 'text-xs'
        }
      },
      paginationClass() {
        return {
          'ais-Pagination': '',
          'ais-Pagination-list': 'MyCustomPaginationList'
        }
      },
      showable() {
        return {
          'open': this.show
        }
      }
    },
    methods: {
      searchChanged() {
        console.log(this.keyword)
      }, reveal() {
        this.show = true
      }, hide() {
        this.show = false
      },
      clearAll() {
        this.$emit('on-clearall')
      },
      toggleInStock() {
        this.inStock = !this.inStock
      },
      ...mapMutations({
                        'setKeyword': 'setSearchKeyword'
                      })
    }
  }
</script>

<style lang="scss">
  .filter-sidebar {
    position: relative;
    min-width: 250px;
    max-width: 300px;
    z-index: 2;


    @media (max-width: 1024px) {
      position: fixed;
      top: 0;
      left: -100%;
      height: 100vh;
      width: 0;
      z-index: 6;
      background: #ffffff;
      #product-filter {
        transition: all .35s ease-in-out;
        left: -100%;
        @apply h-screen overflow-y-auto;
      }
      &.open {
        left: 0;
        width: auto;

        #product-filter {
          left: 0;
        }

        .filter-overlay {
          position: absolute;
          width: 100vw;
          top: 0;
          left: 100%;
          background: rgba(0, 0, 0, 0.01);
          height: 100%;
          z-index: 1;
        }
      }

    }
  }

  #product-filter {
    @apply rounded py-6;
    -webkit-box-shadow: 2px 0 7px -7px #000;
    -moz-box-shadow: 2px 0 7px -7px #000;
    box-shadow: 14px 0 14px -14px #ededed;
    z-index: 10;
  }

  .count-badge {
    @apply px-2 bg-blue-900 rounded mx-2 text-white;
  }

  .filter-section {
    @apply px-4 py-4 block  border-b border-gray-200;
    &:last-of-type {
      @apply border-b border-none;
    }

    .section-head {
      @apply font-medium text-h-400;
    }

    .section-body {
      @apply pt-6;

      .filter-range {
        @apply w-full my-2;
      }

    }
  }

  .more-less {
    &, &:hover,
    &:focus {
      color: #c4c4c4;
      @apply lowercase cursor-pointer font-medium px-2 bg-transparent text-xs;
    }
  }

  .filter-checkboxes {
    @apply block px-2 my-3 text-xs text-h-300;
    label {
      display: block;
      line-height: 1.2;
      @apply text-xs flex items-start mb-3 text-h-500 ;
      input {
        @apply mr-1 flex-grow-0;
      }

      > span {
        flex: auto;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        width: auto;

      }
    }
  }

  .page-btn {
    @apply p-1 my-2;
    a {
      border: 1px solid #00f;
      background: #00f;
      @apply  py-2 px-4 rounded text-white;
    }
  }
</style>
