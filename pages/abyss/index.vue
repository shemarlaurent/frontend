<template>
  <div>
    <abyss-navbar></abyss-navbar>
    <div class="container">
      <div class="block my-10 ">
        <div class="headline text-center mb-5">
          Choose a forum about an item you have or want to have
        </div>
        <div class="relative overflow-y-auto my-6" v-if="forums.length">
          <heylo-swiper :navigation="false" :autoplay="false" :loop="false" :centered-slides="false" slidesPerView="3"
                        :breakpoints="breakpoints">
            <swiper-slide v-for="(forum, index) in forums" :key="`abyss-forum-card-${forum.id}`">
              <div class="block cursor-pointer" @click="goToForum(forum)">
                <div class="abyss-forum-card">
                  <!--You can replace this with your preferred text-->
                  <div class="w-full h-full relative">
                    <img class="transparent forum-image" :src="forum.image" alt="">
                  </div>
                </div>
                <div class="headline font-semibold my-4 capitalize w-64 truncate text-center">
                  {{ forum.product.name }}
                </div>
              </div>
            </swiper-slide>
          </heylo-swiper>
        </div>
        <div class="relative overflow-y-auto text-center my-6" v-else>
          No Forums available at this moment
        </div>
      </div>
    </div>
    <footer-section/>
  </div>
</template>

<script>
  export default {
    name: 'Abyss-Index',
    data() {
      return {
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 3,
            spaceBetween: 15
          }, 1260: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        },
        user: this.$cookies.get('helyos_abyss'),
        forums: [],
        userForums: []
      }
    },

    mounted() {
      this.getForums()
      this.getUserForums()
    },

    methods: {

      getForums() {
        this.$axios.$get('abyss/forums/all')
            .then(response => this.forums = response)
            .catch(error => error)
      },
      getUserForums() {
        if (this.user) {
          this.$axios.$get('abyss/forums/user-forums', {
                headers: {
                  'Authorization': 'Bearer ' + this.user.token
                }
              })
              .then(forums =>
                    {
                      this.userForums = forums.map(forum => forum.id)
                    })
              .catch(error => error)
        }
      },

      goToForum(forum) {
        console.log(forum)
        console.log(this.userForums.includes(forum.id))
        if (this.user) {

          if (this.userForums.includes(forum.id)) this.$router.push(
            { name: 'abyss-forum-feed', params: { forum: forum.id } })
          else this.$router.push({ name: 'abyss-pay-wall', query: { forum: forum.id, auth: true } })
        }
        else {
          this.$router.push({ name: 'abyss-pay-wall', query: { forum: forum.id, auth: false } })
        }
      }
    }

  }
</script>

<style scoped lang="scss">
  .abyss-navbar {
    @apply p-2;
  }

  .abyss-forum-card {
    position: relative;
    width: 300px;
    height: 500px;
    background: #C4C4C4;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #c4c4c4;
    @apply flex items-center justify-center text-4xl font-bold;
    transition: box-shadow .35s ease-in-out;
    .forum-image {
      @apply object-cover object-center h-full w-full;
      transition: all .35s ease-in-out;
    }

    &:hover {
      box-shadow: 0px 14px 14px -6px #c4c4c4;
      .forum-image {
        -webkit-box-shadow: 0px 7px 7px -6px #c4c4c4;
        -moz-box-shadow: 0px 7px 7px -6px #c4c4c4;
        transform: scale(1.05) rotate(.5deg);
      }
    }
  }
</style>
