<template>
  <div>
    <div class="container">
      <div class="block w-full">
        <div class="news-login ">
          <div class="w-full flex justify-center">
            <nuxt-link :to="{name: 'news'}" class="object-contain object-center">
              <logo src="/news_logo.svg" :height="90" class="mx-auto"/>
            </nuxt-link>
          </div>
          <div class="headline font-semibold">
            Welcome Back, Hypebeast
          </div>

          <form class="mt-6" @submit="handleSubmit">
            <div class="form-control-group ">
              <label for="abyss-username">Username</label>
              <input type="text" name="username" required="required" id="abyss-username" class="form-control"
                     placeholder="Username">
            </div>
            <div class="form-control-group mt-10">
              <label for="abyss-password">Password</label>
              <input type="password" name="password" required="required" id="abyss-password" class="form-control"
                     placeholder="Password">
            </div>
            <div class="form-control-group text-center mt-6 border border-transparent">
              <button type="submit" class="btn px-8 py-3">Login</button>
            </div>
            <div class="w-full text-center block">
              <p class="text-sm">Dont have a FREE Account?
                <nuxt-link to="/" class="news-link">Sign up</nuxt-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'News-Login',
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        alert('Logging in')
      }
    }
  }
</script>

<style scoped lang="scss">
  .news-login {
    max-width: 400px;
    min-width: 300px;
    background: #FFFFFF;
    position: relative;
    @media (min-width: 768px) {
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    }
    @apply flex flex-col items-center mx-auto my-16 px-4 py-5;

    label {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 0;
      display: block;
      color: #000000;
    }

    [type='submit'] {
      background: #B9C0FF;
      border-radius: 10px;
      color: #ffffff;
      @appy px-4 py-2;
    }

    .news-link{
      color: #B9C0FF;
    }
  }
</style>
