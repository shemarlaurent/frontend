<template>
  <div class="container">
    <div class="relative overflow-hidden bg-white  top-0 mt-12 alert-notice">
      <!--  <span class="absolute top-0 mr-4 mt-1 text-2xl right-0 cursor-pointer"
              @click="props.pop()">&times;</span>-->
      <div class="px-6 my-4 text-center block">
        <div class="headline-lg py-4 block my-4">Alert Notification</div>
        <div class="my-8 block">

          <div class="alert-card" v-for="i in 3">
            <accordion>
              <template slot="accordion-head" slot-scope="props">
                <div
                  class="alert-card-head"
                >
                  <a href="#" class="my-2 mx-4 ellipsis">Alert notification</a>
                  <div class="text-red-500 cursor-pointer px-2 " @click.stop="props.toggle">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10ZM5 11V9H15V11H5Z"
                            fill="#FD0D1B"/>
                    </svg>
                  </div>
                </div>

              </template>
              <div class="alert-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut corporis et ipsum maxime quisquam
                  reprehenderit saepe soluta totam ut! Alias aut dicta magni perspiciatis placeat quia quidem soluta
                  voluptatibus.
                </p>
              </div>
            </accordion>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'alert'
  }
</script>

<style scoped lang="scss">

  .alert-card {
    @apply mx-4 my-4;
    .alert-card-head {
      @apply flex justify-between py-2 px-2 text-left items-center  border-t border-gray-200;
      &:hover {
        @apply bg-gray-100;
      }
    }

    .alert-card-body {
      @apply py-4 px-6 text-left text-sm border-t border-gray-200;
    }
  }
</style>
