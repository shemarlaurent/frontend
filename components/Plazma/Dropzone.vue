<template>
  <div class="block w-screen ">
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
                <div class="absolute right-0 bottom-0">
                  <!--Tootltip popup-->
                  <tip-popup>
                    <div class="help-tip cyan"></div>
                    <div slot="content">
                      <div class="helptip ">
                        <div class="flex items-center m-2">
                          <span v-html="screen.icon"></span>
                          <div class="headline-lg font-bold ml-3">{{screen.name}}</div>
                        </div>
                        <div class="p-2">
                          {{screen.tip || ''}}
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
              <div class="btn btn-cyan boxed">Browse Files</div>
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
    name: 'Dropzone',
    components: {
      'vue-dropzone': vueDropzone
    },
    props: {
      screen: {
        default: null,
        type: Object,
        required: true
      }
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
        console.log(response)
        this.$emit('onUpload', { screen: this.screen, file: response })
      }
    }
  }
</script>

<style lang="scss">

</style>
