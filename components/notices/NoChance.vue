<template>
  <div class="container my-12">
    <div class="flex flex-wrap justify-center">
  <div class="p-2">
    <div class="notice-card">
      <div class="div">
        <svg width="45" height="45" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M38.75 77.5005H23.25V85.2505H15.5V77.5005H11.625C9.4849 77.5005 7.75 75.7656 7.75 73.6255V15.5005C7.75 13.3604 9.4849 11.6255 11.625 11.6255H38.75V6.16172C38.7503 5.59248 39.0008 5.05216 39.4352 4.68423C39.8695 4.3163 40.4437 4.15799 41.0052 4.25135L82.0105 11.0868C83.879 11.3975 85.2491 13.0134 85.25 14.9076V23.2505H89.125V31.0005H85.25V58.1255H89.125V65.8755H85.25V74.2183C85.2491 76.1125 83.879 77.7284 82.0105 78.0391L77.5 78.7908V85.2505H69.75V80.0851L41.0052 84.8746C40.4437 84.9679 39.8695 84.8096 39.4352 84.4417C39.0008 84.0738 38.7503 83.5335 38.75 82.9642V77.5005ZM46.5 76.1063L77.5 70.937V18.1905L46.5 13.0251V76.1024V76.1063ZM58.125 44.5625C58.125 49.91 60.729 54.25 63.9375 54.25C67.146 54.25 69.75 49.91 69.75 44.5625C69.75 39.215 67.146 34.875 63.9375 34.875C60.729 34.875 58.125 39.215 58.125 44.5625Z"
                fill="black"/>
        </svg>
      </div>
      <div class="headline">No Chances</div>
      <div class="body">
        Sorry, it seems as if you have used up all of your Pick Your Price chances for the month. Either update to
        acquire more chances or wait until next month when your chance resume.
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NoChance'
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
