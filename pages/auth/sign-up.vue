<template>
  <div class="container">
    <transition name="fade" :css="true">
      <template v-if="!form">
        <heylo-plans @onPlanChoose="showForm"/>
      </template>
      <template v-else>
        <div class="container my-8 border border-transparent">
          <div class="flex justify-end w-full p-4 cursor-pointer" @click="prevView">Back</div>
          <form class="block w-full">
            <div class="lg:w-2/5 md:w-3/6 mx-auto border border-transparent py-12">
              <keep-alive>
                <transition name="fade" :css="true">
                  <component :is="dynamicFormComponent" @onContinue="nextView" :user="user"></component>
                </transition>
              </keep-alive>
            </div>
          </form>
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
  import SignUpFormAuth from '../../components/forms/auth/SignUpFormAuth'
  import SignUpFormInfo from '../../components/forms/auth/SignUpFormInfo'
  export default {
    // middleware: 'user-guest',
    components: { SignUpFormInfo, SignUpFormAuth },
    data() {
      return {
        loaded: false,
        loading: null,
        form: false,
        plan: null,
        user: {},
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
      nextView(payload) {
        this.user.email = payload.email;
        this.user.password = payload.password;
        this.user.token = payload.token;
        this.user.plan = this.plan.plan[0].id;

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
      showForm(plan) {
        this.form = true
        this.plan = plan;
      },
      hideForm() {
        this.form = false
      }
    }
  }
</script>
