<template>
  <div class="my-12 block font-sans">
    <div>
      <div class="mt-16 mb-6">
        <div class="flex flex-row justify-center items-center">
          <div class="headline font-bold flex-auto w-11/12 text-center">
            Account Settings
          </div>
          <div class="logout-area flex-1 hover:underline pr-4">
            <a @click.stop="logout" href="#">Logout</a>
          </div>
        </div>
      </div>
      <!-- <div ref="account-alert" class="text-center flex flex-wrap justify-center mx-2">
        <div class="alert info">
          <div class="symbol">
            <i>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M26.2167 5L35 13.7833V26.2167L26.2167 35H13.7833L5 26.2167V13.7833L13.7833 5H26.2167ZM31.6663 24.8333V15.1667L24.833 8.33333H15.1663L8.33295 15.1667V24.8333L15.1663 31.6667H24.833L31.6663 24.8333ZM19.9996 28.3333C19.0791 28.3333 18.333 27.5871 18.333 26.6667C18.333 25.7462 19.0791 25 19.9996 25C20.9201 25 21.6663 25.7462 21.6663 26.6667C21.6663 27.5871 20.9201 28.3333 19.9996 28.3333ZM18.333 11.6667H21.6663V23.3333H18.333V11.6667Z"
                      fill="#1D1D1D"/>
              </svg>
            </i>
          </div>
          <div class="content">
            <strong class="my-1 px-2 block">Verify your email address</strong>
            <p class="block px-2">
              To help keep your account secure, please verify your email address. Send a verification email to
              “example@email.com” or update your email address.
            </p>
            <button class="btn alert-btn px-6">
              Send verification email
            </button>
          </div>
        </div>
      </div> -->
    </div>
    <!--Membership section-->
    <div class="my-10 lg:mx-20 block">
      <div class="lg:px-2 px-4">
        <!--Account section-->
        <section>
          <!--Left side-->
          <!-- <div class="lg:w-1/3 w-full" v-if="form"> -->
          <div  class="flex mb-4" v-if="form">
            <div class="main-custom-card">
              <div class="custom-card">
                <li class="link" :class="{'activated': showMembership}" @click="toggleMembership()"  v-if="user.subscription || true">
                  Membership
                </li>
                <li class="link" :class="{'activated': showAccount}" @click="toggleAccount()">Account Information</li>
                <li class="link" :class="{'activated': showChangePassword}" @click="toggleChangePassword()">Change Password</li>
              </div>
            </div>
            <div class="ml-6 custom-card">
              <section v-if="showAccount">
                
                <p class="sub-headline ml-4">Account</p>
                <div class="flex form w-full">
                  <div class="form-control-group w-1/2 p-2" >
                    <label for="acct-firstname">First name</label>
                    <input
                      type="text"
                      class="form-control lg:w-full md:w-full"
                      name="acct-firstname"
                      id="acct-firstname"
                      @input="addFirstName"
                      v-model="form.first_name"
                      aria-labelledby="first_name"
                      :title="form.first_name"
                    />
                  </div>
                  <div class="form-control-group w-1/2 p-2">
                    <label for="acct-lastname">Last name</label>
                    <input
                      type="text"
                      class="form-control lg:w-full md:w-full"
                      name="acct-firstname"
                      id="acct-lastname"
                      @input="addLastName"
                      v-model="form.last_name"
                      :title="form.last_name"
                      aria-labelledby="last_name"
                    />
                  </div>
                </div>

                <section class="flex flex-wrap justify-end items-baseline my-6  mx-6">
                  <span :title="user.email">{{ user.email }}</span>
                  <button class="ml-3 font-medium text-blue-700">
                    Change E-mail
                  </button>
                </section>

                <section v-if="form">
                  <p class="sub-headline ml-4 mt-4">Address</p>
                  <div class="w-full">
                    <div class="block">
                      <div class="block w-full">
                        <div class="w-full flex-wrap flex justify-around ">
                          <div class="lg:flex-1 w-full md:flex-1 ">
                            <div class="form">
                              <div class="form-control-group">
                                <label for="acct-address">Address</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="acct-address"
                                  id="acct-address"
                                  v-model="form.address1"
                                  :title="form.address1"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="lg:flex-1 w-full md:flex-1 lg:ml-10">
                            <div class="form">
                              <div class="form-control-group">
                                <label for="acct-city">City</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="acct-city"
                                  id="acct-city"
                                  v-model="form.city"
                                  :title="form.city"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="block w-full">
                          <div class="w-full flex-wrap flex justify-around ">
                            <div class="lg:flex-1 w-full md:flex-1">
                              <div class="form">
                                <div class="form-control-group">
                                  <label for="acct-state">State/Province</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="acct-state"
                                    id="acct-state"
                                    v-model="form.state"
                                    :title="form.state"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="lg:flex-1 lg:ml-10 lg:flex w-full">
                              <div class="lg:flex-1 w-full flex-1 ">
                                <div class="form">
                                  <div class="form-control-group">
                                    <label for="acct-zipcode">Zip code</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      name="acct-zipcode"
                                      id="acct-zipcode"
                                      v-model="form.zip_code"
                                      :title="form.zip_code"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="lg:flex-1 flex">
                                <div class="lg:flex-1 w-full md:flex-1 ">
                                  <div class="form">
                                    <div class="form-control-group">
                                      <label for="acct-country">Country</label>
                                      <div class="custom-input">
                                        <select
                                          class="form-control"
                                          name="acct-country"
                                          id="acct-country"
                                          v-model="form.country"
                                          :title="form.country"
                                        >
                                          <option
                                            v-for="country in countryList"
                                            :key="country"
                                            >{{ country }}</option
                                          >
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>

              <section v-if="showMembership">
                <div class="w-full" v-if="!user.subscription">
                  <div class="flex lg:justify-end">
                    <nuxt-link
                      title="cancle membership"
                      :to="{ name: 'account-terminate' }"
                      class="btn btn-blue"
                      style="border-radius: 4px"
                      >Cancel membership</nuxt-link
                    >
                  </div>
                  <div class="flex w-full lg:justify-end mt-16">
                    <div class="lg:w-full">
                      <div class="visa-notice w-full">
                        <p class="w-full flex-auto lg:mx-6">
                            Card ending in 34 days<br>
                            Membership expires:<br>
                            Account will renew:<br>
                        </p>
                        <div class="flex items-center ">
                          <div style="border-radius: 4px" class="coat green primary ml-5 mr-4">Primary</div>
                          <span class="text-4xl mr-4 cursor-pointer"
                            >&times;</span
                          >
                        </div>
                      </div>
                      <div
                        class="my-2 flex flex-wrap items-end justify-between w-full"
                      >
                        <div class="my-3">
                          <!-- <strong
                            class="block"
                            :title="
                              `membership expires in ${formatDate(
                                user.subscription.ends_at
                              )}`
                            "
                          >
                            Membership expires:
                            {{ formatDate(user.subscription.ends_at) }}
                          </strong>
                          <strong
                            class="block"
                            :title="
                              `Account will renew:
                        ${addDates(user.subscription.ends_at, 1)}`
                            "
                          >
                            Account will renew:
                            {{ addDates(user.subscription.ends_at, 1) }}
                          </strong>-->
                        </div>
                        <div class="my-3"> 
                          <p>Change Payment option</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section v-if="showChangePassword">
                <section class="my-8 block">
                  <p class="sub-headline ml-4">Password</p>

                  <!--Left side-->
                  <div class="lg:w-2/4 lg:pr-6">
                    <div class="form">
                      <div class="form-control-group">
                        <label for="acct-password-old">Old Password</label>
                        <input
                          type="text"
                          class="form-control"
                          name="acct-password-old"
                          id="acct-password-old"
                          v-model="form.oldPassword"
                        />
                      </div>
                    </div>
                  </div>
                  <!--Change password-->
                  <div class="block w-full">
                    <div class="w-full lg:flex md:flex justify-between ">
                      <div class="block lg:w-2/4 w-full">
                        <div class="form">
                          <div class="form-control-group">
                            <label for="acct-password-new">New Password</label>
                            <input
                              type="text"
                              class="form-control"
                              name="acct-password-new"
                              id="acct-password-new"
                              v-model="form.newPassword"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="lg:w-2/4 block lg:ml-10 w-full">
                        <div class="form">
                          <div class="form-control-group">
                            <label for="acct-password-retype"
                              >Re-type Password</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              name="acct-password-retype"
                              id="acct-password-retype"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </div>
            <!--Right side-->
          </div>
          <!-- </div> -->
        </section>

  
        <hr>
        <!--Submit-->
        <section>
          <div class="flex justify-end">
            <button
              :disabled="loading"
              @click="update"
              class="btn btn-black boxed"
            >
              {{ loading ? 'Updating...' : 'Save' }}
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { countries } from 'countries-list'
export default {
  name: 'dashboard',
  middleware: 'user',

  data() {
    return {
      user: this.$cookies.get('helyos_user'),
      form: {},
      loading: false,
      countryList: null,
      showAccount: true,
      showMembership: false,
      showChangePassword: false
    }
  },
  mounted() {
    this.countryList = Object.entries(countries).map(country => country[1].name)
    if (this.user) {
      this.form = this.user
      this.form.first_name = this.form.name.split(' ')[0]
      this.form.last_name = this.form.name.split(' ')[1]
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/LOGOUT_USER').then(_ => this.$router.push('/'))
      window.location.reload();
    },
    update() {
      this.loading = true

      this.form.name = this.form.first_name + ' ' + this.form.last_name
      this.$store
        .dispatch('auth/UPDATE_USER', this.form)
        .then(() => {
          this.loading = false
          this.$notification.success('Updated successfully')
        })
        .catch(error => {
          this.loading = false
          this.$notification.error('An error has occurred, try again')
        })
    },
    addFirstName(e) {
      this.form.first_name = e.target.value
    },
    addLastName(e) {
      this.form.last_name = e.target.value
    },
    toggleAccount() {
      this.showAccount = true
      this.showMembership = false
      this.showChangePassword = false
    },
    toggleMembership() {
      this.showAccount = false
      this.showMembership = true
      this.showChangePassword = false
    },
    toggleChangePassword() {
      this.showAccount = false
      this.showMembership = false
      this.showChangePassword = true
    }
  }
}
</script>

<style scoped>
.visa-notice {
  padding: 7px;
  background: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto 15px;
}

.custom-card {
  background: #fff;
  border: 1px solid #ececec;
  padding: 2.5em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.link {
  list-style-type: none;
  padding: 5px 10px 5px 10px;
  margin: 10px;
  cursor: pointer;
}

.link:hover {
  background: #fafafa;
  /* color: #fff; */
}

.activated {
  border-left: 5px solid blue;
}
</style>
