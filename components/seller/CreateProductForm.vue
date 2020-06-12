<template>
  <div class="form-main">
    <div class="form-body">
      <h4 class="font-weight-normal text-center capitalize text-primary mb-4">Basic Information about product</h4>

      <div>
        <div class="row flex justify-center">
          <div class="col-md-5 col-sm-12 col-lg-5">
            <div class="form-group">
              <label for="name">Product Name</label>
              <input type="text" id="name" class="form-control form-control-lg" placeholder="Nike Air Jordan"
                     v-model="product.name">
            </div>
          </div>
          <div class="col-md-5 col-sm-12 col-lg-5">
            <div class="form-group">
              <label for="brand">Product Brand</label>
              <input type="text" id="brand" class="form-control form-control-lg"
                     placeholder="Nike, Adidas, Supreme..."
                     v-model="product.brand">
            </div>
          </div>
        </div>
        <div class="row flex justify-center">
          <div class="col-md-10 col-sm-12 col-lg-10">
            <div class="form-group">
              <label for="description">Product Description</label>
              <textarea id="description" rows="8" class="form-control" v-model="product.description"
                        placeholder="Description"></textarea>
            </div>
          </div>
        </div>

        <div class="row flex justify-center">
          <div class="col-md-10 col-sm-12 col-lg-10">
            <div class="form-group">
              <span>Enter Size Variants</span>
              <div class="row flex justify-start" v-for="(variant, index) in product.variants" :key="index">
                <div class="col-md-5 col-sm-12 col-lg-5">
                  <!--                      <label>Size</label>-->
                  <div class="form-group mb-0">
                    <input type="text" class="form-control form-control-lg" placeholder="Size"
                           v-model="variant.size">
                  </div>
                </div>
                <div class="col-md-5 col-sm-12 col-lg-5">
                  <!--                      <label>Quantity</label>-->
                  <div class="form-group mb-0">
                    <input type="text" class="form-control form-control-lg" placeholder="Quantity"
                           v-model="variant.quantity">
                  </div>
                </div>
                <div class="col-md-2 col-sm-12 col-lg-2" v-if="product.variants.length > 1">
                  <button @click="removeVariant(index)" class="btn btn-danger btn-sm">x</button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <button class="btn btn-primary btn-sm flex justify-end" @click="addSize">Add Size</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row flex justify-center" v-if="product.variants[0].size !== ''">
          <div class="col-md-10 col-sm-12 col-lg-10">
            <div class="form-group">
              <span>Enter Price</span>
              <div class="row justify-start" v-for="variant in product.variants" v-if="variant.size !== ''">
                <div class="col-md-6 col-sm-6 col-lg-6">
                  <div class="form-group mb-0">
                    <input type="text" class="form-control form-control-lg" :value="variant.size" readonly>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-lg-6">
                  <div class="form-group mb-0">
                    <input type="text" class="form-control form-control-lg" placeholder="Price"
                           v-model="variant.price">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row flex justify-center">
          <div class="col-md-9 col-sm-12 col-lg-9">
            <label>Images</label>
            <div class="form-group">
              <div class="images">
                <div class="img" v-for="image in product.images"
                     :style="{ 'background-image': `url(${image})` }">
                </div>
                <div class="pic" @click="addProductImage">
                  add
                </div>
              </div>
              <div ref="widgetOpener"></div>
            </div>
          </div>
        </div>

        <div class="row flex justify-center">
          <div class="col-md-10 col-sm-12 col-lg-10">
            <div class="form-group">
              <div class="checkbox">
                <label class="text-base text-gray-800">
                  <input type="checkbox" class="form-check-input" v-model="product.featured">
                  <span class="text-primary">Is this a featured product?</span> <i class="input-frame"></i>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="row flex justify-center pt-8">
          <div class="col-md-10 col-sm-12 col-lg-10">
            <button class="btn btn-primary" @click="addProduct" :disabled="loading">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CreateProductForm',
    data() {
      return {
        seller: this.$cookies.get('helyos_seller'),
        product: {
          images: [],
          variants: [
            { size: '', quantity: '', price: '' }
          ]
        },
        loading: false,
      }
    },
    methods: {
      addProductImage() {
        if (process.client) {
          cloudinary.createUploadWidget({
            cloudName: process.env.CLOUDINARY_CLOUD_NAME,
            apiKey: process.env.CLOUDINARY_APIKEY,
            uploadPreset: process.env.CLOUDINARY_PRESET
          }, (error, result) => {
            if (result.event === 'success') {
              this.product.images.push(result.info.url)
            }
          }).open()
        }


      },

      addProduct() {
        this.loading = true
        // this.product.store_id = this.seller.store.id
        this.$axios.$post('seller/store/product/create', this.product, {
          headers: {
            'Authorization': 'Bearer ' + this.seller.token
          }
        })
          .then(response => {
            this.loading = false
            this.$notification.success('product added successfully')
            this.$router.push({ name: 'seller-products-all' })
          })
          .catch(error => {
            this.loading = false
            this.$notification.error('an error has occurred, try again')
          })
      },
      addSize() {
        this.product.variants.push({ size: '', quantity: '', price: '' })
      },

      removeVariant(index) {
        this.product.variants.splice(index, 1)
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
