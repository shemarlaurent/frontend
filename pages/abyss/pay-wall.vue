<template>
  <div>
    <abyss-navbar>
      <template slot="aside-link">
        <span @click="prevView" class="btn btn-back flex items-center" :class="btnClass">
          <svg class="icon mr-1">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
          Back</span>
      </template>
    </abyss-navbar>
    <transition name="fade" :css="true">
      <div class="container my-4">
        <form class="block w-full" @submit="handleSubmit">
          <div class=" mx-auto border border-transparent py-12">
            <keep-alive>
              <transition name="fade" :css="true">
                <component :abyss="abyss"  :errors="errors" :is="dynamicFormComponent" @onContinue="nextView" :auth="loggedIn"></component>
              </transition>
            </keep-alive>
            <div v-if="lastView" class="flex flex-col items-center px-16 ">
              <div class="text-sm text-center lg:w-2/5 md:w-3/6 mx-auto">
                By clicking the "Enter Forum" button below, you agree to our
                <nuxt-link :to="{name: 'terms'}" class="text-pink-300 font-bold">Terms of Use</nuxt-link>
                ,
                <nuxt-link :to="{name: 'privacy'}" class="text-pink-300 font-bold">Privacy Statement</nuxt-link>
                ,
                and that you are over 18. There is no need to cancel membership as there is no recurrent charges sent
                to your account. One time purchases Only.
              </div>
              <div class="form-control-group flex justify-end mt-6 w-full">
                <button type="submit" class="btn btn-abyss boxed px-8 py-4">Enter Forum</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </transition>
    <footer-section/>
  </div>
</template>

<script>
  import PaywallFormAuth         from '~/components/SignupForm/PaywallFormAuth'
  import PaywallFormInfo         from '~/components/SignupForm/PaywallFormInfo'

  export default {
    name: 'pay-wall',
    data() {
      return {
        loaded: false,
        loading: null,
        loggedIn: !! this.$cookies.get('helyos_abyss'),
        user: this.$cookies.get('helyos_abyss'),
        forms: ['Auth', 'Info'],
        index: 0,
        abyss: {},
        errors: {
          first_name: { error: false, text: 'This field is required'},
          last_name: { error: false, text: 'This field is required'},
          zip_code: { error: false, text: 'Zip Code is required'},
          card: { error: false, text: 'Enter a valid payment method'},
          card_expire: { error: false, text: 'This field is required'},
          cvv2: { error: false, text: 'This field is required'},
        }
      }
    },
    components: { PaywallFormInfo, PaywallFormAuth},
    computed: {
      btnClass() {
        return {
          'disabled': !this.index
        }
      },
      getIndex() {
        if (this.loggedIn) return 1;
        else return  0;
      },
      lastView() {
        return this.getIndex === (this.forms.length - 1)
      },
      currentForm() {
        return this.forms[this.getIndex]
      },
      dynamicFormComponent() {
        return `PaywallForm${this.currentForm}`
      }
    },
    methods: {
      nextView() {
        this.index++
        this.$emit('onNextView')
      },
      prevView() {
        if (this.index >= 1) {
          this.index--
          this.$emit('onBackView')
        }
      },
      handleSubmit(e) {
        e.preventDefault()
        this.loading = true;
        this.abyss.forum_id = this.$route.query.forum
        if (this.abyss.auth) {
          this.joinForum();
        } else {
          if (this.validate()) {
            this.$store.dispatch('auth/REGISTER', {
              type: 'abyss',
              request: this.abyss
            }).then(user => {
              this.loading = false;
              this.$notification.success('Account created successfully');
              this.$store.commit('auth/SAVE_AUTH_ABYSS', user);
              this.$router.push('/abyss');
            })
              .catch(error => {
                this.loading = false;
                if (error.response.status === 403) {
                  this.$notification.error('Payment not completed');
                }
              })
          }

        }
      },
      joinForum() {
        this.loading = true;
        this.$axios.$post('abyss/forums/join', this.abyss, {
          headers: {
            'Authorization': 'Bearer ' + this.user.token
          }
        }).then(response => {
          this.$notification.success('joined successfully');
          this.$router.push({ name: 'abyss-forum-feed', params: { forum: this.abyss.forum_id }})
        })
          .catch(error => {
            this.loading = false;
            if (error.response.status === 403) {
              this.$notification.error('Payment not completed');
            }
          })
      },
      validate() {
        if (this.abyss.first_name && this.abyss.last_name
          && this.abyss.zip_code && this.abyss.card && this.abyss.card_expire && this.abyss.cvv2) return true;
        else {
          if (!this.abyss.first_name) this.errors.first_name.error = true;
          if (!this.abyss.last_name) this.errors.last_name.error = true;
          if (!this.abyss.zip_code) this.errors.zip_code.error = true;
          if (!this.abyss.card) this.errors.card.error = true;
          if (!this.abyss.card_expire) this.errors.card_expire.error = true;
          if (!this.abyss.cvv2) this.errors.cvv2.error = true;
          return false;
        }
      }
    }
  }
</script>

<style lang="scss">
  .showdown {
    font-style: normal;
    font-weight: 900;
    font-size: 144px;
    line-height: 174px;
    margin: 15px auto;
    color: #000000;
  }

</style>
