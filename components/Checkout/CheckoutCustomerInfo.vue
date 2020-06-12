<template>
  <div>
    <div>
      <h3 class="headline my-10">Customer Information</h3>
    </div>

    <div class="cc-form">
      <div class="lg:flex md:flex">
        <div class="lg:w-1/2 md:w-1/2 w-full cc-form-control">
          <label for="cc-first-name" class="cc-label block">First name</label>
          <input type="text" id="cc-first-name" class="cc-form-control-input" placeholder="First name"  :value="user.name.split(' ')[0]">
        </div>
        <div class="lg:w-1/2 md:w-1/2 w-full cc-form-control">
          <label for="cc-last-name" class="cc-label block">Last name</label>
          <input type="text" id="cc-last-name" class="cc-form-control-input" placeholder="Last name"  :value="user.name.split(' ')[1]"/>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 md:w-1/2 w-full cc-form-control">
          <label for="cc-address" class="cc-label block">Address</label>
          <input type="text" id="cc-address" class="cc-form-control-input" placeholder="Address" v-model="data.address1"/>
        </div>
        <div class="lg:w-1/2 md:w-1/2 w-full cc-form-control">
          <label for="cc-country" class="cc-label block">Country</label>
          <input type="text" id="cc-country" class="cc-form-control-input" placeholder="Country" v-model="data.country"/>
        </div>
        <div class="lg:w-1/2 md:w-1/2 w-full cc-form-control">
          <label for="cc-city" class="cc-label block">Last name</label>
          <input type="text" id="cc-city" class="cc-form-control-input" placeholder="City" v-model="data.city"/>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 md:w-1/2 w-full cc-form-control">
          <label for="cc-postal" class="cc-label block">Postal Code</label>
          <div class="flex flex-wrap items-center cc-form-control-input-group relative overflow-hidden">
            <input type="text" id="cc-postal" ref="cc-postal" placeholder="Postal Code" v-model="data.postal_code"
                   class="flex-shrink input-group-control flex-auto ">
            <div class="bg-h-100 block flex-1">
              <button type="button" class="flex-grow-0 border-l border-h-20 input-group-btn w-full"
                      @click.stop="findPostalCode">
                <span class="mx-2">Find</span>
              </button>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 md:w-1/2 w-full cc-form-control">
          <label for="cc-phone" class="cc-label block">Phone</label>
          <input type="text" id="cc-phone" class="cc-form-control-input" placeholder="Phone" v-model="data.phone"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckoutCustomerInfo',
    props: ['user'],

    data() {
      return {
        data: {
          id: this.user.id
        },
      }
    },

    methods: {
      saveDetails() {
        this.data.name = this.user.name
        this.$store.dispatch('auth/UPDATE_USER', this.data);
      },
      findPostalCode() {
        if (this.postal) {
          alert('Finding postal code: ' + this.postal)
        } else {
          /*this.$refs['cc-postal'].setAttribute('placeholder', 'Please enter a valid postal code');*/
          this.$refs['cc-postal'].focus()
        }
      },
    }
  }
</script>

