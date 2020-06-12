<template>
  <div class="flex items-center flex-col">
    <div>
      <div class="block mx-2 font-medium">
        Pick a size:
      </div>
      <div class="size-box flex flex-wrap w-full">
        <div v-for="variation in product.variations" :key="variation.id" class=" p-2 w-3/12">

        <div class=" size-box-item" :class="{active: variation.id === picked}"
             @click="pickSize(variation)">
          {{ variation.name }}
          </div>
        </div>
      </div>
      <div class="block my-3 w-full">
        <div :disabled="loading" class="btn btn-abyss boxed w-full" @click.stop="sendPicked">{{ loading ? 'Claiming Reward...' : 'Enter' }}</div>
      </div>
    </div>
    <div class="w-2/3">
      <p class="text-center text-xs">
        Please choose a size and press
        Enter to win the Free Giveaway
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AbyssSizePicker',
    middleware: 'abyss',
    props: ['forum_id', 'product'],
    data() {
      return {
        picked: null,
        price: {},
        loading: false
      }
    },
    methods: {
      pickSize(variation) {
        this.picked = variation.id
        this.price.product_id = this.product.id;
        this.price.product_variation = variation.id;
        this.price.amount = variation.price;
        this.price.size = JSON.parse(variation.name);
        // this.$emit('onPickSize', value)
      },
      sendPicked() {
        if (this.picked && !this.loading)
        {
          this.loading = true;

          this.$axios.$post(`abyss/forums/${this.forum_id}/claim`, this.price, {
            headers: {
              'Authorization': 'Bearer ' + this.user.token,
            }
          })
            .then(response => {
              this.$router.push('/abyss')
            })
            .catch(error => {
              this.$notification.error('An error has occurred try again')
              this.loading =false
              console.log(error.response.status);
            })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .size-box {

    .size-box-item {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #000000;
      background: #FFFFFF;
      border: 3px solid #F8F8F8;
      box-sizing: border-box;
      @apply flex py-4 px-2 justify-center text-center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      &:hover {
        @apply bg-h-100 cursor-pointer;
      }

      &.active {
        background: #FFFFFF;
        border: 3px solid #001254;
        box-sizing: border-box;
      }
    }
  }
</style>
