import Vue from 'vue'
/*External components*/
import VueTailwind from 'vue-tailwind'
import MyOwnTheme from '~/assets/MyOwnTheme'
import { Tabs, Tab } from 'vue-tabs-component'
import VueIconFont from 'vue-icon-font'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import VueCarousel from '@chenfengyuan/vue-carousel'
import VueTelInput from 'vue-tel-input'
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);
Vue.use(VueTelInput)
Vue.component('tabs', Tabs)
Vue.component('tab', Tab)
Vue.component('vue-carousel', VueCarousel)
Vue.use(VueTailwind, {
  theme: MyOwnTheme
})
Vue.use(VueIconFont)
