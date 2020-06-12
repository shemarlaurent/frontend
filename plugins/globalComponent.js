import Vue                            from 'vue'
import Logo                           from '~/components/Logo/HeyloLogo'
import NavTopBar                      from '~/components/Navbar/NavTopBar'
import NavSideBar                     from '~/components/Navbar/NavSideBar'
import NavbarSearch                   from '~/components/Navbar/NavbarSearch'
import Navbar                         from '~/components/Navbar/Navbar'
import BannerSlider                   from '~/components/BannerSlider'
import ProductListing                 from '~/components/Product/ProductListing'
import UserLikesListing               from '~/components/Account/UserLikesListing'
import UserOrderListing               from '~/components/Account/UserOrderListing'
import NewsLetterSignup               from '~/components/NewsletterSignup'
import Footer                         from '~/components/Footer'
import Preloader                      from '~/components/Preloader'
import ProductLikeCard                from '~/components/Product/ProductLikeCard'
import ProductShowCard                from '~/components/Product/ProductShowCard'
import ProductGrid                    from '~/components/Product/ProductGrid'
import RelatedProduct                 from '~/components/Product/RelatedProduct'
import SingleProduct                  from '~/components/Product/Product'
import PaymentButton                  from '~/components/PaymentButton'
import SingleProductSideBar           from '~/components/Product/ProductSidebar'
import SingleProductSizeChooserButton from '~/components/Product/ProductSizeChooserButton'
import SingleProductSizeChooserGrid   from '~/components/Product/ProductSizeChooserGrid'
import SingleProductSizeChooserPopup  from '~/components/Product/ProductSizeChooserPopup'
import SingleProductPricePicker       from '~/components/Product/ProductPricePicker'
import SingleProductNebulaPay         from '~/components/Product/ProductNebulaPay'
import ProductFilter                  from '~/components/Product/ProductFilter'
import CheckoutWizard                 from '~/components/Checkout/CheckoutWizard'
import CheckoutCustomerInfo           from '~/components/Checkout/CheckoutCustomerInfo'
import CheckoutPaymentSelection       from '~/components/Checkout/CheckoutPaymentSelection'
import CheckoutShippingInfo           from '~/components/Checkout/CheckoutShippingInfo'
import CheckoutThankYou               from '~/components/Checkout/CheckoutThankYou'
import ShoppingBagInfo                from '~/components/ShoppingBagInfo'
import ComingSoon                     from '~/components/ComingSoon'
import InstaSearch                    from '~/components/InstaSearch'
import ContactForm                    from '~/components/ContactForm'
import FashionNewsSourceForm                    from '~/components/FashionNewsSourceForm'
import HeyloPlans                     from '~/components/HeyloPlans'
import WaitLoader                     from '~/components/WaitLoader'
import Dropdown                       from '~/components/Dropdown/Dropdown'
import TipPopup                       from '~/components/Account/TipPopup'
import HeyloProductOwnItem            from '~/components/HeyloProductOwnItem'
import HeyloForm                      from '~/components/HeyloForm'
import HeyloPopup                     from '~/components/HeyloPopup'
import HeyloModal                     from '~/components/HeyloModal'
import VueFormWizard                  from '~/components/VueFormWizard'
import HeyloSwiper                    from '~/components/HeyloSwiper'
import Accordion                      from '~/components/Accordion'
import FilterSection                  from '~/components/FilterSection'

/*Delphi*/
import DelphiSlider                   from '~/components/Delphi/DelphiSlider'
import DelphiRangeSlider              from '~/components/Delphi/DelphiRangeSlider'
import DelphiProductCard              from '~/components/Delphi/DelphiProductCard'

/*Abyss*/
import AbyssSizePicker                from '~/components/Abyss/SizePicker'
import AbyssNavbar                    from '~/components/Abyss/Abyss-Navbar'

/*News*/
import NewsNavbar                     from '~/components/News/News-Navbar'


/*External*/
import numeral                        from 'numeral'
import Header from '~/components/admin/Header'
import Sidebar from '~/components/admin/Sidebar'
import SellerHeader from '~/components/seller/SellerHeader'
import SellerSidebar from '~/components/seller/SellerSidebar'
import AffiliateHeader from '~/components/affiliate/AffiliateHeader'
import AffiliateSidebar from '~/components/affiliate/AffiliateSidebar'
import NoChance from '~/components/notices/NoChance'
import NoEntry from '~/components/notices/NoEntry'
import AllGone from '~/components/notices/AllGone'

Vue.use(HeyloSwiper)
Vue.use(VueFormWizard)
Vue.use(HeyloForm)

/*Global directives*/

