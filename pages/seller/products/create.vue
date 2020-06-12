<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item">
              <nuxt-link to="/home">Dashboard</nuxt-link>
            </li>
            <li class="breadcrumb-item">
              <nuxt-link to="/stores/products">Products</nuxt-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Create Product</li>
          </ol>
        </nav>
      </div>
      <div class="content-viewport">
        <div class="row flex justify-center">
          <div class="col-md-9">
            <div class="grid">
              <div class="grid-body"><h2 class="grid-title">Create Product</h2>
                <div class="item-wrapper">
                  <div class="tab-container">
                    <ul class="nav nav-pills ml-0" id="bt-tab_7" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="bt-tab_7_1" data-toggle="tab" href="#bt-content_7_1" role="tab" aria-controls="bt-content_7_1"
                                              aria-selected="true">
                          <i class="mdi mdi-format-list-checkbox"></i>
                          <span class="tab-tittle prepend">Form</span>
                        </a>
                      </li>
                      <li class="nav-item"><a class="nav-link" id="bt-tab_7_2" data-toggle="tab" href="#bt-content_7_2" role="tab" aria-controls="bt-content_7_2" aria-selected="false">
                        <i class="mdi mdi-inbox-multiple"></i>
                        <span class="tab-tittle prepend">CSV Upload</span>
                      </a>
                      </li>
                    </ul>
                    <div class="tab-content" id="bt-tab_content_7">
                      <div class="tab-pane show active" id="bt-content_7_1" role="tabpanel" aria-labelledby="bt-tab_7_1">
                        <create-product-form/>
                      </div>
                      <div class="tab-pane" id="bt-content_7_2" role="tabpanel" aria-labelledby="bt-tab_7_2">
                        <create-product-csv/>
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

  import CreateProductForm from '../../../components/seller/CreateProductForm'
  import CreateProductCsv from '../../../components/seller/CreateProductCsv'
  export default {
    components: { CreateProductCsv, CreateProductForm },
    middleware: 'seller',
    layout: 'seller',
    head: {
      title: 'Add Product to store'
    },




  }
</script>



