<template>
  <div>
    <div class="block text-center">
      <div class="headline font-bold">
        Just one more step away from filling Your Closet
      </div>
    </div>
    <div class="m-12 block border border-transparent">
      <div class="form-control-group">
        <label for="signup-first-name">First Name</label>
        <input type="text" name="" id="signup-first-name" class="form-control" placeholder="First name" v-model="user.first_name">
      </div>
      <div class="form-control-group">
        <label for="signup-last-name">Last Name</label>
        <input type="text" name="" id="signup-last-name" class="form-control" placeholder="Last name" v-model="user.last_name">
      </div>
      <div class="form-control-group">
        <label for="signup-zip-code">Billing Zip Code</label>
        <input type="text" name="" id="signup-zip-code" class="form-control" placeholder="Billing zip code" v-model="user.zip"/>
      </div>
      <div v-if="user.plan > 0">
        <div class="form-control-group">
          <label for="signup-card-number">Card Number</label>
          <input type="text" name="" id="signup-card-number" class="form-control" placeholder="Card number" v-model="card.cardNumber"/>
        </div>
        <div class="form-control-group">
          <label for="signup-card-exp">Expiration Date (MM/YY)</label>
          <input type="text" maxlength="5" name="" id="signup-card-exp" class="form-control"
                 placeholder="MM/YY" v-model="card.cardExpiration"/>
        </div>
        <div class="form-control-group">
          <label for="signup-card-cvv">Security Code (CVV)</label>
          <input type="text" maxlength="3" name="" id="signup-card-cvv" class="form-control"
                 placeholder="Security Code (CVV)" v-model="card.cardCvv"/>
        </div>

      </div>
    </div>

    <div class="flex flex-col items-center px-16">
    <div class="text-sm text-center">
      By clicking the "Start Membership" button below, you agree to our
      <a class="text-blue-900 font-bold">Terms of Use</a>
      ,
      <a class="text-blue-900 font-bold">Privacy Statement</a>
      ,
      and that you are over 18. There is no need to cancel membership as there is no recurrent charges sent
      to your account. One time purchases Only.
    </div>
    <div class="form-control-group flex justify-end mt-6">
      <button type="button" @click="createAccount" class="btn btn-blue px-8 py-4">Start Membership</button>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'SignUpFormInfo',
    props: ['user'],
    data() {
      return {
        card: {
          cardNumber: '',
          cardExpiration: '',
          cardCvv: ''
        }
      }
    },
    methods: {
      createAccount() {
        this.loading = true;

        let request = {
          user: this.user,
          card: this.card,
        }
        this.$axios.$post('auth/register', request)
          .then(user => {
            this.loading = false;
            this.$store.commit('auth/SAVE_AUTH_USER', user)
            this.$notification.success('Account Created Successfully');
            if (!! this.$route.query.redirect) this.$router.push(this.$route.query.redirect);
            else this.$router.push('/');
          })
          .catch(error => {
            this.loading = false;
            console.log(error);
          });
      },
    }

  }
</script>

<style scoped>

</style>
