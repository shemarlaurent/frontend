<template>
  <div class=" flex flex-col items-center justify-center">
    <div class="headline-lg font-bold my-6">Plazma Authentication</div>
    <div class="plazma-card ">
      <transition name="fade">
        <authentication-response v-if="ready && plazma" :plazma="plazma" @onTryAgain="onTryAgain"/>
        <div v-else>
          <div class="sole-placeholder  cursor-pointer mx-auto">
            <img src="~/assets/images/auth_anim.gif" alt="">
          </div>
          <p class="my-6">Authenticating... Please Wait</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import AuthenticationResponse from './AuthenticationResponse'

  export default {
    name: 'Authentication',
    components: { AuthenticationResponse },
    props: ['image'],
    data() {
      return {
        ready: false,
        timeout: null,
        plazma: null,
      }
    },
    created() {
      if (this.image) this.authenticate(this.image)
    },
    methods: {
      async authenticate(image) {
        let result = {};

        // check if the image is a shoe
         await this.$axios.$post(process.env.AUTHENTICATION_SHOE_CHECK_URL, image)
          .then(response => {
            if (response.toLowerCase() !== 'not shoe') {
              result.real = true;

              // check if image is a real shoe or fake shoe
              this.$axios.$post(process.env.AUTHENTICATION_SHOE_NAME_CHECK_URL, image)
                .then(response => {
                  result.name = response;

                  this.$axios.$post(process.env.AUTHENTICATION_SHOE_AUTHENTICITY_CHECK_URL, image)
                    .then(response => {
                      result.authenticity = response;
                      this.isReady(result);
                    });
                });

            }
            else {
              this.plazma = {}
              this.plazma.not_shoe = true;
              this.isReady();
            }
          });

      },
      isReady(results = null) {
        this.ready = true
        if (results) this.plazma = results;
      },

      onTryAgain() {
        this.$emit('onTryAgain')
      }
    }
  }
</script>

<style scoped>

</style>
