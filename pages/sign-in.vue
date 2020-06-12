<template>
  <div class="bg-white flex justify-center m-auto items-center">

    <div class="auth-card">
      <div class="headline">Sign In</div>
      <form @submit="handleSubmit" class="h-auth-form">
        <div class="mb-6">          
          <p class="font-bold text-lg text-center ">
            Welcome Back to Paradise
          </p>
        </div>
        <!--Form inputs-->
        <div class="form-control-group">
          <label for="auth-email" class="text-xs text-gray-700 ">Email</label>
          <input type="email" required name="auth-email" class="form-control" id="auth-email"
                 placeholder="Email address"/>
        </div>
        <div class="form-control-group">
          <label for="auth-password" class="text-xs text-gray-700 ">Password</label>
          <input type="password" required name="auth-password" class="form-control" id="auth-password"
                 placeholder="Password"/>
        </div>

        <div class="mb-2"><a href="" class="text-xs text-blue-500">Forgot Password</a></div>
        <div>
          <button class="btn-blue w-full btn btn-lg">Sign in</button>
          <label for="signin-checkbox"
                 class="text-xs text-gray-700 flex py-1 items-center w-full text-center self-center my-3">
            <t-checkbox value="accepted"
                        unchecked-value="not_accepted"
                        id="signin-checkbox"
                        name="single-checkbox"
            />
            <span class="ml-3">Keep me signed in until I sign out</span>
          </label>

          <div class="flex justify-center text-xs text-gray-700 mt-2">
            New here?&nbsp;<nuxt-link :to="{name: 'sign-up'}" class="text-blue-500">Sign up</nuxt-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'auth',
    name: 'sign-in',
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        alert('Attempting sign in')
      }
    }
  }
</script>