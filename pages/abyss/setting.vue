<template>
  <div>
    <abyss-navbar class="border-b border-h-100">
      <template slot="aside-link">
        <div class="flex">
           <span class="btn btn-back flex items-center">
          Logout</span>
        </div>
      </template>
    </abyss-navbar>
    <div class="pt-6 pb-4">
      <div class="flex flex-wrap justify-between items-start">
        <div class="flex">
           <span class="btn btn-back flex items-center" @click="$router.go(-1)">
              <svg class="icon mr-1">
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
              Back
           </span>
        </div>

        <div class="ml-auto flex-auto px-2">
          <div class="headline text-center font-semibold pb-5">
            <span class="text-center">My Account</span> 
          </div>
          <div class="divider"></div>
          <div class="container">
            <div>
              <section><!--Left side-->
                <p class="sub-headline mx-2">Account</p>
                <div class="flex flex-wrap-reverse w-full my-4">
                  <div class="lg:w-1/3 w-full px-2">
                    <div class="form">
                      <div class="form-control-group">
                        <label for="acct-firstname">First name</label>
                        <input type="text" class="form-control" name="acct-firstname" id="acct-firstname"
                               v-model="form.first_name" :title="form.first_name"/>
                      </div>
                      <div class="form-control-group">
                        <label for="acct-lastname">Last name</label>
                        <input type="text" class="form-control" name="acct-firstname" id="acct-lastname"
                               v-model="form.last_name" :title="form.last_name"/>
                      </div>
                    </div>
                  </div>
                  <!--Right side-->
                  <!--Email section-->
                  <section class="flex flex-wrap justify-end flex-auto items-baseline mx-3">
                    {{ form.email }}
                    <button class="text-blue-500 mx-3 font-medium text-sm">Change E-mail</button>
                  </section>
                </div>
              </section>
              <hr>

              <section class="my-8 block">
                <p class="sub-headline mx-2">Password</p>

                <!--Left side-->
                <div class="lg:w-2/4 px-2">
                  <div class="form">
                    <div class="form-control-group">
                      <label for="acct-password-old">Old Password</label>
                      <input type="password" class="form-control" name="acct-password-old" id="acct-password-old"
                             v-model="form.oldPassword"/>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="w-full flex flex-wrap justify-around ">
                    <div class="lg:flex-1 px-2 w-full md:flex-1">
                      <div class="form">
                        <div class="form-control-group">
                          <label for="acct-password-new">New Password</label>
                          <input type="text" class="form-control" name="acct-password-new" id="acct-password-new"
                                 v-model="form.newPassword"/>
                        </div>
                      </div>
                    </div>
                    <div class="lg:flex-1 px-2 w-full md:flex-1">
                      <div class="form">
                        <div class="form-control-group">
                          <label for="acct-password-retype">Re-type Password</label>
                          <input type="text" class="form-control" name="acct-password-retype"
                                 id="acct-password-retype"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <hr>
              <!--Address section-->
              <section>
                <p class="sub-headline mx-2">Address</p>

                <div class="flex flex-wrap-reverse">
                  <div class="lg:w-2/4 block">
                    <div class="block w-full">
                      <div class="w-full flex-wrap flex ">
                        <div class="flex flex-wrap">
                          <div class="lg:flex-1 px-2 w-full md:flex-1">
                            <div class="form">
                              <div class="form-control-group">
                                <label for="acct-address">Address</label>
                                <input type="text" class="form-control" name="acct-address" id="acct-address"
                                       v-model="form.address"/>
                              </div>
                            </div>
                          </div>
                          <div class="lg:flex-1 px-2 w-full md:flex-1">
                            <div class="form">
                              <div class="form-control-group">
                                <label for="acct-city">City</label>
                                <input type="text" class="form-control" name="acct-city" id="acct-city"
                                       v-model="form.city"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="block w-full">
                      <div class="w-full flex-wrap flex justify-around ">
                        <div class="lg:flex-1 px-2 w-full md:flex-1">
                          <div class="form">
                            <div class="form-control-group">
                              <label for="acct-state">State/Province</label>
                              <input type="text" class="form-control" name="acct-state" id="acct-state"
                                     v-model="form.state"/>
                            </div>
                          </div>
                        </div>
                        <div class="lg:flex-1 px-2 w-full md:flex-1">
                          <div class="form">
                            <div class="form-control-group">
                              <label for="acct-zipcode">Zip code</label>
                              <input type="text" class="form-control" name="acct-zipcode" id="acct-zipcode"
                                     v-model="form.zip_code"/>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1 px-2">
                          <div class="form">
                            <div class="form-control-group">
                              <label for="acct-country">Country</label>
                              <div class="custom-input">
                                <select class="form-control"
                                        name="acct-country"
                                        id="acct-country"
                                        v-model="form.country"
                                        :title="form.country">
                                  <
                                  <option v-for="country in countryList" :key="country">{{ country }}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section class="flex flex-wrap justify-end flex-auto items-baseline mx-3">
                    <button class="text-blue-500 font-medium text-sm">Change Address</button>
                  </section>
                </div>
              </section>
              <section class="my-4">
                <div class="flex justify-end">
                  <button :disabled="loading" @click="update" class="btn btn-abyss boxed">{{ loading ? 'Updating...' :
                    'Save' }}
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div>

    </div>
  </div>
</template>

<script>
  import { countries } from 'countries-list'

  export default {
    name: 'account',
    data() {
      return {
        user: this.$cookies.get('helyos_abyss'),
        form: {},
        loading: false,
        countryList: null
      }
    },
    mounted() {
      this.countryList = Object.entries(countries).map(country => country[ 1 ].name)
      if (this.user) {
        this.form            = this.user
        this.form.first_name = this.form.name.split(' ')[ 0 ]
        this.form.last_name  = this.form.name.split(' ')[ 1 ]
      }
    },
    methods: {
      update() {
        this.loading = true

        this.form.name = this.form.first_name + ' ' + this.form.last_name
        this.$store
            .dispatch('auth/UPDATE_ABYSS', this.form)
            .then(() =>
                  {
                    this.loading = false
                    this.$notification.success('Updated successfully')
                  })
            .catch(error =>
                   {
                     this.loading = false
                     this.$notification.error('An error has occurred, try again')
                   })
      },
      addFirstName(e) {
        this.form.first_name = e.target.value
      },
      addLastName(e) {
        this.form.last_name = e.target.value
      }
    }
  }
</script>

<style scoped>

</style>
