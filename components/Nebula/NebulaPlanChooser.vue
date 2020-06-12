<template>
  <div>
    <form @submit="handleSubmit" action="">
      <!--Polyfill-->
      <div class="block border border-transparent">
        <div class="flex flex-wrap w-full my-4">
          <div class="flex flex-1 my-3 flex-shrink-0 px-4">
            <div class="flex w-full items-center">
              <div class="decrease">
                <!--Decrease button-->
                <div class="chooser-nav" @click="increaseDays">
                  <svg class="h-icon" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 0L22.3253 15H0.674683L11.5 0Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <!--              Middle: Days-->
              <div class="block flex-auto ">
                <div class="flex-col flex items-center">
                  <div class="relative overflow-hidden block text-center w-full ">
                    <label for="day-choice" class="invisible absolute top-0 -mt-12">Days</label>
                    <input required="required" readonly type="text" name="day-choice" id="day-choice" v-model="day"
                           class="chooser-value"/>
                  </div>
                  <div class="uppercase py-2 w-5/6">
                    Days
                  </div>
                </div>
              </div>
              <!--Increase button-->
              <div class="increase">
                <div class="chooser-nav" @click="decreaseDays">
                  <svg class="h-icon" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 15L0.674683 0L22.3253 0L11.5 15Z" fill="black"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!--Cost per day-->
          <div class="flex flex-1 my-3 flex-shrink-0 px-4">
            <div class="flex w-full items-center">
              <div class="decrease">
                <div class="chooser-nav" @click.stop="increasePayment">
                  <svg class="h-icon" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 0L22.3253 15H0.674683L11.5 0Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <!--              Middle: Days-->
              <div class="block flex-auto">
                <div class="flex-col flex items-center justify-center ">
                  <div class="relative overflow-hidden block text-center">
                    <label for="payment-choice" class="invisible absolute top-0 -mt-12">Payment per day</label>
                    <span class="font-semibold">$</span>
                    <input required="required" readonly type="text" name="payment-choice" id="payment-choice"
                           v-model="payment"
                           class="chooser-value"/>
                  </div>
                  <div class="uppercase py-2 w-5/6">
                    A Day
                  </div>
                </div>
              </div>
              <!--Increase button-->
              <div class="increase">
                <div class="chooser-nav" @click.stop="decreasePayment">
                  <svg class="h-icon" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 15L0.674683 0L22.3253 0L11.5 15Z" fill="black"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Submit button-->
      <div class="block btn btn-nebula mt-12 boxed">
        <button type="submit" class="flex w-full justify-center items-center">
          <svg class="hicon mr-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20.086 2.06702L5.27032 8.50023V18.1501C5.27032 27.0761 11.5917 35.4232 20.086 37.4497C28.5804 35.4232 34.9017 27.0761 34.9017 18.1501V8.50023L20.086 2.06702ZM31.6097 18.1502C31.6097 25.4197 26.7041 32.1263 20.0864 34.1206C13.4687 32.1263 8.56308 25.4197 8.56308 18.1502V10.5911L20.0864 5.5893L31.6097 10.5911V18.1502ZM12.5302 19.099L10.2091 21.3667L16.7938 27.8L29.9634 14.9335L27.6422 12.6497L16.7938 23.2485L12.5302 19.099Z"
                  fill="white"/>
          </svg>
          Confirm Plan
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'NebulaPlanChooser',
    props: {
      cost: {
        default: 0,
        required: true,
        type: Number
      }
    },
    data() {
      return {
        day: 1,
        payment: this.cost,
        maxDays: 5,
        step: this.cost / 5,
        pattern: /\d+$/
      }
    },

    watch: {
      day(value) {
        this.payment = this.amountToPay
        this.$emit('day', value);
      },
    },

    computed: {
      amountToPay() {
        if (this.day > 0) {
          return this.cost / this.day
        }
        else  {
          return this.cost
        }
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        if (this.day && this.amountToPay) {
          this.$emit('plan', {
            days: this.day,
            installments: this.amountToPay
          });
        } else {
          console.log('You have selected an invalid payment plan')
        }
      },
      increaseDays() {
        if (this.day < this.maxDays) {
          this.day++
          this.payment = this.payment - this.step
        }
      },
      decreaseDays() {
        if (this.day > 1) {
          this.day--
          this.payment = this.payment + this.step
        }
      },
      increasePayment() {
        if(this.day > 1 && this.payment < this.cost) {
          this.day--
          this.payment = this.payment + this.step
        }
      },
      decreasePayment() {
        if (this.day > 1 && this.payment < this.cost){
          this.day --
          this.payment = this.payment - this.step
        }
      },
      validateDay() {
        /*Validates the day value*/
        return this.pattern.test(this.day)
      }, validatePayment() {
        /*Validates the payment value*/
        return this.pattern.test(this.day)
      }
    }
  }
</script>

<style scoped lang="scss">
  .chooser-value {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #000000;
    max-width: 70px;
    text-align: center;
    @apply mx-auto border-b py-2 border-h-300;
    &:invalid {
      @apply outline-none shadow-none;
    }
  }

  .chooser-nav {
    position: relative;
    width: 67.23px;
    height: 67.23px;
    border: 2.01702px solid #000000;
    box-sizing: border-box;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    @apply cursor-pointer flex justify-center items-center;
  }
</style>
