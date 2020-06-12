import Vue from 'vue'
import * as moment from 'moment'
Vue.mixin({
  methods: {
    format(currency) {
      let formatter = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 5, style: 'currency', currency: 'USD' })
      return formatter.format(currency)
    },

    formatDate(date) {
      return moment(date).format('DD MMMM-YYYY');
    },

    formatDateData(date) {
      return moment(date).format('DD MMM-YYYY');
    },

    addDates(date, days) {
      return moment(date).add(days, 'days').format('DD MMMM-YYYY')
    },

    imageTransform(string) {
      let url = string.split('upload');
      let transformation = "upload/h_300,w_300"
      url.splice(1, 0, transformation);
      url.join()
      return url.join('')

    }
  }
})
