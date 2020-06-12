<template>
  <div class="container my-12">
  <div class="flex flex-wrap justify-center">
  <div class="p-2">
    <div class="notice-card">
      <div class="div">
        <svg width="45" height="45" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M62.416 9.7915L84.2083 31.5956V62.4198L62.416 84.2082H31.5918L9.79167 62.4158V31.5917L31.5918 9.7915H62.416ZM59.1691 17.625H34.8349L17.6289 34.8388V59.173L34.8349 76.3828H59.1691L76.3789 59.173V34.8348L59.1691 17.6289V17.625ZM62.6667 43.0833H31.3333V50.9167H62.6667V43.0833Z"
                fill="black"/>
        </svg>
      </div>
      <div class="headline">All Gone</div>
      <div class="body">
        This feature is currently not
        avaiable for the rest of the day
        only 20 items are allowed to use
        this feature per day. Make sure you come back tomorrow and be one of the first 20.
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'AllGone'
  }
</script>

<style scoped lang="scss">
  .notice-card {
    position: relative;
    max-width: 300px;
    background: #FFFFFF;
    border-radius: 15px;
    padding: 15px;
    @apply flex flex-col items-center border border-h-200;
    .headline {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      letter-spacing: 1.6;
      color: #000000;
      margin: 4px auto 0;
    }

    .body {
      margin: 12px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: 1px;

      color: #878B8B;


    }
  }
</style>
