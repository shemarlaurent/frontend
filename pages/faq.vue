<template>
  <div class="p-2 lg:w-5/6 md:w-5/6 mx-auto lg:border md:border border-gray-300 h-screen">
    <transition name="fade">
      <!-- <wait-loader @onWaitComplete="onWaitLoaded" v-if="!loaded"/> -->
      <!-- <div class="block my-16" v-else> -->
      <div class="block my-16">
        <div class="headline-lg text-center font-bold">
          FAQ
        </div>
        <div class="text-left m-8 leading-relaxed">
          <div class="question-card">
            <div class="question-card-head">
            <span class="mr-2">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="25" fill="#F8F8F8"/>
            <path
              d="M22.3485 31.116V25.392C24.2925 25.296 25.7805 24.888 26.8125 24.168C27.8685 23.424 28.3965 22.332 28.3965 20.892V20.388C28.3965 19.284 28.0605 18.432 27.3885 17.832C26.7165 17.208 25.8165 16.896 24.6885 16.896C23.4885 16.896 22.5285 17.244 21.8085 17.94C21.0885 18.636 20.5965 19.524 20.3325 20.604L16.9125 19.236C17.1285 18.492 17.4405 17.772 17.8485 17.076C18.2805 16.38 18.8205 15.768 19.4685 15.24C20.1165 14.688 20.8845 14.256 21.7725 13.944C22.6605 13.608 23.6805 13.44 24.8325 13.44C26.0085 13.44 27.0765 13.608 28.0365 13.944C28.9965 14.28 29.8125 14.76 30.4845 15.384C31.1565 15.984 31.6725 16.728 32.0325 17.616C32.3925 18.48 32.5725 19.44 32.5725 20.496C32.5725 21.576 32.3805 22.548 31.9965 23.412C31.6365 24.252 31.1445 24.972 30.5205 25.572C29.9205 26.172 29.2365 26.664 28.4685 27.048C27.7005 27.408 26.9085 27.66 26.0925 27.804V31.116H22.3485ZM24.2565 39.432C23.3445 39.432 22.6725 39.216 22.2405 38.784C21.8325 38.328 21.6285 37.752 21.6285 37.056V36.444C21.6285 35.748 21.8325 35.184 22.2405 34.752C22.6725 34.296 23.3445 34.068 24.2565 34.068C25.1685 34.068 25.8285 34.296 26.2365 34.752C26.6685 35.184 26.8845 35.748 26.8845 36.444V37.056C26.8845 37.752 26.6685 38.328 26.2365 38.784C25.8285 39.216 25.1685 39.432 24.2565 39.432Z"
              fill="#C4C4C4"/>
            </svg>
          </span>
              <span class="font-bold">Question</span>
            </div>
            <div class="question-card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aperiam exercitationem labore
                minus
                non perspiciatis placeat rem sequi tempora. Assumenda ipsa, molestias non possimus quidem quis quos
                tenetur
                vitae!
              </p>
            </div>
          </div>

        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'faq',
    // layout: 'deliverable',
    data() {
      return {
        loaded: false
      }
    },
    methods: {
      onWaitLoaded() {
        this.loaded = true
      }
    }
  }
</script>

<style scoped lang="scss">
  .question-card {
    @apply border border-gray-300 my-2 ;
    .question-card-head {
      @apply flex py-2 px-4 items-center border-b border-gray-300;
    }

    .question-card-body {
      @apply text-left m-8 leading-relaxed;
    }
  }
</style>
