<template>
  <div>
    <div>
      <h3 class="headline my-10">Shipping Information</h3>
    </div>
    <div class="cc-card">
      <div class="option capitalize" v-if="user">
        <ul class="listing">
          <li class="list-item">{{ user.name }}</li>
          <li class="list-item">{{ user.address1 }}</li>
          <li class="list-item">{{ user.country }}</li>
          <li class="list-item">{{ user.postal_code }}</li>
          <li class="list-item">Tel: {{ user.phone }}</li>
        </ul>
        <div class="flex">
          <div class="option-link">Edit address</div>
          <div class="option-link">
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                fill="#D4D9DD"
              />
            </svg>

            <span class="pl-1">Add New</span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="headline my-10">Shipping Method</h3>
    </div>
    <div class="flex flex-wrap">
      <div class="cc-card lg:w-1/2">
        <div class="option">
          <div class="flex items-center">
            <input
              type="radio"
              name="ship_method"
              class="mr-2"
              id="standard-delivery"
              value="standard"
              v-model="shipping"
            />
            <label
              for="standard-delivery"
              class="flex items-center justify-between w-full cc-label-name "
              >Standard delivery
            </label>
            <p class="cc-label-price">Free</p>
          </div>
          <span class="descr"
            >Estimated 14-20 Day Shipping (Duties and taxes may be due upon
            delivery)</span
          >
        </div>
      </div>
      <div class="cc-card  lg:w-1/2">
        <div class="option">
          <div class="flex items-center">
            <input
              type="radio"
              name="ship_method"
              class="mr-2"
              id="fast-delivery"
              value="fast"
              v-model="shipping"
            />
            <label
              for="fast-delivery"
              class="flex items-center justify-between w-full cc-label-name "
              >Fast Delivery</label
            >
            <p class="cc-label-price">$8.00</p>
          </div>
          <span class="descr">
            Estimated 2-5 Days Shipping (Duties and taxes may be due upon
            delivery)
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CheckoutShippingInfo',
  data() {
    return {
      user: this.$cookies.get('helyos_user'),
      shipping: null
    }
  },
  methods: {
    getDetails() {
      this.$emit('shipping-info', this.shipping)
    }
  }
}
</script>

<style scoped></style>
