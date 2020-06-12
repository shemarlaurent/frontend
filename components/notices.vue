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
    name: 'notices'
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
