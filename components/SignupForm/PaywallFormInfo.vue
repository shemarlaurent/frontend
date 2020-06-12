<template>
  <div>
  <div class="lg:w-2/5 md:w-3/6 mx-auto">
    <div class="block text-center">
      <div class="headline font-bold">
        Just one more step away from filling Your Closet
      </div>

    </div>
    <div class="m-6 block border border-transparent">
      <div class="flex justify-center" v-if="auth">
        <label for="user-info-checkbox" class="user-info-card" v-if="user">
          <input type="radio" @change="changeMethod" id="user-info-checkbox">
          <span class="ml-4">{{ firstName }} , {{ lastName }} **** **** {{ user.last_four }}</span>
        </label>
      </div>
      <div v-if="!useAuth">
        <div class="form-control-group">
          <label for="signup-first-name">First Name</label>
          <input type="text" name="" id="signup-first-name" class="form-control" placeholder="First name" v-model="abyss.first_name">
          <span v-if="errors.first_name.error" class="text-red-400 text-sm font-semibold">
            {{ errors.first_name.text }}
          </span>
        </div>
        <div class="form-control-group">
          <label for="signup-last-name">Last Name</label>
          <input type="text" name="" id="signup-last-name" class="form-control" placeholder="Last name" v-model="abyss.last_name">
          <span v-if="errors.last_name.error" class="text-red-400 text-sm font-semibold">
            {{ errors.last_name.text }}
          </span>
        </div>
        <div class="form-control-group">
          <label for="signup-zip-code">Billing Zip Code</label>
          <input type="text" name="" id="signup-zip-code" class="form-control" placeholder="Billing zip code" v-model="abyss.zip_code"/>
          <span v-if="errors.zip_code.error" class="text-red-400 text-sm font-semibold">
            {{ errors.zip_code.text }}
          </span>
        </div>
        <div class="form-control-group">
          <label for="signup-card-number">Card Number</label>
          <input type="text" name="" id="signup-card-number" class="form-control" placeholder="Card number" v-model="abyss.card"/>
          <span v-if="errors.card.error" class="text-red-400 text-sm font-semibold">
            {{ errors.card.text }}
          </span>
        </div>
        <div class="form-control-group">
          <label for="signup-expiration-data">Expiration Date (MM/YY)</label>
          <input type="text" name="" maxlength="5" id="signup-expiration-data" class="form-control"
                 placeholder="Expiration Date (MM/YY)"  v-model="abyss.card_expire"/>
          <span v-if="errors.card_expire.error" class="text-red-400 text-sm font-semibold">
            {{ errors.card_expire.text }}
        </span>
        </div>
        <div class="form-control-group">
          <label for="signup-card-cvv">Security Code (CVV)</label>
          <input type="text" maxlength="3" name="" id="signup-card-cvv" class="form-control"
                 placeholder="Security Code (CVV)" v-model="abyss.cvv2"/>
          <span v-if="errors.cvv2.error" class="text-red-400 text-sm font-semibold">
            {{ errors.cvv2.text }}
          </span>
        </div>
      </div>

    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'PaywallFormInfo',
    props: {
      /*Used to know if the user is logged in*/
      auth: {
        default: false,
        required: true,
        type: Boolean
      },
      abyss: {
        default() {
          return {}
        }
      },
      errors: {
        deafult() {
          return {}
        }
      }
    },
    data() {
      return {
        user: this.$cookies.get('helyos_abyss'),
        useAuth: false
      }
    },
    computed: {
      firstName() {
        if (this.user) return this.user.name.split(' ')[0]
        else return  null;
      },

      lastName() {
        if (this.user) return this.user.name.split(' ')[1]
        else return  null;
      }
    },


    methods: {
      changeMethod(e) {
        this.useAuth = true;
        this.abyss.auth = true;
      }
    }
  }
</script>

<style scoped lang="scss">
  .user-info-card {
    position: relative;
    border: 1px solid #429DFF;
    box-sizing: border-box;
    @apply inline-flex py-4 px-6 justify-center
    }
</style>
