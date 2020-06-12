import Vue from 'vue';
import algoliasearch from 'algoliasearch/lite';
window.algoliasearch = algoliasearch('RPYBR7B48O', 'cdbaea1377f6eaed9fae3760cc7f8997');

import InstantSearch from 'vue-instantsearch';
Vue.use(InstantSearch);
