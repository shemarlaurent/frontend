import SwiperSlide from './components/SwiperSlide'
import Swiper      from './components/Swiper'

const HeyloSwiper = {
  install(Vue) {
    Vue.component('heylo-swiper', Swiper)
    Vue.component('swiper-slide', SwiperSlide)
  }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(HeyloSwiper)
}

export default HeyloSwiper
export {
  Swiper
}
