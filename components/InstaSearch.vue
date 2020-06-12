<template>
  <div class="block w-screen h-screen border-transparent overflow-hidden">
      <vue-dropzone :options="dropzoneOptions"
                    :include-styling="true"
                    v-on:vdropzone-thumbnail="thumbnail"
                    id="customdropzone" :useCustomSlot=true @vdropzone-complete="afterComplete">
        <div class="flex items-center h-screen">
          <div class="block relative mx-auto my-auto">
            <div class="relative px-6 ">
              <div class="flex justify-between items-center my-4 relative">
                <div class="capitalize text-center w-full relative px-12">
                  <div class="trance-text font-bold">Drop Image Anywhere</div>
                  <!--Popup icon-->
                  <div class="absolute right-0 bottom-0 mb-2">
                    <!--Tootltip popup-->
                    <tip-popup>
                      <div class="help-tip"></div>
                      <div slot="content">
                        <div class="helptip">
                          <div class="flex items-center m-2">
                      <span>
                        <svg width="70" height="70" viewBox="0 0 106 106" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                        <rect width="106" height="106" rx="30" fill="url(#paint0_linear)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M62.5797 54.6975C62.5797 60.2934 58.185 64.8292 52.7646 64.8292C47.3442 64.8292 42.9495 60.2934 42.9495 54.6975C42.9495 49.1017 47.3442 44.5659 52.7646 44.5659C58.185 44.5659 62.5797 49.1017 62.5797 54.6975V54.6975Z"
                              stroke="white" stroke-width="4.90756" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                          d="M40.4958 39.3613H40.6492H27V73.7143H78.5294V39.3613H66.2605H65.187L61.5063 32H44.3298L40.6492 39.3613"
                          stroke="white" stroke-width="4.90756" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="-28.1708" y1="48.4975" x2="48.2466" y2="131.258"
                                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D7D7D7"/>
                        <stop offset="1"/>
                        </linearGradient>
                        </defs>
                        </svg>

                      </span>
                            <div class="headline-lg font-bold ml-3">Insta Search</div>
                          </div>
                          <div class="p-2">
                            Ever see a pair of shoes and dont know the name? Instead of searching for hours just take a
                            picture of it and our A.I. will find it for you.
                          </div>
                        </div>
                      </div>
                    </tip-popup>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div class="uppercase trance-text">
                  OR
                </div>
                <div class="btn btn-black boxed">Browse Files</div>
              </div>
            </div>
          </div>
        </div>
      </vue-dropzone>
  </div>
</template>

<script>
  const getTemplate = () => `
<div class="dz-preview dz-file-preview">
                <div class="dz-image">
                    <div data-dz-thumbnail-bg></div>
                </div>
                <div class="dz-details">
                    <div class="dz-size"><span data-dz-size></span></div>
                    <div class="dz-filename"><span data-dz-name></span></div>
                </div>
                <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                <div class="dz-error-message"><span data-dz-errormessage></span></div>
                <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                <div class="dz-error-mark"><i class="fa fa-close"></i></div>
            </div>`
  import vueDropzone from 'vue2-dropzone'

  export default {
    name: 'InstaSearch',
    components: {
      'vue-dropzone': vueDropzone
    },
    data() {
      return {
        dropzoneOptions: {
          maxFilesize: 6, // MB
          maxFiles: 1,
          chunking: true,
          chunkSize: 500, // Bytes
          thumbnailWidth: 150, // px
          thumbnailHeight: 150,
          addRemoveLinks: true,
          url: '/',
          previewTemplate: getTemplate()
        }
      }
    },
    methods: {
      thumbnail(file, dataUrl) {
        var j, len, ref, thumbnailElement
        if (file.previewElement) {
          file.previewElement.classList.remove('dz-file-preview')
          ref = file.previewElement.querySelectorAll('[data-dz-thumbnail-bg]')
          for (j = 0, len = ref.length; j < len; j++) {
            thumbnailElement = ref[j]
            thumbnailElement.alt = file.name
            thumbnailElement.style.backgroundImage = 'url("' + dataUrl + '")'
          }
          return setTimeout(((function(_this) {
            return function() {
              return file.previewElement.classList.add('dz-image-preview')
            }
          })(this)), 1)
        }
      },
      afterComplete(response) {
        this.$axios.$post(process.env.INSTA_SEARCH_URL, response)
          .then(result => {
            this.$router.push({ name: 'store', query: {search: result }});
            this.$emit('onUpload', { screen: this.screen})
          }).catch(error => console.log(error.res.data))

      }
    }
  }
</script>

