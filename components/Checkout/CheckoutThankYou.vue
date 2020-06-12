<template>
  <div>
    <div class="flex flex-col items-center my-16">
      <div class="my-2">
        <svg width="88" height="87" viewBox="0 0 88 87" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path
              d="M43.6645 85.2657C66.8109 85.2657 85.5748 66.5018 85.5748 43.3554C85.5748 20.2089 66.8109 1.44507 43.6645 1.44507C20.518 1.44507 1.75415 20.2089 1.75415 43.3554C1.75415 66.5018 20.518 85.2657 43.6645 85.2657Z"
              stroke="#0000FF" stroke-width="2.89037"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M34.9928 55.4089L22.94 43.3561L18.8357 47.4315L34.9928 63.5887L69.6772 28.9043L65.6018 24.8289L34.9928 55.4089Z"
                  stroke="#0000FF" stroke-width="2.89037"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="86.711" height="86.711" fill="white" transform="translate(0.308838)"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div class="text-center">
        <div class="my-2">
          <p class="font-bold">Bag Secured!!</p>
          <p class="font-bold">Thank You, for your Purchase</p>
        </div>
        <div class="my-2">
          <nuxt-link :to="{name: 'index'}" class="btn btn-black boxed">Go Home</nuxt-link>
          <nuxt-link :to="{name: 'account-order'}" class="btn btn-black boxed">View Orders</nuxt-link>
        </div>
      </div>
    </div>
    <div>
      <related-product/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckoutThankYou'
  }
</script>

<style scoped>

</style>
