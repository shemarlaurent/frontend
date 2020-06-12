<template>
  <div class="block h-screen">
    <transition name="fade">
      <wait-loader :timeout="20000" @onWaitComplete="onWaitLoaded" v-if="!loaded">
        <p class="font-bold font-sans w-full mx-1">Please wait... You’re currently placed on a waiting list to sign up.
          If
          you’re rejected please try again
          later.</p>
      </wait-loader>
      <div class="block my-16" v-else>
        <div class="text-center my-16">
          <div class="headline-lg font-bold my-4">
            Monthly Memberships
          </div>
          <p>
            Choose a payment option:
          </p>
        </div>
        <div class="flex" >
          <heylo-swiper :autoplay="false" :loop="false" :navigation="true" :centered-slides="false" slidesPerView="4"
                        :breakpoints="breakpoints">
            <swiper-slide v-for="(plan, index ) in plans" :key="`payment-plan-${index}`">
              <div class="plan-listing " >
                <div class="plan-card cursor-pointer" @click.stop="onPlanClick(plan.id)">
                  <div class="headline uppercase my-2 ">
                    {{plan.type}}
                  </div>
                  <div class="border-t border-h-300">
                    <div class="price">
                      <div class="value">
                        <span class="currency">$</span>
                        <span class="">{{plan.cost}}</span>
                      </div>
                      <div class="block" v-if="plan.features.length">
                        <ul class="benefit-listing" v-for="(feature, fid) in plan.features"
                            :key="`${plan.type}-feature-${fid}`">
                          <li class="benefit-item">{{feature}}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </heylo-swiper>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'PlanListing',
    data() {
      return {
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 3,
            spaceBetween: 15
          }, 1260: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        },
        loaded: false,
        plans: [{
          id: 0,
          type: 'Free',
          cost: '0',
          features: []
        }, {
          id: 1,
          type: 'Standard',
          cost: '10',
          features: [
            'Insta Search',
            'Plazma Authentication',
            'Plazma Sole Check',
            'Nebula Pay',
            '1 pick your price chances'
          ]
        }, {
          id: 1,
          type: 'Premium',
          cost: '20',
          features: [
            'Insta Search',
            'Plazma Authentication',
            'Plazma Sole Check',
            'Nebula Pay',
            '2 pick your price chances',
            'The Key access',
            'Pyro Access'
          ]
        }, {
          id: 1,
          type: 'Pro+',
          cost: '30',
          features: [
            'Insta Search',
            'Plazma Authentication',
            'Plazma Sole Check',
            'Nebula Pay',
            '1 pick your price chances',
            'The Key access',
            'Pyro Access',
            'Delphi price predictor A.I.',
            'First to try new Features'
          ]
        }]
      }
    },
    methods: {
      onWaitLoaded() {
        this.loaded = true
      },
      onPlanClick(plan_id) {
        let plan = this.plans.filter(plan => plan.id == plan_id)
        this.$emit('onPlanChoose', { plan: plan })
      }
    }
  }
</script>

<style scoped lang="scss">
  .plan-listing {
    font-family: 'Roboto', sans-serif !important;
    box-shadow: 12px 12px 1px 1px #6767FF;
    background: #FFFFFF;
    border-radius: 5px;
    border: 2px solid #C4C4C4;
    width: 85%;
    margin: 30px 15px;
    @apply px-1;
    .plan-card {
      box-sizing: border-box;
      min-height: 260px;
      text-align: center;
      position: relative;
      display: block;
      @apply px-5;
      .headline {
        display: block;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 42px;
        color: #000000;
        padding-bottom: 21px;
        padding-top: 21px;
        @apply font-display;
      }

      .price {
        @apply font-display relative;

        .value {
          @apply flex justify-center;
          font-style: normal;
          font-weight: normal;
          font-size: 60px;
          line-height: 75px;
          color: #000000;
          margin-bottom: 22px;

          .currency {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            padding-top: 12px;
            color: #000000;
          }

        }
      }

      .benefit-listing {
        display: list-item;
        text-align: left;
        margin: 21px 12px;

        .benefit-item {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
          color: #000000;
          list-style: disc;
          padding-left: 12px;
        }
      }
    }

  }
</style>
