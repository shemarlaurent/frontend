<template>
  <div class="container">
    <transition name="fade" :css="true">
      <template v-if="!form">
        <heylo-plans @onPlanChoose="showForm"/>
      </template>
      <template v-else>
        <div class="container my-8 border border-transparent">
          <div class="flex justify-end w-full p-4 cursor-pointer" @click="prevView">Back</div>
          <form class="block w-full" @submit="handleSubmit">
            <div class="lg:w-2/5 md:w-3/6 mx-auto border border-transparent py-12">
              <keep-alive>
                <transition name="fade" :css="true">
                  <component :is="dynamicFormComponent" @onContinue="nextView"></component>
                </transition>
              </keep-alive>
              <div v-if="lastView" class="flex flex-col items-center px-16">
                <div class="text-sm text-center">
                  By clicking the "Start Membership" button below, you agree to our
                  <nuxt-link :to="{name: 'terms'}" class="text-blue-900 font-bold">Terms of Use</nuxt-link>
                  ,
                  <nuxt-link :to="{name: 'privacy'}" class="text-blue-900 font-bold">Privacy Statement</nuxt-link>
                  , and that you are over 18. There is no need to cancel membership as there is no recurrent charges sent
                  to your account. One time purchases Only.
                </div>
                <div class="form-control-group flex justify-end mt-6">
                  <button type="submit" class="btn btn-blue px-8 py-4">Start Membership</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
  import SignUpFormAuth from '~/components/SignupForm/SignUpFormAuth'
  import SignUpFormInfo from '~/components/SignupForm/SignUpFormInfo'

  export default {
    components: { SignUpFormInfo, SignUpFormAuth },
    layout: 'auth',
    name: 'sign-up-user',
    data() {
      return {
        loaded: false,
        loading: null,
        form: false,
        forms: ['Auth', 'Info'],
        index: 0
      }
    },
    computed: {
      lastView() {
        return this.index === (this.forms.length - 1)
      },
      currentForm() {
        return this.forms[this.index]
      },
      dynamicFormComponent() {
        return `SignUpForm${this.currentForm}`
      }
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      nextView() {
        this.index++
      },
      prevView() {
        if (!this.index) {
          this.hideForm()
        } else
          this.index--
      },
      startLoading() {
        this.loading = setTimeout(this.doneLoading, 1000)
      },
      doneLoading() {
        console.log('clear')
        clearTimeout(this.loading)
        this.loaded = true
      },
      handleSubmit(e) {
        e.preventDefault()
        alert('Attempting sign up')
      },
      showForm() {
        this.form = true
      },
      hideForm() {
        this.form = false
      }
    }
  }
</script>