/*Focusable*/
Vue.directive('focusable', {
//  When the bound element is inserted into the DOM
  inserted(el) {
    //Focus the element
    el.focus()
  }
})
let handleOuterClick
Vue.directive('alt', {
  bind(el, binding, vnode) {
    // Here's the click/touchstart handler
    handleOuterClick = (e) => {
      e.stopPropagation()
// This variable indicates if the clicked element is excluded
      if (!el.contains(e.target)) {
        // If the clicked element is outside the dialog
        // and not the button, then call the outside-click handler
        // from the same component this directive is used in
        binding.value()
      }
    }
    // Register click/touchstart event listeners on the whole page
    document.addEventListener(binding.arg, handleOuterClick)
    document.addEventListener('touchstart', handleOuterClick)
  },
  unbind() {
    // If the element that has v-closable is removed, then
    // unbind click/touchstart listeners from the whole page
    document.removeEventListener('click', handleOuterClick)
    document.removeEventListener('touchstart', handleOuterClick)
  }
})

/*MIXIN*/

var globalMixin = {
  filters: {
    lowercase(str) {
      return str.toLowerCase()
    },
    capitalize(value) {
      if (!value) return ''
      value.toString().toLowerCase()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    numerate(value) {
      return numeral(value).format('0,0.00')
    },
    slug(str) {
      return (str !== undefined) ? str.trim().replace(' ', '-').toLowerCase() : str
    }
  }
}

Vue.extend({
             mixins: [globalMixin]
           })
/*Personal Components*/
Vue.component('logo', Logo)
Vue.component('navbar-top', NavTopBar)
Vue.component('navbar-side', NavSideBar)
Vue.component('navbar-search', NavbarSearch)
Vue.component('navbar', Navbar)
Vue.component('banner-slider', BannerSlider)
Vue.component('product-listing', ProductListing)
Vue.component('tip-popup', TipPopup)
Vue.component('heylo-popup', HeyloPopup)
Vue.component('heylo-modal', HeyloModal)
Vue.component('heylo-form', HeyloForm)
Vue.component('heylo-plans', HeyloPlans)
Vue.component('product-like-card', ProductLikeCard)
Vue.component('product-show-card', ProductShowCard)
Vue.component('product-grid', ProductGrid)
Vue.component('related-product', RelatedProduct)
Vue.component('payment-button', PaymentButton)
Vue.component('insta-search', InstaSearch)
Vue.component('contact-form', ContactForm)
Vue.component('fashion-news-source-form', FashionNewsSourceForm)
Vue.component('h-dropdown', Dropdown)
Vue.component('accordion', Accordion)
Vue.component('filter-section', FilterSection)

Vue.component('user-likes-listing', UserLikesListing)
Vue.component('user-order-listing', UserOrderListing)
Vue.component('newsletter-signup', NewsLetterSignup)
Vue.component('footer-section', Footer)
Vue.component('preloader', Preloader)

Vue.component('coming-soon', ComingSoon)
Vue.component('single-product-nebula-pay', SingleProductNebulaPay)
Vue.component('single-product-price-picker', SingleProductPricePicker)
Vue.component('single-product-size-chooser-button', SingleProductSizeChooserButton)
Vue.component('single-product-size-chooser-grid', SingleProductSizeChooserGrid)
Vue.component('single-product-size-chooser-popup', SingleProductSizeChooserPopup)
Vue.component('single-product', SingleProduct)
Vue.component('single-product-sidebar', SingleProductSideBar)
Vue.component('product-filter', ProductFilter)
Vue.component('product-ownership', HeyloProductOwnItem)
Vue.component('wait-loader', WaitLoader)

/*Checkout Components*/
Vue.component('checkout-wizard', CheckoutWizard)
Vue.component('customer-info', CheckoutCustomerInfo)
Vue.component('payment-selection', CheckoutPaymentSelection)
Vue.component('shipping-info', CheckoutShippingInfo)
Vue.component('shopping-bag-info', ShoppingBagInfo)
Vue.component('thank-you', CheckoutThankYou)

/*Delphi Components*/
Vue.component('delphi-slider', DelphiSlider)
Vue.component('delphi-product', DelphiProductCard)
Vue.component('delphi-range-slider', DelphiRangeSlider)

/*Abyss*/
Vue.component('abyss-size-picker', AbyssSizePicker)
Vue.component('abyss-navbar', AbyssNavbar)
/*News*/
Vue.component('news-navbar', NewsNavbar)

/*
Dashboards
 */

Vue.component('seller-header', SellerHeader)
Vue.component('seller-sidebar', SellerSidebar)
Vue.component('admin-sidebar', Sidebar)
Vue.component('admin-header', Header)
Vue.component('affiliate-header', AffiliateHeader)
Vue.component('affiliate-sidebar', AffiliateSidebar)
// Vue.component('associate-header', AssociateHeader)
// Vue.component('associate-sidebar', AssociateSidebar)


Vue.component('no-chance', NoChance)
Vue.component('no-entry', NoEntry)
Vue.component('all-gone', AllGone)


