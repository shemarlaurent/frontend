import Form from './components/HeyloForm.vue'
import FormInput from './components/HeyloFormInput.vue'

const HeyloForm = {
  install(Vue) {
    Vue.component('heylo-form', Form)
    Vue.component('heylo-form-input', FormInput)
  }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(HeyloForm)
}

export default HeyloForm
export {
  Form,
  FormInput
}
