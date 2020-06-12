<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="flex justify center">
          <div class="row flex justify-center">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="csv">Choose CSV</label>
                  <input type="file" id="csv" class="form-control form-control-lg" @change="loadCsv" placeholder="Add CSV file to upload">
                </div>
              </div>
              <div class="col-md-12">
                <button class="btn btn-primary btn-sm flex justify-end" @click="addCSV">Add CSV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="products.length">
      <div class="col-md-12">
        <div class="flex justify center">
          <div class="row flex justify-center">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="csv">Add Images</label>
                  <div class="form-group">
                    <div class="images">
                      <div class="img" v-for="image in images"
                           :style="{ 'background-image': `url(${image})` }">
                      </div>
                      <div class="pic" @click="addProductImages">
                        add
                      </div>
                    </div>
                    <div ref="widgetOpener"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="products.length">
      <div class="col-md-10 col-sm-12 col-lg-10">
        <button class="btn btn-primary" @click="addProducts" :disabled="loading">
          Add Product
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Papa from 'papaparse'
  export default {
    name: 'CreateProductCsv',
    data() {
    return {
      seller: this.$cookies.get('helyos_seller'),
      csv: null,
      products: [],
      images: ["http://res.cloudinary.com/elox/image/upload/v1578993147/products/ffw29o6kiod2brf1ugsy.jpg","http://res.cloudinary.com/elox/image/upload/v1578993148/products/l3u2s9jvfi1uiicrt9wk.png"],
      loading: false
    }
  },
    methods: {
      loadCsv(e) {
        this.csv = e.target.files[0];
      },

      addCSV() {
        let vm = this;
        Papa.parse(this.csv, {
          complete: function(results) {
            vm.parsedCSV = results.data
            vm.getEntries(results.data);
          }
        });
      },

      getEntries(results) {
        let labels = results[0];
        results.splice(0,1);
        results.forEach(item => {
          if (item.length > 1) {
            let product = {};
            product.name = item[0];
            product.brand = item[1];
            product.description = item[2];
            product.featured = item[3];
            product.variants = JSON.parse(item[4].split('-').join(','))
            this.products.push(product)
          }
        })
      },

      addProductImages() {
        if (process.client) {
          cloudinary.createUploadWidget({
            cloudName: process.env.CLOUDINARY_CLOUD_NAME,
            apiKey: process.env.CLOUDINARY_APIKEY,
            uploadPreset: process.env.CLOUDINARY_PRESET
          }, (error, result) => {
            if (result.event === 'success') {
              this.images.push(result.info.url)
            }
          }).open()
        }


      },
      addProducts(){
        this.loading = true
        // this.product.store_id = this.seller.store.id
        this.$axios.$post('seller/store/product/createCsv', {
          products: this.products,
          images: this.images
        }, {
          headers: {
            'Authorization': 'Bearer ' + this.seller.token
          }
        })
          .then(response => {
            this.loading = false
            this.$notification.success('products added successfully')
            this.$router.push({ name: 'seller-products-all' })
          })
          .catch(error => {
            this.loading = false
            this.$notification.error('an error has occurred, try again')
          })
      }

    },
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
