<template>
  <div class="block">
    <div class="pt-12 pr-12 pl-12">
      <div class="flex flex-col items-center my-6">
        <div class="flex flex-col items-center">
          <div class="headline-text">Results</div>
          <div v-if="!plazma.not_shoe">
            <div class="font-semibold my-4 md:w-1/2 lg:w-1/2 inline" v-if="plazma.sole === 'new'">
              Looks like your {{ plazma.name }} soles are clean, but keeping them that way
              by using some of the products below

            </div>

            <div class="font-semibold my-4 md:w-1/2 lg:w-1/2 inline" v-if="plazma.sole === 'used'">
              Looks like your {{ plazma.name }} soles are dirty, you donʼt have to keep
              them that way if you purchase one of the items below
            </div>

          </div>
          <div class="font-semibold my-4 md:w-1/2 lg:w-1/2" v-else>
            This sneaker is not currently being authenticated at this time, Please come back
            soon and check availability
          </div>
         <!--  <div class="my-4">
            <div class="btn btn-cyan boxed" @click="tryAgain">Try again</div>
          </div>  -->
            <div v-if="smiliBool == true" style="margin-top:10px;" class="flex mx-3 items-center">
              <span>Thank you for your Feedback</span>
            </div>
          <div v-if="mainBool == true" class="flex items-center justify-between ">
            Rate this result :
            <div class="flex mx-3 items-center">
              <div class="cursor-pointer">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="svgClicked"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0833 34.5834C7.64821 34.5834 0 26.9352 0 17.5001C0 8.06496 7.64821 0.416748 17.0833 0.416748C26.5185 0.416748 34.1667 8.06496 34.1667 17.5001C34.1667 26.9352 26.5185 34.5834 17.0833 34.5834ZM17.0837 31.1667C24.6316 31.1667 30.7503 25.0479 30.7503 17.5C30.7503 9.95211 24.6316 3.83333 17.0837 3.83333C9.53577 3.83333 3.41699 9.95211 3.41699 17.5C3.41699 25.0479 9.53577 31.1667 17.0837 31.1667ZM8.54199 19.2083C8.54199 23.9258 12.3662 27.75 17.0837 27.75C21.8011 27.75 25.6253 23.9258 25.6253 19.2083H22.2087C22.2087 22.0388 19.9141 24.3333 17.0837 24.3333C14.2532 24.3333 11.9587 22.0388 11.9587 19.2083H8.54199ZM10.2503 15.7917C8.8351 15.7917 7.68783 14.6444 7.68783 13.2292C7.68783 11.8139 8.8351 10.6667 10.2503 10.6667C11.6656 10.6667 12.8128 11.8139 12.8128 13.2292C12.8128 14.6444 11.6656 15.7917 10.2503 15.7917ZM21.3545 13.2292C21.3545 14.6444 22.5018 15.7917 23.917 15.7917C25.3322 15.7917 26.4795 14.6444 26.4795 13.2292C26.4795 11.8139 25.3322 10.6667 23.917 10.6667C22.5018 10.6667 21.3545 11.8139 21.3545 13.2292Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div class="cursor-pointer">
                <svg
                  width="42"
                  height="41"
                  viewBox="0 0 42 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="svgClicked"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.9173 37.5834C11.4822 37.5834 3.83398 29.9352 3.83398 20.5001C3.83398 11.065 11.4822 3.41675 20.9173 3.41675C30.3524 3.41675 38.0007 11.065 38.0007 20.5001C38.0007 29.9352 30.3524 37.5834 20.9173 37.5834ZM20.917 34.1667C28.4649 34.1667 34.5837 28.0479 34.5837 20.5C34.5837 12.9521 28.4649 6.83333 20.917 6.83333C13.3691 6.83333 7.25033 12.9521 7.25033 20.5C7.25033 28.0479 13.3691 34.1667 20.917 34.1667ZM20.917 20.5C16.1996 20.5 12.3753 24.3242 12.3753 29.0417H15.792C15.792 26.2112 18.0865 23.9167 20.917 23.9167C23.7475 23.9167 26.042 26.2112 26.042 29.0417H29.4587C29.4587 24.3242 25.6344 20.5 20.917 20.5ZM14.0837 18.7917C12.6684 18.7917 11.5212 17.6444 11.5212 16.2292C11.5212 14.8139 12.6684 13.6667 14.0837 13.6667C15.4989 13.6667 16.6462 14.8139 16.6462 16.2292C16.6462 17.6444 15.4989 18.7917 14.0837 18.7917ZM25.1878 16.2292C25.1878 17.6444 26.3351 18.7917 27.7503 18.7917C29.1656 18.7917 30.3128 17.6444 30.3128 16.2292C30.3128 14.8139 29.1656 13.6667 27.7503 13.6667C26.3351 13.6667 25.1878 14.8139 25.1878 16.2292Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full relative block border-none text-left">
      <related-product :id="2" title="Suggested product" :addToCartBtn="true" />
      <div class="carousal">
        <div class="preIcon cursor-pointer">
          <img @click="preIconFunc" style="margin:50px 0px 0px 10px;" src="~/assets/images/Polygon 5.png" alt="21">
        </div>
        <carousel style="flex-basis: 100% important" :navigateTo="counter" @pageChange="pageChange" :per-page="3"  :mouse-drag="false" >
          <slide>
            <div style="display: flex; flex-direction: column;">
              <img style=" margin-right:20px; margin-left:auto; width:15px; height: 12px;" :src="require(`@/assets/images/+.png`)">
              <img style="width:100%; height:100%;" :src="require(`@/assets/images/product.png`)">
            </div>
          </slide>
          <slide>
            <div style="display: flex; flex-direction: column;">
              <img style=" margin-left:auto; margin-right:20px; width:15px; height: 12px;" :src="require(`@/assets/images/+.png`)">
              <img style="width:100%; height:100%;" :src="require(`@/assets/images/product.png`)">
            </div>
          </slide>
          <slide>
            <div style="display: flex; flex-direction: column;">
              <img style=" margin-left:auto; margin-right:20px; width:15px; height: 12px;" :src="require(`@/assets/images/+.png`)">
              <img style="width:100%; height:100%;" :src="require(`@/assets/images/product.png`)">
            </div>
          </slide>
          <slide>
            <div style="display: flex; flex-direction: column;">
              <img style=" margin-left:auto; margin-right:20px; width:15px; height: 12px;" :src="require(`@/assets/images/+.png`)">
              <img style="width:100%; height:100%;" :src="require(`@/assets/images/product.png`)">
            </div>
          </slide>
        </carousel>
        <div class="preIcon cursor-pointer">
          <img @click="nextIconFunc" style="margin:50px 10px 0px 0px;" src="~/assets/images/Polygon 6.png" alt="21">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'SoleCheckResponse',
  props: {
    plazma: {
      default() {
        return {
        }
      }
    }
  },
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      counter: 0,
      mainBool:true,
      smiliBool:false,
      count: 100,
      counting: null,
      loading: null,
      ready: false,
      products: []
    }
  },
  mounted() {

  },
  methods: {
    preIconFunc(){
      if(this.counter >0){
        this.counter -= 1;
      }
    },
    nextIconFunc(){
      if(this.counter <1){
        this.counter += 1;
      }
    },
    // buildSlideMarkup (count) {
    //   let slideMarkup = '';
    //   for (var i = 1; i <= count; i++) {
    //     slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
    //   }
    //   return slideMarkup;
    // },
    tryAgain() {
      this.$emit('onTryAgain')
    },
    startLoading() {
      this.loading = setTimeout(this.doneLoading, 2000)
      this.initCount()
    },
    initCount() {
      this.counting = setInterval(this.increment, 1000)
    },
    increment() {
      this.count = this.count - 10
    },
    doneLoading() {
      clearTimeout(this.loading)
      clearInterval(this.counting)
      this.ready = true
    },
    svgClicked () {
      this.mainBool = false;
      this.smiliBool = true;
    },
    pageChange(pg) {
      console.log(pg);
    }
  },
  computed: {
    countLoaderStyle() {
      return {
        'clip-path': `inset( ${this.count}% 0 0 0 )`
      }
    }
  }
}
</script>

<style scoped lang="scss">
.VueCarousel-slide {
  visibility: visible;
  position: relative;
  // background: #42b983;
  // color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

/deep/ .VueCarousel-inner {
  flex-basis: 30% !important;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.clipped-loader-sole {
  /*clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%);*/
  background-image: url(~assets/images/sole_left.png);
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 250px;
  height: 150px;
  background-color: transparent;
  background-position: center center;
  margin: 0 auto;
  position: relative;
}
.carousal{
  display: flex;
  background-color: white;
  padding: 10px;
}
.preIcon{
  background-color: white;
  height: 100px;
  width: 120px;
  flex-direction: column
}
</style>
