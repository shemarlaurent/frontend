<template>
  <div class="container">
    <div class="my-4 p-4">
      <div class="headline-lg font-bold">Send Us Fashion New Sources</div>
      <div class="">
        <form @submit="handleSubmit" class="">
          <div class="form flex flex-wrap ">
            <div class="flex flex-grow flex-wrap">
              <div class="lg:w-1/2 md:w-1/2 w-full block form-control-group px-2">
                <div class="floatable">
                  <input type="text" placeholder="Website name" name="source-name" class="form-control"
                         required="required" v-model="websiteName"
                         id="source-name">
                  <label for="source-name">Website name</label>
                </div>
              </div>
              <div class="lg:w-1/2 md:w-1/2 w-full block form-control-group px-2">
                <div class="floatable">
                  <input type="text" placeholder="Site summary" name="source-summary" required="required"
                         class="form-control" id="source-summary" v-model="websiteSummary">
                  <label for="source-summary">Site summary</label>
                </div>
              </div>
              <div class="lg:w-1/2 md:w-1/2 w-full block form-control-group px-2">
                <div class="floatable">
                  <input type="text" placeholder="Web Address" name="source-address" class="form-control"
                         required="required" v-model="websiteAddress"
                         id="source-address">
                  <label for="source-address">Website Address</label>
                </div>
              </div>
            </div>
            <div class="m-4 flex self-end">
              <button class="bg-blue-800 rounded-full flex h-auto my-auto p-4 items-center text-white" type="submit">
                <span class="hidden sm:block xs:block px-3">Send</span>
                <svg width="20" height="20" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.00966549 17.3979L20.2975 8.69894L0.00966549 0L0 6.76585L14.4982 8.69894L0 10.632L0.00966549 17.3979Z"
                        fill="white"/>
                </svg>

              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'contactForm',
    data() {
      return {
        websiteName: null,
        websiteAddress: null,
        websiteSummary: null
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        alert('Form submitted')
      }
    }
  }
</script>

<style scoped>

</style>
