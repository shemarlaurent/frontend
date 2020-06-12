<template>
  <div class="my-12 block ">
    <div>
      <user-likes-listing :likes="likes"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'likes',
    middleware: 'user',
    data() {
      return {
        user: this.$cookies.get('helyos_user'),
        likes: []
      }
    },

    mounted() {
      this.getLikes();
    },

    methods: {
      getLikes() {
        this.$axios.$get('likes', {
          headers: {
            'Authorization': 'Bearer ' + this.user.token
          }
        })
          .then(likes => this.likes = likes)
      }
    }
  }
</script>

<style>
</style>
