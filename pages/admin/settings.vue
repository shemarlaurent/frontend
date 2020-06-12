<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Settings</li>
          </ol>
        </nav>
      </div>
      <div class="content-viewport">
  <div class="col-lg-12">
    <div class="grid"><p class="grid-header">Page Banner Settings</p>
      <div class="grid-body">
        <div class="item-wrapper">
          <div class="row">
            <div class="col-md-8 mx-auto">
              <div class="form-group row showcase_row_area">
                <div class="col-md-9 showcase_content_area">
                  <div class="row">
                    <div class="col-md-9 col-sm-12 col-lg-9">
                      <label>Images</label>
                      <div class="form-group">
                        <div class="images">
                          <div class="img" v-for="image in images"
                               :style="{ 'background-image': `url(${image})` }">
                          </div>
                          <div class="pic" @click="addImages">
                            add
                          </div>
                        </div>
                        <div ref="widgetOpener"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group row showcase_row_area">
                <div class="col-md-9 showcase_content_area">
                  <button @click="saveImages" class="btn btn-primary" v-if="!loading">Save Images</button>
                  <button class="btn btn-sm text-white btn-primary w-50"
                    disabled="disabled"
                    v-else
                  >
                    <svg
                      class="fill"
                      height="18px"
                      fill="#e7e7e7"
                      viewBox="0 0 135 140"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="10" width="15" height="120" rx="6">
                        <animate
                          attributeName="height"
                          begin="0.5s"
                          dur="1s"
                          values="120;110;100;90;80;70;60;50;40;140;120"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="y"
                          begin="0.5s"
                          dur="1s"
                          values="10;15;20;25;30;35;40;45;50;0;10"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect x="30" y="10" width="15" height="120" rx="6">
                        <animate
                          attributeName="height"
                          begin="0.25s"
                          dur="1s"
                          values="120;110;100;90;80;70;60;50;40;140;120"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="y"
                          begin="0.25s"
                          dur="1s"
                          values="10;15;20;25;30;35;40;45;50;0;10"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect x="60" width="15" height="140" rx="6">
                        <animate
                          attributeName="height"
                          begin="0s"
                          dur="1s"
                          values="120;110;100;90;80;70;60;50;40;140;120"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="y"
                          begin="0s"
                          dur="1s"
                          values="10;15;20;25;30;35;40;45;50;0;10"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect x="90" y="10" width="15" height="120" rx="6">
                        <animate
                          attributeName="height"
                          begin="0.25s"
                          dur="1s"
                          values="120;110;100;90;80;70;60;50;40;140;120"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="y"
                          begin="0.25s"
                          dur="1s"
                          values="10;15;20;25;30;35;40;45;50;0;10"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect x="120" y="10" width="15" height="120" rx="6">
                        <animate
                          attributeName="height"
                          begin="0.5s"
                          dur="1s"
                          values="120;110;100;90;80;70;60;50;40;140;120"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="y"
                          begin="0.5s"
                          dur="1s"
                          values="10;15;20;25;30;35;40;45;50;0;10"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </rect>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'settings',
    middleware: 'admin',
    layout: 'admin',
    data() {
      return {
        images: [],
        loading: false
      }
    },

    methods: {
      addImages() {
        if (cloudinary) {
          cloudinary.createUploadWidget({
            cloudName: 'elox',
            apiKey: '149637736642141',
            uploadPreset: 'initial'
          }, (error, result) => {
            if (result.event === 'success') {
              this.images.push(result.info.url)
            }
          }).open()
        }


      },

      saveImages() {
        if (this.images.length) {
          this.loading = true;
          this.$axios.$post('admin/settings/banner', this.images)
            .then(response => {
              this.loading = false;
              this.images = [];
              this.$notification.success('Settings updated successfully');
            })
            .catch(error => {
              this.loading = false;
              this.$notification.error('an error has occurred, try again');
            })
        }
      }
    }
  }
</script>

<style scoped>
  .images {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .images .img,
  .images .pic {
    flex-basis: 31%;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  .images .img {
    width: 112px;
    height: 93px;
    background-size: cover;
    margin-right: 10px;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .images .img:nth-child(3n) {
    margin-right: 0;
  }

  .images .img span {
    display: none;
    text-transform: capitalize;
    z-index: 2;
  }

  .images .img::after {
    content: '';
    width: 100%;
    height: 100%;
    transition: opacity .1s ease-in;
    border-radius: 4px;
    opacity: 0;
    position: absolute;
  }

  .images .img:hover::after {
    display: block;
    background-color: #000;
    opacity: .5;
  }

  .images .img:hover span {
    display: block;
    color: #fff;
  }

  .images .pic {
    background-color: #F5F7FA;
    align-self: center;
    text-align: center;
    padding: 40px 0;
    text-transform: uppercase;
    color: #848EA1;
    font-size: 12px;
    cursor: pointer;
  }

  @media screen and (max-width: 400px) {
    .images .img,
    .images .pic {
      flex-basis: 100%;
      margin-right: 0;
    }
  }
</style>
