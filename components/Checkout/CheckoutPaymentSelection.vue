<template>
  <div>
    <div>
      <h3 class="headline my-10">Payment Selection</h3>
    </div>
    <div>
      <div class="cc-card">
        <div class="option">
          <div class="flex mb-4 items-center">
            <input type="radio" name="ship_method" class="mr-1" id="">
            <div class="headline w-full italic">Credit Card</div>
            <div class="flex justify-around">
              <img src="@/assets/images/credit-cards_amex.svg" class="ml-1" alt="">
              <img src="@/assets/images/credit-cards_visa.svg" class="ml-1" alt="">
              <img src="@/assets/images/credit-cards_mastercard.svg" class="ml-1" alt="">
            </div>
          </div>
          <span
            class="pl-6">Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.</span>
          <div>
            <div class="cc-form">
              <div class="cc-form-control">
                <label for="cc-card-number" class="cc-label block">Card Number</label>
                <div class="w-full cc-form-control-input-group">

                  <div class="flex items-center">
                    <div class="flex-auto">
                      <div class="cc-num" id="cc-card-number">
                        <input type="text" size="4" ref="ccOne" @keyup="checkNumber" tabindex="0" v-model="ccNumber.one"
                               maxlength="4" class="input-group-control plain-input"
                               placeholder="0000"/>
                        <input type="text" size="4" ref="ccTwo" @keyup="checkNumber" tabindex="1" v-model="ccNumber.two"
                               maxlength="4" class="input-group-control plain-input"
                               placeholder="0000"/>
                        <input type="text" size="4" ref="ccThree" @keyup="checkNumber" tabindex="2"
                               v-model="ccNumber.three" maxlength="4" class="input-group-control plain-input"
                               placeholder="0000"/>
                        <input type="text" size="4" ref="ccFour" tabindex="3" v-model="ccNumber.four" maxlength="4"
                               class="input-group-control plain-input"
                               placeholder="0000"/>
                      </div>
                      <span v-if="error" class="text-red-500">
                          invalid payment method
                        </span>
                    </div>
                    <div class="px-2">
                      <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="29" height="17" rx="1.5" stroke="#788995"/>
                        <rect x="6" y="5" width="5" height="3" rx="1" fill="#788995"/>
                        <path d="M6 12.5H24" stroke="#788995" stroke-linecap="square"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap w-full">
                <div class="cc-form-control w-full lg:flex-auto md:flex-auto">
                  <label for="cc-card-name" class="cc-label block">Name on card</label>
                  <input v-model="ccName" type="text" tabindex="4" id="cc-card-name"
                         class="w-full cc-form-control-input plain-input"
                         placeholder="Card name"/>
                </div>
                <div class="cc-form-control w-full lg:flex-1 md:flex-1">
                  <label for="cc-card-expiration" class="cc-label block">Expiry Date</label>
                  <input v-model="ccExpiry" type="text" tabindex="5" placeholder="MM/YY" id="cc-card-expiration"
                         class="w-full cc-form-control-input plain-input"/>
                </div>
                <div class="cc-form-control w-full lg:flex-1 md:flex-1">
                  <label for="cc-card-cvv" class="cc-label block">CVV Code</label>
                  <div class="w-full cc-form-control-input-group">
                    <div class="flex flex-no-wrap items-center">
                      <div class="flex-auto">
                        <input v-model="ccCVV" type="text" size="3" maxlength="3" tabindex="6" id="cc-card-cvv"
                               class="w-full input-group-control plain-input"
                               placeholder="Card cvv"/>
                      </div>
                      <div class="px-2">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M21.5 11C21.5 16.799 16.799 21.5 11 21.5C5.20101 21.5 0.5 16.799 0.5 11C0.5 5.20101 5.20101 0.5 11 0.5C16.799 0.5 21.5 5.20101 21.5 11Z"
                            stroke="#788995"/>
                          <path
                            d="M11.29 13.06C11.29 12.6773 11.3507 12.3413 11.472 12.052C11.6027 11.7627 11.7613 11.5153 11.948 11.31C12.1347 11.1047 12.3773 10.8713 12.676 10.61C13.0773 10.2553 13.3713 9.94733 13.558 9.686C13.754 9.41533 13.852 9.08867 13.852 8.706C13.852 8.19267 13.6513 7.782 13.25 7.474C12.8487 7.15667 12.298 6.998 11.598 6.998C10.4407 6.998 9.54933 7.376 8.924 8.132L8.182 7.572C8.97533 6.60133 10.1373 6.116 11.668 6.116C12.648 6.116 13.4273 6.33533 14.006 6.774C14.594 7.21267 14.888 7.80533 14.888 8.552C14.888 8.93467 14.8227 9.27533 14.692 9.574C14.5707 9.86333 14.4167 10.1107 14.23 10.316C14.0527 10.5213 13.8147 10.7593 13.516 11.03C13.1147 11.394 12.816 11.7207 12.62 12.01C12.424 12.29 12.326 12.64 12.326 13.06H11.29ZM11.808 16.07C11.6027 16.07 11.43 16 11.29 15.86C11.15 15.7107 11.08 15.538 11.08 15.342C11.08 15.1367 11.15 14.9687 11.29 14.838C11.43 14.698 11.6027 14.628 11.808 14.628C12.0227 14.628 12.2 14.698 12.34 14.838C12.48 14.9687 12.55 15.1367 12.55 15.342C12.55 15.538 12.4753 15.7107 12.326 15.86C12.186 16 12.0133 16.07 11.808 16.07Z"
                            fill="#788995"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckoutPaymentSelection',
    data() {
      return {
        ccNumber: {
          one: null,
          two: null,
          three: null,
          four: null
        },
        ccExpiry: null,
        ccCVV: null,
        ccName: null,
        error: false
      }
    },

    methods: {
      getPaymentDetails() {
        if (this.validate()) {
          let cardNumber = Object.values(this.ccNumber).toString();
          cardNumber.split(',').join('');

          this.$emit('payment-info', {
            cardNumber: cardNumber.split(',').join(''),
            cardExpiration: this.ccExpiry,
            cvv2: this.ccCVV
          });
        }
      },
      checkNumber(e) {
        console.log({ target: e.target })
        if (e.target.value.length >= e.target.getAttribute('size')) {
          e.target.nextElementSibling.focus()
        }
      },

      validate() {
        if (this.ccCVV && this.ccExpiry) return true;
        else {
          this.error = true;
          return false
        }
      }
    },
  }
</script>

<style scoped>

</style>
