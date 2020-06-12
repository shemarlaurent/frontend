<template>
  <div>
    <div class="container">
      <div class="block w-full">
        <div class="abyss-login ">
          <nuxt-link
            :to="{ name: 'abyss' }"
            class="  object-contain object-center"
          >
            <logo src="/abyss_logo.svg" :height="50" class="mx-auto" />
          </nuxt-link>
          <div class="headline mt-6 font-semibold text-center">
            Welcome Back, Hyperbeast
          </div>

          <form class="mt-10" @submit="handleSubmit">
            <div class="form-control-group ">
              <label for="abyss-username" class="abys-label"
                >Email Address</label
              >
              <input
                type="text"
                required="required"
                id="abyss-username"
                class="form-control abys-input"
                placeholder="Email Address"
                v-model="form.email"
              />
              <span v-if="error" class="text-sm text-red-600 font-sans"
                >invalid email address or password</span
              >
            </div>
            <div class="form-control-group mt-4">
              <label for="abyss-password" class="abys-label">Password</label>
              <input
                type="password"
                name="password"
                required="required"
                id="abyss-password"
                class="form-control abys-input w-100"
                placeholder="Password"
                v-model="form.password"
              />
            </div>

            <a href="#" class="abys-forgot">Forgot Password?</a>
            <div
              class="form-control-group text-center mt-6 border border-transparent"
            >
              <button :disabled="loading" type="submit" class="abyss-btn py-3">
                {{ loading ? 'Please wait...' : 'Sign in' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Abyss-Login',
  data() {
    return {
      form: {},
      loading: false,
      error: false
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.loading = true

      this.$axios
        .$post('abyss/login', this.form)
        .then(response => {
          this.loading = false
          this.$store.commit('auth/SAVE_AUTH_ABYSS', response)
          this.$notification.success('Authentication successful')
          this.$router.push('/abyss')
        })
        .catch(error => {
          if (error.response.status === 401) this.error = true
          this.form.password = ''
          this.loading = false
        })
    }
  }
}
</script>

<style scoped lang="scss">
.abys-forgot {
  font-weight: 600;
  font-size: 13.9863px;
  line-height: 14px;
  /* identical to box height, or 97% */

  letter-spacing: -0.112545px;
  text-decoration-line: underline;

  color: #9b9a9a;
}

.abys-label {
  font-style: normal;
  font-weight: 600 !important;
  font-size: 13.9863px !important;
  line-height: 14px;
  /* or 97% */

  letter-spacing: -0.112545px;

  color: #000000;
}
.abyss-login {
  max-width: 400px;
  min-width: 300px;
  background: #ffffff;
  position: relative;
  @media (min-width: 768px) {
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  }
  @apply mx-auto my-16 px-6 py-5;

  [type='submit'] {
    background: #001254;
    color: #ffffff;
    width: 100%;
  }
}
</style>
