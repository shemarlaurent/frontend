<template>
  <div class="abyss-body">
    <abyss-navbar>
      <template slot="aside-link">
        <span class="font-medium">
          <nuxt-link :to="{name: 'abyss-setting'}">My Account</nuxt-link>
        </span>
      </template>
    </abyss-navbar>

    <div id="chats" class="pt-6 pb-4 container">
      <div class="flex justify-between items-center">
        <div class="flex">
           <span class="btn btn-back flex items-center text-xs">
              <svg class="icon mr-1">
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
              Back
           </span>
        </div>

        <div class="ml-auto flex-1">
          <div class="headline text-center font-semibold">
            <span class="-ml-32" v-if="forum.name">{{ forum.name }} Feed</span>
          </div>
        </div>
      </div>

      <div class="divider"></div>
    </div>

    <div class="block mb-24">
      <div class="container">
        <div v-if="!loading">
          <div class="" v-if="messages.length">
            <div v-for="message in messages" :key="message.id" class="chat-card">
              <div class="chat-head">
                <div class="flex items-center">
                  <div class="bg-h-200 rounded-full h-10 w-10 block relative object-center object-contain mr-4">
                    <span class=""></span>
                  </div>
                  <div class="font-semibold">{{ message.user.username }}</div>
                </div>

                <div>
                  <div class="cursor-pointer">
                    <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.75003 0C1.68751 0 0 1.68751 0 3.75003C0 5.81254 1.68751 7.50005 3.75003 7.50005C5.81254 7.50005 7.50005 5.81254 7.50005 3.75003C7.50005 1.68751 5.81254 0 3.75003 0ZM26.2499 6.00401e-05C24.1874 6.00401e-05 22.4999 1.68757 22.4999 3.75009C22.4999 5.8126 24.1874 7.50011 26.2499 7.50011C28.3124 7.50011 29.9999 5.8126 29.9999 3.75009C29.9999 1.68757 28.3124 6.00401e-05 26.2499 6.00401e-05ZM14.9999 6.00401e-05C12.9374 6.00401e-05 11.2499 1.68757 11.2499 3.75009C11.2499 5.8126 12.9374 7.50011 14.9999 7.50011C17.0624 7.50011 18.7499 5.8126 18.7499 3.75009C18.7499 1.68757 17.0624 6.00401e-05 14.9999 6.00401e-05Z"
                            fill="#C4C4C4"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="chat-body">
                <div class="chat-text">
                  {{ message.text }}
                </div>
                <div class="chat-media" v-if="message.attachment">
                  <div class="lg-cover-img extend-r">
                    <figure>
                      <img class="object-cover object-center" :src="message.attachment" alt="img-node">
                    </figure>
                  </div>


                  <heylo-modal ref="image-modal" :no-close="true">
                    <template slot-scope="props">
                      <div class="flex h-screen w-screen justify-center items-center relative">
                        <img :src="message.attachment" alt="img-node">
                      </div>
                    </template>
                  </heylo-modal>
                </div>
              </div>
            </div>

          </div>
          <div v-else>
            <div class="text-center text-base font-sans text-gray-800">Begin Conversation</div>
          </div>
        </div>
        <div v-else>
          <preloader/>
        </div>
      </div>
    </div>
    <div class="border-t border-h-200 fixed bottom-0 w-screen h-auto bg-white" id="form">
      <div class="m-1">
        <form @submit="sendMessage" class="flex items-center justify-around">
          <div class="mx-1">
            <svg class="hicon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M30.8494 21.8931C29.2006 21.8931 27.864 20.5565 27.864 18.9077C27.864 17.2589 29.2006 15.9223 30.8494 15.9223C32.4982 15.9223 33.8348 17.2589 33.8348 18.9077C33.8348 20.5565 32.4982 21.8931 30.8494 21.8931ZM16.9173 21.8931C15.2685 21.8931 13.9318 20.5565 13.9318 18.9077C13.9318 17.2589 15.2685 15.9223 16.9173 15.9223C18.5661 15.9223 19.9027 17.2589 19.9027 18.9077C19.9027 20.5565 18.5661 21.8931 16.9173 21.8931ZM23.8832 31.8445C26.8288 31.8445 29.3565 30.2324 30.7497 27.864H34.0735C32.4812 31.9441 28.5206 34.83 23.8832 34.83C19.2458 34.83 15.2851 31.9441 13.6929 27.864H17.0167C18.4099 30.2324 20.9375 31.8445 23.8832 31.8445ZM23.8635 3.98047C34.8698 3.98047 43.7863 12.897 43.7863 23.8834C43.7863 34.8698 34.8698 43.7863 23.8635 43.7863C12.8771 43.7863 3.98047 34.8698 3.98047 23.8834C3.98047 12.897 12.8771 3.98047 23.8635 3.98047ZM23.8834 39.8057C32.6805 39.8057 39.8057 32.6805 39.8057 23.8834C39.8057 15.0863 32.6805 7.96107 23.8834 7.96107C15.0863 7.96107 7.96108 15.0863 7.96108 23.8834C7.96108 32.6805 15.0863 39.8057 23.8834 39.8057Z"
                    fill="black"/>
            </svg>
          </div>
          <div class="mx-1" @click="addImage">
            <svg class="hicon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M32.8397 11.9417V34.83C32.8397 39.2286 29.277 42.7912 24.8785 42.7912C20.4799 42.7912 16.9173 39.2286 16.9173 34.83V9.9514C16.9173 7.2048 19.1464 4.97567 21.8931 4.97567C24.6397 4.97567 26.8688 7.2048 26.8688 9.9514V30.8495C26.8688 31.9441 25.9731 32.8398 24.8785 32.8398C23.7838 32.8398 22.8882 31.9441 22.8882 30.8495V11.9417H19.9028V30.8495C19.9028 33.5961 22.1319 35.8252 24.8785 35.8252C27.6251 35.8252 29.8542 33.5961 29.8542 30.8495V9.9514C29.8542 5.55286 26.2916 1.99023 21.8931 1.99023C17.4945 1.99023 13.9319 5.55286 13.9319 9.9514V34.83C13.9319 40.8805 18.828 45.7766 24.8785 45.7766C30.929 45.7766 35.8251 40.8805 35.8251 34.83V11.9417H32.8397Z"
                    fill="black"/>
            </svg>
          </div>
          <div class="flex-auto px-2">
            <label for="shoe-feed-message" class="invisible w-0 absolute h-0">Message</label>
            <input type="text" id="shoe-feed-message" class="form-control" placeholder="Text" v-model="message.text"/>
          </div>
          <div class="flex-auto flex-shrink-0 flex-grow-0 mx-1">
            <button :disabled="sending" type="submit" class="btn btn-abyss rounded-lg px-6">Send</button>
          </div>
        </form>
      </div>
    </div>

    <heylo-modal ref="report-modal" :no-close="true">
      <template slot-scope="props">
        <div class="flex h-screen w-screen justify-center items-center">
          <div class="report-card">
            <div>
              <div class="headline text-center font-bold">
                Welcome to Abyss
              </div>
            </div>
            <div>
              <p class="report-message">

                We are glad you’ve become a member,
                However there’s one last step before we can begin. In order for you to be placed in the giveaway you must
                enter your address in the Settings.
              </p>
              <div class="flex w-full justify-center">
                <div class="btn btn-abyss py-2 px-10" @click="props.toggleClose()">OK</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </heylo-modal>

  </div>
