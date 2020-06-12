<template>
  <div class="container ">
    <transition name="fade">
      <div v-if="!selected">
        <div class="my-12 mx-auto">
          <div class="text-center">
            <div class="headline-lg font-bold my-6">Plazma Beta</div>
            <p class="">Choose an option</p>
          </div>
        </div>
        <div class="flex flex-wrap w-full justify-center mb-32">
          <div class="flex justify-center">
            <!--            Click to toggle modal for dropzone-->
            <div class="sole-placeholder cursor-pointer" @click.stop="authenticate()">
              <img style="width:250px; height:120px;" src="~/assets/images/sole_left.png" alt="">
              <div class="headline-lg font-bold mt-10">Authentication</div>
            </div>
          </div>

          <div class=" flex justify-center">
            <!--            Click to toggle modal for dropzone-->
            <div class="sole-placeholder cursor-pointer" @click.stop="checkSole()">
              <img style="width:110px; height:200px;" src="~/assets/images/sole_right.png" alt="">
              <div class="headline-lg font-bold mt-6">Sole Check</div>
            </div>
          </div>
        </div>
        <!--Heylo Modal-->
        <heylo-modal ref="modal" @onModalClose="onModalClose">
          <!--Dropzone-->
          <drop-zone :screen="screen" @onUpload="onUpload"/>
        </heylo-modal>
      </div>
      <div v-else>
        <div class="my-12 mx-auto">
          <authentication v-if="auth.selected" :image="image"  @onTryAgain="tryAgain"/>
          <sole-check v-if="sole.selected" :image="image"  @onTryAgain="tryAgain"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Dropzone from './Dropzone'
  import Authentication from './Authentication'
  import SoleCheckResponse from './SoleCheckResponse'
  import SoleCheck from './SoleCheck'

  export default {
    name: 'PlazmaScreen',
    components: { 'sole-check': SoleCheck, SoleCheckResponse, 'authentication': Authentication, 'drop-zone': Dropzone },
    data() {
      return {
        screen: null,
        selected: false,
        image: null,
        /*For authentication screen*/
        auth: {
          validationId: 'authentication',
          selected: false,
          name: 'Authentication',
          icon: `<svg width="70" height="70" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="106" height="106" rx="30" fill="url(#paint0_linear)"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3925 24.5794L52.5 19L77.6075 24.5794C79.0052 24.8902 79.9998 26.1298 80 27.5617V58.0775C79.9996 64.2071 76.9358 69.931 71.8356 73.3308L52.5 86.2222L33.1644 73.3308C28.0651 69.9316 25.0015 64.2091 25 58.0806V27.5617C25.0002 26.1298 25.9948 24.8902 27.3925 24.5794ZM31.111 30.0124V58.0776C31.111 62.1639 33.1531 65.9797 36.5529 68.2465L52.4999 78.8799L68.4468 68.2465C71.8457 65.9803 73.8876 62.1658 73.8887 58.0807V30.0124L52.4999 25.264L31.111 30.0124ZM43.5201 61.9151L52.5004 57.1943L61.4776 61.9151L59.7665 51.9174L67.0295 44.8346L56.992 43.374L52.5004 34.2776L48.0117 43.374L37.9712 44.8346L45.2342 51.9174L43.5201 61.9151Z" fill="white"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="-28.1708" y1="48.4975" x2="48.2466" y2="131.258" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#B3EAFF"/>
                  <stop offset="0.921875" stop-color="#4ECDFF"/>
                  </linearGradient>
                  </defs>
                  </svg>
                  `,
          tip: 'Our authentication A.I. can determine the authenticity of a shoe from just an image, Please leave a review as the A.I. will improve from your response.'
        },
        /*For sole check screen*/
        sole: {
          validationId: 'sole-check',
          selected: false,
          name: 'Sole Check',
          icon: `<svg width="70" height="70" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="106" height="106" rx="30" fill="url(#paint0_linear)"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M82.7632 38.3809C84.1834 30.324 79.0979 21.5209 71.0345 20.1007C64.5876 18.9651 59.7279 27.6765 58.5924 34.1234C58.1777 36.4821 58.6251 38.9954 59.1926 42.1828C59.3998 43.3468 59.623 44.6008 59.8261 45.9699L60.5853 51.0881L78.3125 54.2134C78.5321 52.9633 79.0371 51.514 79.6559 49.7378C80.6329 46.9339 81.8937 43.3154 82.7632 38.3809ZM73.7371 46.7619L73.7373 46.7614L73.7404 46.7619H73.7371ZM74.7287 43.8166C74.7222 43.833 74.2772 45.1254 73.7373 46.7614L66.3642 45.4594L66.2987 45.0078C66.1874 44.2519 66.0664 43.4992 65.9191 42.6614C64.8752 36.5811 64.8457 36.3357 65.0355 35.2557C65.4642 32.8439 66.6227 30.0786 68.0299 28.2297C69.0771 26.8552 69.7021 26.5116 69.8952 26.5443C74.0186 27.2741 77.1765 32.3628 76.3159 37.2454C75.9101 39.5526 75.3897 41.6633 74.7287 43.8166ZM37.7263 34.5489C44.2713 34.5489 47.5439 43.9738 47.5439 50.5188C47.5439 52.9145 46.667 55.3101 45.5552 58.3476L45.5552 58.3477L45.5551 58.3478C45.1482 59.4596 44.7098 60.6574 44.2713 61.9726L42.6351 66.8814H24.6363C24.6363 65.6135 24.3907 64.1001 24.0898 62.2459C23.614 59.3141 23 55.5305 23 50.5188C23 42.3375 29.5385 34.5489 37.7263 34.5489ZM38.0634 59.9044L37.9161 60.3364H30.4122L30.2879 59.5444C29.7905 56.321 29.545 53.6572 29.545 50.5188C29.545 45.5577 33.5375 41.094 37.7263 41.094C37.9227 41.094 38.479 41.5423 39.2709 43.0804C40.3345 45.1421 40.9988 48.0644 40.9988 50.5188C40.9988 51.7296 40.5734 53.0125 38.0634 59.9044ZM42.6351 73.4264H24.6363V77.5171C24.6363 82.4873 28.6654 86.5165 33.6357 86.5165C38.6059 86.5165 42.6351 82.4873 42.6351 77.5171V73.4264ZM76.4636 64.6853L77.1737 60.6568L59.4498 57.5348L58.7364 61.56C57.8734 66.4553 61.1421 71.1232 66.0373 71.9863C70.9326 72.8493 75.6006 69.5805 76.4636 64.6853Z" fill="white"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="-28.1708" y1="48.4975" x2="48.2466" y2="131.258" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#B3EAFF"/>
                  <stop offset="0.921875" stop-color="#4ECDFF"/>
                  </linearGradient>
                  </defs>
                  </svg>
                  `,
          tip: 'Our Sole Check A.I. can determine whether a shoe has been worn outside and has a dirty sole. The model will soon be able to determine if a shoe has been worn at all, Please leave a review as the A.I. will improve from your response.'
        }
      }
    },
    methods: {
      authenticate() {
        this.auth.selected = true
        this.screen = this.auth
        this.openDropbox()
      },
      checkSole() {
        this.sole.selected = true
        this.screen = this.sole
        this.openDropbox()
      },
      openDropbox() {
        this.$refs['modal'].modalOpen()
      },
      tryAgain() {
        this.selected = false
        this.auth.selected = false
        this.sole.selected = false
      },
      onModalClose() {

      },
      onUpload(payload) {
        this.image = payload.file;
        this.selected = true
        this.$refs['modal'].modalClose()
        switch (payload.screen) {
          case this.auth.validationId:
            this.auth.selected = true
            break
          case this.sole.validationId: {
            this.sole.selected = true
            break
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "~/assets/css/plazma.scss";
</style>
