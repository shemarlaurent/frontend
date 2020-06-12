<template>
  <div class="navbar-head">
    <navbar-top class="top" @plazma="goToPlazma()" @onToggleSidebar="toggleSideBar" @affiliate-modal="toggleAffiliateModal"
                @seller-modal="toggleSellerModal"  @delphi="goToDelphi()" />
    <navbar-side ref="sidebar" @plazma="goToPlazma()" @affiliate-modal="toggleAffiliateModal" @seller-modal="toggleSellerModal"/>

    <!--Seller modal-->
    <heylo-modal ref="seller-modal">
      <template slot-scope="props">
        <div class="flex w-screen justify-center items-center h-screen">
          <div class="relative bg-white left-0 top-0 shadow-lg" style="width: 300px;">
            <div class="px-12 py-6">
              <div class="headline text-center mb-4 block">Enter Seller code</div>
              <div class="">
                <form @submit="gotoSellerSignup" class="form">
                  <div class="form-control-group">
                    <label for="seller-zipcode" class="invisible w-0 h-0 absolute">Zip code</label>
                    <input type="text" class="form-control" name="seller-code" id="seller-zipcode"
                           placeholder="Seller code" v-model="seller"/>
                  </div>
                  <button @click.stop="props.toggleClose()" type="submit" class="btn btn-black rounded py-3 m-0 w-full">Enter Code</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </template>
    </heylo-modal>
    <!--Affiliate modal-->
    <heylo-modal ref="affiliate-modal">
      <template slot-scope="props">
        <div class="flex w-screen justify-center items-center h-screen">
          <div class="relative bg-white mb-6 shadow-lg" style="width: 300px;">
            <div class="px-12 py-6">
              <div class="headline text-center mb-4 block">Enter Affiliate code</div>
              <div class="">
                <form @submit="gotoAffliateSignup" class="form">
                  <div class="form-control-group">
                    <label for="affiliate-zipcode" class="invisible w-0 h-0 absolute">Affiliate code</label>
                    <input type="text" class="form-control" name="seller-code" id="affiliate-zipcode"
                           placeholder="Affiliate code" v-model="affiliate"/>
                  </div>
                  <button @click.stop="props.toggleClose()" type="submit" class="btn btn-black rounded py-3 m-0 w-full">Enter Code</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </template>
    </heylo-modal>
 
    <heylo-modal ref="no-entry">
      <template slot-scope="props">
        <div class="flex w-screen justify-center items-center h-screen">
          <div class="relative mb-6" style="">
            <no-entry/>
          </div>
        </div>
      </template>
    </heylo-modal>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        seller: '',
        affiliate: '',
        user: this.$cookies.get('helyos_user')
      }
    },
    methods: {
      toggleSideBar() {
        this.$refs['sidebar'].toggleOpen()
      },
      toggleAffiliateModal() {
        this.$refs['affiliate-modal'].toggleState()
      }, toggleSellerModal() {
        this.$refs['seller-modal'].toggleState()
      },
      gotoAffliateSignup(e){
        e.preventDefault()
        //  Go to affiliate
        this.$router.push({name: 'affiliate-auth-register', query: { token: this.affiliate} })
      },gotoSellerSignup(e){
        e.preventDefault()
        //  Go to affiliate
        this.$router.push({name: 'seller-auth-register', query: { token: this.seller} })

      },
      goToPlazma() {
        if (this.user.subscription) {
          this.$router.push({name: 'plazma'})
        }
        else {
          this.$refs['no-entry'].toggleState()
        }
      },
      goToDelphi() {
        if(this.user.subscription) {
          this.$router.push({ name: 'delphi'})
        } else {
          this.$refs['no-entry'].toggleState();
        }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