</template>

<script>
  export default {
    name: 'feed',
    layout: 'empty',
    middleware: 'abyss',
    data() {
      return {
        user: this.$cookies.get('helyos_abyss'),
        forum: {},
        message: {
          text: '',
          attachment: null
        },
        messages: [],
        loading: false,
        sending: false
      }
    },
    mounted() {
      this.getForumMessages();
      this.scroll();
      this.initPusher();
      this.getForum();
      // this.checkIfWinner();
      // this.checkAddressExistence();
    },
    methods: {
      initPusher() {
        const channel = pusher.subscribe('abyss');
        channel.bind('App\\Events\\Abyss\\MessageSent', (message) => {
          if (message.message.abyss_forum_id === parseInt(this.forum)) {
            this.messages.push(message.message);
            this.scroll();
          }
        })
      },
      scroll() {
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#form").offset().top * 10
        }, 'slow');
      },
      getForumMessages() {
        this.loading = true;
        this.$axios.$get(`abyss/forums/${this.$route.params.forum}/messages`)
          .then(messages => {
            this.loading = false;
            if (messages.length) this.messages = messages;
          })
          .catch(error => {
            this.loading = false;
            this.error = true;
          })
      },

      getForum() {
        this.$axios.$get(`abyss/forums/${this.$route.params.forum}`)
          .then(forum => {
            this.forum = forum;

            this.checkIfWinner();
          })
          .catch(error => {
            if (error.response.status === 404){
              this.$router.push('/abyss');
            }
          })
      },
      sendMessage(e) {
        e.preventDefault()
        this.sending = true;
        let message = this.message;


        console.log(message)
        this.$axios.$post(`abyss/forums/${this.forum.id}/send`, message, {
          headers: {
            'Authorization': 'Bearer ' + this.user.token
          }
        })
          .then(message => {
            this.sending = false;
            this.message.text = '';
            this.message.attachment = '';
          })
          .catch(error => {
            this.sending = false;
            console.log(error.response.data)
          })

      },
      checkAddressExistence() {
        if (!this.hasAddress) {
          this.$refs['report-modal'].modalOpen()
        }
      },

      checkIfWinner() {
        if (this.forum && this.forum.winner) {
          if (this.forum.winner.abyss_user_id === this.user.id) {
            this.$router.push({ name: 'abyss-forum-congrats', params: { forum: this.forum.id }})
          }
        }
      },

      addImage() {
        if (cloudinary)
        {
          cloudinary.createUploadWidget({
            cloudName: process.env.CLOUDINARY_CLOUD_NAME,
            apiKey: process.env.CLOUDINARY_APIKEY,
            uploadPreset: process.env.CLOUDINARY_PRESET
          }, (error, result) => {
            console.log(error);
            console.log(result);
            if (result.event === 'success') {
              this.message.attachment = result.info.url
            }
          }).open()
        }

      },
      toggleModal() {
        this.$refs['image-modal'].modalOpen()
      }
    },
    computed: {
      hasAddress() {
        return false
      }
    }
  }
</script>

<style lang="scss">
  .chat-card {
    @apply px-4 my-2;
    .chat-head {
      @apply flex justify-between items-center;
    }

    .chat-body {
      @apply flex justify-between items-start py-4 flex-wrap;
      .chat-text {
        @apply flex-1 flex-shrink-0 py-4;
        @media (max-width: 768px) {
          @apply w-full flex-auto;
        }
      }

      .chat-media {
        @apply flex-1 flex-shrink-0 py-4;
        @media (max-width: 768px) {
          @apply w-full flex-auto;
        }
      }
    }
  }

</style>
