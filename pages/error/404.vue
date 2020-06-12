<template>
  <div>
    <div class="container">
      <div class="my-16 ">
        <div class="headline error">
          Error: 404 Not Found Error
        </div>
        <div class="text-center mb-16 flex flex-col items-center">
          <div class="my-6">
            <svg width="591" height="286" viewBox="0 0 591 286" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M175.632 245.872H144.847V285.569H102.179V245.872H0.371474V216.437L89.4872 96.536H135.395L52.7607 210.226H103.53V174.85H144.847V210.226H175.632V245.872Z"
                fill="#C4C4C4"/>
              <path
                d="M590.943 245.872H560.157V285.569H517.49V245.872H415.682V216.437L504.798 96.536H550.706L468.071 210.226H518.84V174.85H560.157V210.226H590.943V245.872Z"
                fill="#C4C4C4"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M340.039 102.709C329.637 102.709 321.197 94.3014 321.197 83.9114C321.197 73.5337 329.637 65.1138 340.039 65.1138C350.442 65.1138 358.882 73.5337 358.882 83.9114C358.882 94.3014 350.442 102.709 340.039 102.709ZM233.264 83.9114C233.264 73.5337 241.704 65.1138 252.107 65.1138C262.51 65.1138 270.949 73.5337 270.949 83.9114C270.949 94.3014 262.51 102.709 252.107 102.709C241.704 102.709 233.264 94.3014 233.264 83.9114ZM296.066 0.861328C201.853 0.861328 201.88 88.5826 201.88 88.5826V222.413L225.444 191.117L248.967 222.413L272.492 191.117L296.019 222.413L319.547 191.117L343.075 222.413L366.621 191.117L390.253 222.413V88.5826C390.253 88.5826 390.28 0.861328 296.066 0.861328Z"
                    fill="#C4C4C4"/>
            </svg>
          </div>
          <div class="error">
            Sorry, the page you're looking for cannot be accessed.
            Either check the URL,
            <nuxt-link class="text-blue-700" :to="'/'">go home</nuxt-link>
            , or feel free to
            <nuxt-link class="text-blue-700" :to="{name: 'report-bug'}">report this issue</nuxt-link>
            .
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '404'
  }
</script>

<style scoped>

</style>
