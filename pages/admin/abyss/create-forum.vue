<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Create Forum</li>
          </ol>
        </nav>
      </div>
      <div class="content-viewport">
        <div class="row">
          <div class="col-lg-12">
            <div class="grid">
              <div class="grid-body">
                <h6 class="font-weight-normal mb-3">Select products</h6>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Forum Name</label>
                        <input type="text" class="form-control form-control-lg" placeholder="Forum Name" v-model="forum.name">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Select Price</label>
                        <multiselect  :options="products" track-by="id" label="name" v-model="product" :close-on-select="false" />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-9 col-sm-12 col-lg-9">
                          <label>Image</label>
                          <div class="form-group">
                            <div class="images">
                              <div class="img"  v-if="forum.image"
                                   :style="{ 'background-image': `url(${forum.image})` }">
                              </div>
                              <div class="pic" @click="addImage">
                                add
                              </div>
                            </div>
                            <div ref="widgetOpener"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row pt-8">
                    <div class="col-md-5 col-sm-12 col-lg-5">
                      <button class="btn btn-secondary">
                        Cancel
                      </button>
                      <button @click="createForum" class="btn btn-primary">
                        Create Forum
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
</template>

<script>
  export default {
    name: 'create-forum',
    middleware: 'admin',
    layout: 'admin',
    data() {
      return {
        products: [],
        product: {},
        forum: {
          name: '',
          product_id: '',
          image: null
        },
        loading: false
      }
    },

    mounted() {
      this.getProducts();
    },

    methods: {
      getProducts() {
        this.$axios.$get('admin/priced-products/products')
          .then(products => this.products = products)
          .catch(error => error);
      },

      createForum() {
        this.loading = true;
        this.forum.product_id = this.product.id;
        this.$axios.$post('abyss/forums/create', this.forum)
          .then(response => {
            this.loading = false;
            this.$notification.success('Forum created successfully');
            this.forum.name = '';
            this.forum.product_id = '';
            this.forum.image = '';
          })
          .catch(error => {
            this.loading = false;
            this.$notification.error('network error has occurred');
          })
      },

      addImage() {
          if (cloudinary)
          {
            cloudinary.createUploadWidget({
              cloudName: process.env.CLOUDINARY_CLOUD_NAME,
              apiKey: process.env.CLOUDINARY_APIKEY,
              uploadPreset: process.env.CLOUDINARY_PRESET
            }, (error, result) => {
              console.log(error);
              console.log(result);
              if (result.event === 'success') {
                this.forum.image = result.info.url
              }
            }).open()
          }

      },
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
