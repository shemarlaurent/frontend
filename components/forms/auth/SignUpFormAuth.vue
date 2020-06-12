<template>
  <div>
    <div class="block text-center">
      <div class="headline font-bold">
        Welcome to Helyos, sign up and enjoy all the perk that come with being a member.
      </div>
    </div>
    <div class="m-12 block border border-transparent">
      <div class="form-control-group">
        <label for="referral-token">Referral Token (optional)</label>
        <input type="text" name="" id="referral-token" class="form-control" placeholder="Token" v-model="form.token">
      </div>
      <div class="form-control-group">
        <label for="signup-email">Email</label>
        <input type="email" name="" id="signup-email" class="form-control" placeholder="Email" v-model="form.email">
      </div>
      <div class="form-control-group">
        <label for="signup-password">Password</label>
        <input type="password" name="" id="signup-password" class="form-control" placeholder="Password" v-model="form.password"/>
      </div>
      <div class="form-control-group flex justify-end mt-6">
        <div @click.stop="onContinue" class="btn btn-blue px-8 py-4" :disabled="loading">Continue</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignUpFormAuth',
    data() {
      return {
        form: {
          token: null,
        },
        loading: false
      }
    },
    methods: {

      onContinue() {
        if (this.form.email !== null && this.form.password !== null) {
          this.$emit('onContinue', this.form)
        }
      }
    }
  }
</script>

<style scoped>

</style>
