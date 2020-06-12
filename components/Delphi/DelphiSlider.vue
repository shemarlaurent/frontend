<template>
  <div class="my-1">
    <div class="flex justify-end w-full">
      <div class="font-semibold">
        Suggestion:
        <div class="btn border-4 border-danger text-danger rounded">SELL</div>
      </div>
    </div>
    <div class="lg:flex flex-wrap p-0 m-0">
      <div class="lg:w-3/4 w-full flex-shrink-0 flex-auto relative">
        <div class="relative border border-transparent ">
          <div class="relative w-full mx-auto">
            <div class="z-0 slider-image">
              <div class="radial">
                <svg class="color-ring" viewBox="0 0 702 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 403C12 362.868 19.9047 323.128 35.2626 286.051C50.6206 248.973 73.1312 215.284 101.509 186.906"
                    stroke="#FF003F" stroke-width="22.5725"/>
                  <path
                    d="M690.326 400C690.326 359.868 682.422 320.128 667.064 283.051C651.706 245.973 629.195 212.284 600.817 183.906"
                    stroke="#13F200" stroke-width="22.5725"/>
                  <path
                    d="M584.713 166.801C556.335 138.424 522.646 115.913 485.568 100.555C448.491 85.1971 408.751 77.2924 368.619 77.2924"
                    stroke="#FFFF2C" stroke-width="22.5725"/>
                  <path
                    d="M119.077 166.801C147.455 138.424 181.144 115.913 218.222 100.555C255.299 85.1971 295.039 77.2924 335.171 77.2924"
                    stroke="#FFC14F" stroke-width="22.5725"/>
                  <circle cx="583.285" cy="165.285" r="11.285" fill="#FFFF00"/>
                  <circle cx="602.285" cy="185.285" r="11.285" fill="#13F200"/>
                  <circle cx="690.285" cy="403.285" r="11.285" fill="#13F200"/>
                  <circle cx="369.285" cy="77.285" r="11.285" fill="#FFFF00"/>
                  <circle cx="335.285" cy="77.285" r="11.285" fill="#FFC14F"/>
                  <circle cx="118.285" cy="167.285" r="11.285" fill="#FFC14F"/>
                  <circle cx="100.285" cy="188.285" r="11.285" fill="#FF003F"/>
                  <circle cx="12.285" cy="403.285" r="11.285" fill="#FF003F"/>
                </svg>
                <div class="seeker mb-1" ref="seeker"></div>
              </div>
              <div class="product-thumb">
                <figure class="image-container">
                  <figcaption class=" capitalize ellipsis font-bold my-6">
                    {{ product.name }}
                  </figcaption>
                  <img class="w-64" :src="product.images[0].url" alt="">
                </figure>
              </div>
            </div>
            <div class="flex flex-wrap my-4 justify-center">
              <!--Global price button-->
              <div class="btn shared blue py-6 px-3">
                <div class="btn-title wrap-text">Global price</div>
                <div class="btn-value">${{product.price}}</div>
              </div>
              <!--Future price button-->
              <div class="btn shared px-6 px-3" :class="pricing.suggestion">
                <div class="btn-title wrap-text">Future price</div>
                <div class="btn-value">
                  <span>${{pricing.future}}</span>
                  <div class="mx-1">
                    <template v-if="pricing.suggestion==='buy'">
                      <svg width="16" height="16" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0L21.3923 14.2857L0.607696 14.2857L11 0Z" fill="#13F200"/>
                      </svg>
                    </template>
                    <template v-if="pricing.suggestion==='sell'">
                      <svg width="16" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 15.0476L0.607697 0.761893L21.3923 0.761893L11 15.0476Z" fill="#FF003F"/>
                      </svg>
                    </template>
                    <template v-if="pricing.suggestion==='keep'">
                      <svg width="16" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="22" height="6" rx="1" fill="#C4C4C4"/>
                      </svg>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-grow flex-col lg:mr-12">
        <div class="w-full my-2 items-center mx-auto">
          <div class="lg:flex flex-wrap justify-center mx-auto">
            <!--Slider-->
            <div class="flex-auto mx-auto my-4">
              <delphi-range-slider @on-change="setSize" title="Size" :max="15" :min="4" :step=".5"/>
            </div>
            <div class="flex-auto mx-auto my-4">
              <delphi-range-slider @on-change="setDay" title="Days" :max="7" :min="1" :step="1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DelphiSlider',
    props: {
      name: {
        type: String,
        required: false
      },
      product: {
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        degree: 0,
        minDegree: 0,
        maxDegree: 176,
        color: '#ff0000',
        size: 4,
        day: 1,
        predicting: false,
        pricing: {
          /*Just change this price value to modify the circular color dial angle*/
          global: 250,
          future: 0,
          suggestion: '',
          difference: 0
        }
      }
    },
    computed: {},
    mounted: function() {
      this.forecast(this.product.name, this.size, this.day)
      this.setSeeker()
      this.makeSuggestion()
      this.calcDegree()
    },

    beforeUpdate: function () {
      this.setSeeker()
    },
    methods: {
      forecast(name, size, days) {
        this.$axios.$post(process.env.DELPHI_FORCAST_URL, {
          name,
          size,
          days,
        }).then(price => this.pricing.future = price)
      },
      setSize(payload) {
        this.size = payload
        this.forecast(this.product.name, this.size, this.day)
        this.makeSuggestion()
      },
      setDay(payload) {
        this.day = payload
        this.forecast(this.product.name, this.size, this.day);
        console.log('day')
        this.makeSuggestion()
      },
      makeSuggestion() {
        this.pricing.difference = Math.round(this.pricing.future - this.product.price).toFixed(2)
        this.pricing.suggestion = this.difference > 1 ? 'buy' : (this.difference === 0 ? 'keep' : 'sell')
      },
      /*Ensures that value is in range*/
      keepValueInRange() {
        if (this.degree >= this.maxDegree) {
          // return this.degree - this.maxDegree
          return this.maxDegree
        } else {
          if (this.degree < this.minDegree) {
            // return this.degree + this.maxDegree
            return this.minDegree
          } else {
            return this.degree
          }
        }
      },
      /*Set seeker variables and css variables*/
      setSeeker() {
        console.log('seeked');
        this.degree = this.keepValueInRange()
        $(this.$refs['seeker']).css(
          {
            'transform': `rotate(${this.degree + .5}deg)`,
            'color': this.processColor()
          }
        )
      },
      /*Process angular color*/
      processColor() {
        if (this.degree < 45) {
          this.color = '#ff003f'
        } else if (this.degree >= 45 && this.degree < 90) {
          this.color = '#ffc14f'
        } else if (this.degree >= 90 && this.degree < 135) {
          this.color = '#ffff2c'
        } else {
          this.color = '#13f200'
        }
        return this.color
      },
      calcDegree() {
        let x = this.pricing.global,
            a, theta, theta_final
        if (this.pricing.global > 0 && this.pricing.global <= 100) {
          /*Red*/
          a = 0
          theta = 0
        }
        if (this.pricing.global > 100 && this.pricing.global <= 200) {
          /*Orange*/
          a = 100
          theta = 45
        }
        if (this.pricing.global > 200 && this.pricing.global <= 400) {
          /*Yellow*/
          a = 200
          theta = 90
        }
        if (this.pricing.global >= 400) {
          /*Green*/
          a = 400
          theta = 135
        }
        this.degree = .45 * (x - a) + theta
      }
    }
  }
