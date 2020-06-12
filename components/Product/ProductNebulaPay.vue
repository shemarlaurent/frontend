<template>
  <div class="block w-screen">
    <div class="nebula mx-auto relative py-16 text-center">
      <div class="xs:p-0 px-20 block">
        <div class="flex flex-col items-center ">
          <div class="headline-sm text-center">
            Choose the payment plan that's best for you
          </div>
          <div class="w-full">
            <div class="copped">
              <span class="copped-text">COPPED BY NOV. 23</span>
              <!--help tip icon-->
              <span class="absolute right-0 mr-3">
                <!--Tootltip popup-->
              <tip-popup>
                <div class="help-tip neb"></div>
                <div slot="content">
                  <div class="helptip ">
                    <div class="flex items-center m-2">
                      <span>
                       <svg width="70" height="70" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="106" height="106" rx="30" fill="url(#paint_nebula_linear)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M51.5112 17.1993C51.5112 16.1174 52.5712 15.3534 53.5977 15.6956L79.7578 24.4172C80.4051 24.633 80.8416 25.2387 80.8416 25.921V82.7813C80.8416 83.9467 79.6262 84.7137 78.5743 84.2121L52.4141 71.7386C51.8625 71.4756 51.5112 70.9189 51.5112 70.3078V17.1993Z"
                              fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M53.3272 32.2197L78.8933 84.3117L53.3272 72.2704V32.2197Z" fill="#E3E3E3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M25 24.6857C25 22.9578 26.7448 21.7759 28.3494 22.4169L54.3304 32.7945V87.4801C54.3304 89.2814 52.4475 90.4634 50.8252 89.6804L26.3812 77.8825C25.5367 77.4749 25 76.62 25 75.6822V24.6857Z"
                              fill="#F4F4F4"/>
                        <defs>
                        <linearGradient id="paint_nebula_linear" x1="-13.1101" y1="40.2483" x2="47.5047" y2="117.729"
                                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C496FF"/>
                        <stop offset="1" stop-color="#6204DA"/>
                        </linearGradient>
                        </defs>
                        </svg>

                      </span>
                      <div class="headline-lg font-bold ml-3">Nebula Pay</div>
                    </div>
                    <div class="p-2">
                      Gone are the days when you have to pay one time, Now you can pay in installments with Nebula Pay. Adjust the payment to what suits you best
                    </div>
                  </div>
                </div>
              </tip-popup>
              </span>
            </div>
            <div class="nebula-plan">
              <nebula-plan-chooser @day="updateDay"  @plan="planSelected" :cost="cost"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NebulaPlanChooser from '../Nebula/NebulaPlanChooser'
  import * as moment from 'moment'
  export default {
    name: 'NebulaPay',
    components: { NebulaPlanChooser },
    props: ['cost'],
    data() {
      return {
        daysToPay: moment().format("MMM D")
      }
    },
    methods: {
      planSelected(plan) {
        this.$emit('selected', plan);
      },
      updateDay(value) {
        this.daysToPay = moment().add(value, 'days').format("MMM D")
      }
    }
  }
</script>

<style scoped lang="scss">
  .nebula {
    margin: 0 auto;
    height: 100vh;
    background: #FFFFFF;
    max-width: 750px;

    .nebula-plans {
      @apply my-4;
    }
  }
</style>
