<template>
  <div class="container my-8 border border-transparent">
    <div class="flex justify-between">
      <nuxt-link :to="{name:'index'}"><logo/></nuxt-link>
      <div class="flex justify-end p-4 cursor-pointer" @click.stop="goBack">Back</div>
    </div>
    <form class="block w-full" @submit="createAccount">
      <div class="lg:w-2/5 md:w-3/6 mx-auto border border-transparent py-12">
        <keep-alive>
          <transition name="fade" :css="true">
            <div>
              <div class="block text-center">
                <div class="headline font-bold">
                  Welcome, Create your account, and start earning more with less.
                </div>
              </div>
              <div class="m-12 block border border-transparent">
                <div class="form-control-group">
                  <label for="signup-seller-name">Name</label>
                  <input type="text" name="" id="signup-seller-name" class="form-control" placeholder="Name">
                </div>
                <div class="form-control-group">
                  <label for="signup-seller-email">Email</label>
                  <input type="email" name="" id="signup-seller-email" class="form-control" placeholder="Email">
                </div>
                <div class="form-control-group">
                  <label for="signup-seller-password">Password</label>
                  <input type="password" name="" id="signup-seller-password" class="form-control"
                         placeholder="Password"/>
                </div>
                <div class="form-control-group">
                  <label for="signup-seller-store">Store Name</label>
                  <input type="text" name="" id="signup-seller-store" class="form-control" placeholder="Store Name"/>
                </div>
                <div class="form-control-group flex justify-end mt-6">
                  <div @click.stop="createAccount" class="btn btn-blue px-8 py-4">Create Account</div>
                </div>
              </div>
            </div>
          </transition>
        </keep-alive>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'seller',
    layout: 'auth',

    methods: {
      createAccount(e) {
        e.preventDefault()
        alert('Submitted form')
      },
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
