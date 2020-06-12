<template>
  <div class="page-content-wrapper">
    <div class="page-content-wrapper-inner">
      <div class="viewport-header">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb has-arrow">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Products
            </li>
          </ol>
        </nav>
      </div>
      <div class="content-viewport">
        <div class="row">
          <div class="col-md-12 equel-grid">
            <div class="grid">
              <div class="grid-body py-3"><p class="card-title ml-n1">Order History</p></div>
              <div class="table-responsive">
                <table class="table table-hover table-sm">
                  <thead>
                  <tr class="solid-header">
                    <th colspan="2" class="pl-4">Customer</th>
                    <th>Order No</th>
                    <th>Purchased On</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td class="pr-0 pl-4">
                      <img class="profile-img img-sm" src="/assets/images/profile/male/image_4.png" alt="profile image">
                    </td>
                    <td class="pl-md-0">
                      <small class="text-black font-weight-medium d-block">Barbara Curtis</small>
                      <span>
                            <span class="status-indicator rounded-indicator small bg-primary"></span>
                            paid
                          </span>
                    </td>
                    <td>
                      <small>8523537435</small>
                    </td>
                    <td>Just Now</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <a class="border-top px-3 py-2 d-block text-gray" href="#">
                <small class="font-weight-medium">
                  <i class="mdi mdi-chevron-down mr-2"></i>
                  View All Order History
                </small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    middleware: 'seller',
    layout: 'seller'
  }
</script>

<style scoped>

</style>
