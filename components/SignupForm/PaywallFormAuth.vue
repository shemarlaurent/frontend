<template>
  <div>
    <div class="lg:w-2/5 md:w-3/6 mx-auto">
      <div class="showdown block text-center">
        $1
      </div>
      <div class="block text-center">
        <div class="headline font-bold">
          Pay $1 to access the forum and at the end of the week one lucky person will win the exclusive item the forum
          was about
        </div>
      </div>
      <div class="m-12 block border border-transparent">
        <div class="form-control-group">
          <label for="signup-username">Username</label>
          <input type="text" name="" id="signup-username" class="form-control" placeholder="Username" v-model="abyss.username">
          <span v-if="errors.username.error" class="text-red-400 text-sm font-semibold">
            {{ errors.username.text }}
          </span>
        </div>
        <div class="form-control-group">
          <label for="signup-email">Email</label>
          <input type="email" name="" id="signup-email" class="form-control" placeholder="Email" v-model="abyss.email">
          <span v-if="errors.email.error" class="text-red-400 text-sm font-semibold">
            {{ errors.email.text }}
          </span>
        </div>
        <div class="form-control-group">
          <label for="signup-password">Password</label>
          <input type="password" name="" id="signup-password" class="form-control" placeholder="Password" v-model="abyss.password"/>
          <span v-if="errors.password.error" class="text-red-400 text-sm font-semibold">
            {{ errors.password.text }}
          </span>
        </div>

      </div>
    </div>
    <div class="form-control-group flex justify-end mt-6">
      <div @click.stop="onContinue" class="btn btn-abyss boxed">Continue</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PaywallFormAuth',
    props: ['abyss'],
    data() {
      return {
        errors: {
          username: { error: false, text: 'Username is required '},
          email: { error: false, text: 'Enter a valid email'},
          password: { error: false, text: 'Password is required'},
        }
      }
    },
    methods: {
      onContinue() {
        if (this.validate()) this.$emit('onContinue', this.abyss)
      },

      validate() {
        if (this.abyss.email && this.abyss.username && this.abyss.password) return true;
        else {
          if (!this.abyss.email) this.errors.email.error = true;
          if (!this.abyss.username) this.errors.username.error = true;
          if (!this.abyss.password) this.errors.password.error = true;
          return false;
        }
      }
    }
  }
</script>

<style scoped>

</style>
