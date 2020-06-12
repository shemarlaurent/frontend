<template>
  <div class="flex flex-col items-center justify-center">
    <div class="headline-lg text-center font-bold my-6">Plazma Sole Check</div>
    <div class="plazma-card">
      <transition name="fade">
        <div v-if="ready && plazma">
          <sole-check-response :plazma="plazma" @onTryAgain="onTryAgain"/>
        </div>
        <div v-else>
          <div class="sole-placeholder cursor-pointer mx-auto">
            <img src="~/assets/images/sole_anim.gif" alt="">
          </div>
          <p class="my-6">Checking Sole... Please Wait</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import SoleCheckResponse from './SoleCheckResponse'

  export default {
    name: 'SoleCheck',
    components: { SoleCheckResponse },
    props: ['image'],
    data() {
      return {
        ready: false,
        timeout: null,
        plazma: null
      }
    }, mounted() {
      if (this.image) this.checkSole(this.image);
    },
    methods: {
      checkSole(image) {
        let result = {}
        this.$axios.$post(process.env.AUTHENTICATION_SHOE_CHECK_URL, image)
          .then(response => {
            if (response.toLowerCase() !== 'not shoe') {
              result.real = true;

              this.$axios.$post(process.env.AUTHENTICATION_SHOE_NAME_CHECK_URL, image)
                .then(response => {
                  result.name = response;

                  this.$axios.$post(process.env.SOLE_CHECK_URL, image)
                    .then(response => {
                      result.sole = response.toLowerCase();

                      this.isReady(result);
                    })
                });




            }
            else  {
              this.plazma = {}
              this.plazma.not_shoe = true;
              this.isReady();
            }
          })
      },
      isReady(result = null) {
        this.ready = true

        if (result) this.plazma = result;
      },
      onTryAgain() {
        this.$emit('onTryAgain')
      }
    }
  }
</script>

<style lang="scss">

</style>
