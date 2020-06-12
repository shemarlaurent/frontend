<template>
  <div class=" bg-h-100 block">
    <div class="container ">
      <div class="block py-16 w-full  text-center">
        <div class="mb-12 block">
          <h2 class="headline-lg mb-4 font-bold">What's New on Helyos</h2>
          <p class="mt-2 mx-2">Sign up for Exclusive Early Sale access and Tailored new arrivals</p>
        </div>
        <form @submit="handleSubmit" class="form mx-2">
          <div class="lg:w-3/6 px-2 mx-auto">
            <div class="form-control-group block justify-center">
              <div class="floatable">
                <input type="email" required="required" class="form-control " id="newsletter-email" placeholder="Email address"/>
                <label for="newsletter-email">Email address</label>
              </div>
              <button class="btn py-4 px-6 btn-blue mt-4 rounded">Sign up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsletterSignup',
    methods: {
      handleSubmit(e) {
        e.preventDefault()
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
