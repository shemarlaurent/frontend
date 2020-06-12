<template>
  <div>
    <div class="block text-center">
      <div class="headline font-bold">
        Welcome to Helyos, sign up and enjoy all the perk that come with being a member.
      </div>
    </div>
    <div class="m-12 block border border-transparent">
      <div class="form-control-group">
        <label for="signup-username">Username</label>
        <input type="text" name="" id="signup-username" class="form-control" placeholder="Username">
      </div>
      <div class="form-control-group">
        <label for="signup-email">Email</label>
        <input type="email" name="" id="signup-email" class="form-control" placeholder="Email">
      </div>
      <div class="form-control-group">
        <label for="signup-password">Password</label>
        <input type="password" name="" id="signup-password" class="form-control" placeholder="Password"/>
      </div>
      <div class="form-control-group flex justify-end mt-6">
        <div @click.stop="onContinue" class="btn btn-blue px-8 py-4">Continue</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignUpFormAuth',
    methods: {
      onContinue() {
        this.$emit('onContinue')
      }
    }
  }
</script>

<style scoped>

</style>
