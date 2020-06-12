<template>
  <div class="container my-12">
    <div class="flex flex-wrap justify-center">
  <div class="p-2">
    <div class="notice-card">
      <div class="div">
        <svg width="45" height="45" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M67.5 30H75C77.0711 30 78.75 31.6789 78.75 33.75V78.75C78.75 80.8211 77.0711 82.5 75 82.5H15C12.9289 82.5 11.25 80.8211 11.25 78.75V33.75C11.25 31.6789 12.9289 30 15 30H22.5V26.25C22.5 13.8236 32.5736 3.75 45 3.75C57.4264 3.75 67.5 13.8236 67.5 26.25V30ZM41.2502 58.9952V67.5002H48.7502V58.9952C51.69 57.2979 53.1232 53.8377 52.2447 50.5589C51.3661 47.28 48.3948 45 45.0002 45C41.6057 45 38.6343 47.28 37.7558 50.5589C36.8772 53.8377 38.3105 57.2979 41.2502 58.9952ZM60 26.25V30H30V26.25C30 17.9657 36.7157 11.25 45 11.25C53.2843 11.25 60 17.9657 60 26.25Z"
                fill="black"/>
        </svg>
      </div>
      <div class="headline">No Entry</div>
      <div class="body">
        Sorry, it seems as if you dont have the correct level of access to enter this feature. If you desire to
        enter please upgrade your membership status to a high level.
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NoEntry'
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
