<template>
  <div>
    <div class="block text-center">
      <div class="headline font-bold">
        Just one more step away from filling Your Closet
      </div>
    </div>
    <div class="m-12 block border border-transparent">
      <div class="form-control-group">
        <label for="signup-first-name">First Name</label>
        <input type="text" name="" id="signup-first-name" class="form-control" placeholder="First name">
      </div>
      <div class="form-control-group">
        <label for="signup-last-name">Last Name</label>
        <input type="email" name="" id="signup-last-name" class="form-control" placeholder="Last name">
      </div>
      <div class="form-control-group">
        <label for="signup-zip-code">Billing Zip Code</label>
        <input type="text" name="" id="signup-zip-code" class="form-control" placeholder="Billing zip code"/>
      </div>
      <div class="form-control-group">
        <label for="signup-card-number">Card Number</label>
        <input type="text" name="" id="signup-card-number" class="form-control" placeholder="Card number"/>
      </div>
      <div class="form-control-group">
        <label for="signup-expiration-data">Expiration Date (MM/YY)</label>
        <input type="date" name="" maxlength="5" id="signup-expiration-data" class="form-control"
               placeholder="Expiration Date (MM/YY)"/>
      </div>
      <div class="form-control-group">
        <label for="signup-card-cvv">Security Code (CVV)</label>
        <input type="text" maxlength="3" name="" id="signup-card-cvv" class="form-control"
               placeholder="Security Code (CVV)"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignUpFormInfo'
  }
</script>

<style scoped>

</style>
