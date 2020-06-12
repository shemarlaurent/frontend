<template>
  <article class="news-card">
    <div class="card-top">
      <div class="news-writer">
        <figure>
          <img :src="meta.writer.image" alt="img_avatar">
        </figure>
      </div>
      <div class="news-thumb">
        <figure>
          <img :src="meta.image" alt="news_article_image">
        </figure>
      </div>
    </div>
    <div class="card-bottom">
      <div class="title">{{meta.title}}</div>
      <div class="content">
        <p>{{meta.body}}</p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'NewsCard',
    props:{
      meta:{
        default(){
          return {
            title: 'Title',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eum in mollitia quidem sequi\n'
                  + '          soluta voluptate! Doloremque eveniet itaque molestias numquam officia! Dolorum et eveniet\n'
                  + '          necessitatibus nemo nisi nostrum, quia?',
            writer: {
              image: ''
            },
            image: ''
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .news-card {
    position: relative;
    min-width: 300px;
    max-width: 95%;
    min-height: 300px;
    overflow: hidden;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 10px;
    @apply my-3;
    .card-top {
      @apply relative overflow-hidden block;
      .news-thumb {
        position: relative;
        width: 100%;
        min-height: 200px;
        max-height: 200px;
        @apply object-cover object-center;
        background: #F8F8F8;
        border-bottom: 1px solid #C4C4C4;
        box-sizing: border-box;
        border-radius: 10px 10px 0px 0px;

        figure {

          img {
            @apply justify-center flex items-center text-xs text-h-200 w-full h-full absolute;
          }
        }
      }

      .news-writer {
        position: absolute;
        z-index: 10;
        width: 45px;
        height: 45px;
        right: 15px;
        top: 15px;
        background: #C4C4C4;
        @apply object-center object-cover rounded-full overflow-hidden;
        img, svg {
          @apply justify-center flex items-center text-xs text-h-200 w-full h-full absolute;
        }
      }
    }


    .card-bottom {
      @apply p-4;
      .title {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 47px;
        display: flex;
        align-items: flex-end;
        letter-spacing: 0.2625px;
        color: #000000;
      }

      .content {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.5;
        /* identical to box height, or 195% */
        display: flex;
        align-items: flex-end;
        letter-spacing: 0.2625px;

        color: #000000;
      }
    }
  }
</style>