</script>

<style scoped lang="scss">
  .btn {
     border-radius: 10px !important;
  }

  .radial {
    z-index: 6;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    position: relative;
    max-width: 700px;

    .color-ring {
      min-width: 360px;
      width: 96.5%;
      margin: -35px auto 0;
      @media (min-width: 768px) {
        min-width: 700px;
      }
    }

    .seeker {
      --degree: 0deg;
      --degree-reverse: calc(90deg - var(--degree));
      position: absolute;
      left: 0;
      width: 50%;
      height: 0;
      bottom: 0;
      @apply bg-green-300;
      content: '';
      transform-origin: bottom right;
      transform: rotate(var(--degree));
      z-index: 100;
      background: #000;
      -webkit-border-radius: 40px;
      -moz-border-radius: 40px;
      border-radius: 40px;
      display: flex;
      align-items: center;
      transition: all .13s ease-in-out;
      box-sizing: content-box;

      &:after {
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        border-radius: 40px;
        content: '';
        position: absolute;
        left: -2px;
        bottom: -5px;
        margin: auto 0;
        background: #FFFFFF;
        width: 20px;
        height: 20px;
        border: 5px solid currentColor;

        @media (max-width: 691px) {
          width: 10px;
          height: 10px;
          border-width: 7px;
        }
      }
    }
  }

  .slider-image {
    height: auto;
    @apply bg-white h-full;
    @apply relative flex flex-col items-center justify-center border border-transparent;
    .product-thumb {
      margin-top: -20%;
      @media (min-width: 768px) and (max-width: 1024px) {
        margin-top: -30%;
      }
      @media (max-width: 768px) and (max-width: 1024px) {
        margin-top: -35%;
      }
      @apply relative bottom-0 z-0 flex flex-col items-center text-center;
    }

    .image-container {
      width: 100%;
      object-position: center;
      object-fit: cover;
      position: relative;

      figcaption {
        font-style: normal;
        font-weight: bold;
        font-size: 1.25em;
        text-align: center;
        margin: 2px;
        color: #000000;
        @media (max-width: 768px) {
          font-size: 12px;
        }
      }

      img {
        position: relative;
        margin: 0 auto;
        @media (max-width: 768px) {
          width: 80%;
        }
      }
    }

  }

  .slider-box {
    position: relative;
    margin: 0 auto;
  }


</style>
