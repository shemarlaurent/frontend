<template>
  <div class="">
    <div class="static block container">
      <!--like or unlike section-->
        <div class="flex ">
          <div class="relative flex" v-if="notLiked">
            <!--Thumbs up-->
            <heylo-popup>
              <template slot-scope="props">
                <div
                  href="#"
                  @click.stop="props.pop()"
                  title="thumbs up"
                  class="flex items-center flex-shrink-0 ml-4 text-h-300 hover:text-black w-auto flex-1 p-3 leading-none cursor-pointer relative"
                >
                  <svg
                    width="23"
                    height="21"
                    class="fill-current"
                    viewBox="0 0 23 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.2356 7.79981H20.4756C21.5526 7.79981 22.4256 8.67286 22.4256 9.74981V11.8012C22.4259 12.056 22.3762 12.3085 22.2794 12.5442L19.2618 19.8713C19.1112 20.2367 18.755 20.475 18.3599 20.4748H1.95059C1.41211 20.4748 0.975586 20.0383 0.975586 19.4998V9.74981C0.975586 9.21134 1.41211 8.77481 1.95059 8.77481H5.34555C5.6623 8.77489 5.95935 8.62109 6.14212 8.36239L11.4588 0.828544C11.5977 0.631723 11.8595 0.565854 12.075 0.673519L13.8437 1.55785C14.8692 2.07044 15.3989 3.22845 15.116 4.33953L14.2356 7.79981ZM6.82457 10.3232V18.5249H17.7056L20.4746 11.8013V9.74987H14.2346C13.6328 9.74979 13.0647 9.47182 12.6953 8.99667C12.326 8.52152 12.1967 7.90245 12.345 7.31919L13.2255 3.85988C13.2822 3.63754 13.1763 3.40571 12.971 3.30316L12.3265 2.98141L7.73425 9.48662C7.4905 9.83177 7.1785 10.1145 6.82457 10.3232ZM2.92471 10.7249H4.87472V18.525H2.92471V10.7249Z"
                    />
                  </svg>
                </div>
              </template>
              <!--Popup for product size chooser-->
              <template slot="popup-content" slot-scope="props">
                <div class="absolute mt-16 left-0 ">
                  <single-product-size-chooser-popup
                    :variations="product.variations"
                    :with-price="false"
                    @close="props.pop()"
                    @onPick="setPicked"
                  />
                </div>
              </template>
            </heylo-popup>
            <!--Thumb down-->
            <span
              @click="dislike()"
              title="thumbs down"
              class="flex items-center flex-shrink-0 text-h-300 hover:text-black p-3 leading-tight h-full cursor-pointer relative"
            >
              <svg
                width="23"
                class="fill-current"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.95955 13.2834H2.71954C1.64258 13.2834 0.769532 12.4104 0.769532 11.3334V9.28202C0.769269 9.02719 0.818956 8.77478 0.915783 8.53907L3.93439 1.2129C4.0845 0.847501 4.44026 0.608788 4.83529 0.608398H21.2446C21.7831 0.608398 22.2196 1.04492 22.2196 1.5834V11.3334C22.2196 11.8719 21.7831 12.3084 21.2446 12.3084H17.8496C17.5329 12.3083 17.2358 12.4621 17.053 12.7209L11.7364 20.2537C11.5975 20.4505 11.3356 20.5164 11.1202 20.4087L9.3515 19.5234C8.32596 19.0108 7.79627 17.8528 8.07912 16.7418L8.95955 13.2834ZM16.3701 10.7601V2.55842H5.48912L2.72011 9.28204V11.3334H8.96013C9.56195 11.3335 10.13 11.6115 10.4994 12.0866C10.8688 12.5618 10.998 13.1809 10.8497 13.7641L9.96925 17.2234C9.91248 17.4458 10.0184 17.6776 10.2237 17.7802L10.8682 18.1019L15.4605 11.5967C15.7042 11.2515 16.0162 10.9688 16.3701 10.7601ZM20.2696 10.3584H18.3196V2.55842H20.2696V10.3584Z"
                />
              </svg>
            </span>
          </div>
          <div class="relative flex" v-else>
            <div href="#" title="thumbs up" v-if="!liked"
              class="flex items-center flex-shrink-0 ml-4 text-h-300 hover:text-black w-auto flex-1 p-3 leading-none cursor-pointer relative"
            >   
              <svg
                width="23"
                height="21"
                class="fill-current"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2356 7.79981H20.4756C21.5526 7.79981 22.4256 8.67286 22.4256 9.74981V11.8012C22.4259 12.056 22.3762 12.3085 22.2794 12.5442L19.2618 19.8713C19.1112 20.2367 18.755 20.475 18.3599 20.4748H1.95059C1.41211 20.4748 0.975586 20.0383 0.975586 19.4998V9.74981C0.975586 9.21134 1.41211 8.77481 1.95059 8.77481H5.34555C5.6623 8.77489 5.95935 8.62109 6.14212 8.36239L11.4588 0.828544C11.5977 0.631723 11.8595 0.565854 12.075 0.673519L13.8437 1.55785C14.8692 2.07044 15.3989 3.22845 15.116 4.33953L14.2356 7.79981ZM6.82457 10.3232V18.5249H17.7056L20.4746 11.8013V9.74987H14.2346C13.6328 9.74979 13.0647 9.47182 12.6953 8.99667C12.326 8.52152 12.1967 7.90245 12.345 7.31919L13.2255 3.85988C13.2822 3.63754 13.1763 3.40571 12.971 3.30316L12.3265 2.98141L7.73425 9.48662C7.4905 9.83177 7.1785 10.1145 6.82457 10.3232ZM2.92471 10.7249H4.87472V18.525H2.92471V10.7249Z"
                />
              </svg>
            </div>
            <div href="#" title="thumbs up liked" v-else
              class="flex items-center flex-shrink-0 ml-4 text-h-300 hover:text-black w-auto flex-1 p-3 leading-none cursor-pointer relative"
            >
              <svg width="23" height="21" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1567 0.305771L11.8661 11.5964C11.5352 11.9272 11.3493 12.3759 11.3492 12.8437V33.2833C11.3492 34.2577 12.139 35.0475 13.1133 35.0475H32.2193C32.9342 35.0478 33.5787 34.6165 33.8511 33.9555L39.3112 20.6978C39.4864 20.2713 39.5763 19.8146 39.5758 19.3535V15.6417C39.5758 13.693 37.9961 12.1133 36.0475 12.1133H24.7568L26.7909 4.12166C27.0548 3.08612 26.6699 1.99349 25.8153 1.35192L24.3105 0.222855C23.9589 -0.0407316 23.467 -0.00537737 23.1567 0.305771ZM7.82083 13.8775H2.52833C1.554 13.8775 0.76416 14.6674 0.76416 15.6417V33.2833C0.76416 34.2577 1.554 35.0475 2.52833 35.0475H7.82083V13.8775Z" fill="black"/>
              </svg>

            </div>
            <span v-if="!disliked"
              @click="dislike()"
              title="thumbs down"
              class="flex items-center flex-shrink-0 text-h-300 hover:text-black p-3 leading-tight h-full cursor-pointer relative"
            >
              <svg
                width="23"
                class="fill-current"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.95955 13.2834H2.71954C1.64258 13.2834 0.769532 12.4104 0.769532 11.3334V9.28202C0.769269 9.02719 0.818956 8.77478 0.915783 8.53907L3.93439 1.2129C4.0845 0.847501 4.44026 0.608788 4.83529 0.608398H21.2446C21.7831 0.608398 22.2196 1.04492 22.2196 1.5834V11.3334C22.2196 11.8719 21.7831 12.3084 21.2446 12.3084H17.8496C17.5329 12.3083 17.2358 12.4621 17.053 12.7209L11.7364 20.2537C11.5975 20.4505 11.3356 20.5164 11.1202 20.4087L9.3515 19.5234C8.32596 19.0108 7.79627 17.8528 8.07912 16.7418L8.95955 13.2834ZM16.3701 10.7601V2.55842H5.48912L2.72011 9.28204V11.3334H8.96013C9.56195 11.3335 10.13 11.6115 10.4994 12.0866C10.8688 12.5618 10.998 13.1809 10.8497 13.7641L9.96925 17.2234C9.91248 17.4458 10.0184 17.6776 10.2237 17.7802L10.8682 18.1019L15.4605 11.5967C15.7042 11.2515 16.0162 10.9688 16.3701 10.7601ZM20.2696 10.3584H18.3196V2.55842H20.2696V10.3584Z"
                />
              </svg>
            </span>
            <span v-else

              title="thumbs down disliked"
              class="flex items-center flex-shrink-0 text-h-300 hover:text-black p-3 leading-tight h-full cursor-pointer relative"
            >
              <svg width="23" height="21" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1833 35.0342L28.4739 23.7435C28.8048 23.4128 28.9907 22.9641 28.9908 22.4963V2.05665C28.9908 1.08232 28.201 0.29248 27.2267 0.29248H8.12074C7.40597 0.293186 6.76226 0.725111 6.49065 1.38626L1.02879 14.6422C0.853589 15.0687 0.763686 15.5254 0.764162 15.9865V19.6983C0.764162 21.647 2.34385 23.2266 4.2925 23.2266H15.5832L13.5491 31.2183C13.2852 32.2539 13.67 33.3465 14.5247 33.9881L16.0295 35.1171C16.3811 35.3807 16.873 35.3454 17.1833 35.0342ZM32.5192 21.4625H37.8117C38.786 21.4625 39.5758 20.6727 39.5758 19.6983V2.05667C39.5758 1.08234 38.786 0.2925 37.8117 0.2925H32.5192V21.4625Z" fill="black"/>
            </svg>
            </span>
          </div>
          <!--Like / Unlike action buttons-->
        </div>
      <div class="relative ">
        <div class="absolute top-0 mt-3 w-full inline-flex justify-end pr-8 z-2">
          <div class=" relative ">
            <!--Popup: global ownership | earth icon-->
            <heylo-popup>
              <template slot-scope="props">
                <div
                  class="hicon rounded-full border-2 border border-white cursor-pointer inline "
                  @click.stop="props.pop"
                >
                  <svg
                    viewBox="0 0 43 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.5282 21.1685C3.5282 30.9113 11.4258 38.809 21.1686 38.809C30.9115 38.809 38.8091 30.9113 38.8091 21.1685C38.8091 11.4257 30.9115 3.52808 21.1686 3.52808C11.4258 3.52808 3.5282 11.4257 3.5282 21.1685ZM9.49846 29.1198C5.73707 23.5978 6.36347 16.1949 10.9992 11.3834C11.23 11.5959 11.4139 11.8542 11.539 12.1419C11.8989 12.9481 11.8989 13.779 11.8989 14.5146V14.5306C11.8989 15.1033 11.8988 15.6455 12.0841 16.0405C12.3399 16.5838 13.4354 16.8149 14.4038 17.0178C14.4304 17.0234 14.4571 17.0291 14.4838 17.0348C14.8057 17.1033 15.1325 17.1728 15.4323 17.2559C16.3249 17.5029 17.0164 18.3055 17.5685 18.9494L17.5887 18.9726C17.8189 19.2381 18.1432 19.612 18.3076 19.7079C18.3976 19.6444 18.6816 19.3357 18.8227 18.8294C18.9304 18.4431 18.9004 18.0991 18.7416 17.9139C17.7555 16.7496 17.8084 14.5058 18.1136 13.6802C18.5932 12.3771 20.0915 12.4735 21.1886 12.544L21.1901 12.5441C21.5994 12.5706 21.9857 12.5953 22.2715 12.56C23.1041 12.4558 23.5003 11.4715 23.7471 10.8587C23.826 10.6626 23.8896 10.5046 23.9473 10.4255C24.4148 9.78517 25.7537 8.85199 26.7292 8.194C30.7761 9.92915 33.7815 13.4533 34.8558 17.7234C35.9302 21.9935 34.9504 26.5204 32.2066 29.9641C32.3124 29.4366 32.3794 28.8298 32.3794 28.1401V27.9548C32.3794 26.3284 32.3794 25.5857 31.2293 24.9277C30.7442 24.6543 30.3825 24.4867 30.0915 24.3544C29.4441 24.0616 29.0154 23.8675 28.4368 23.0208L28.2322 22.7174C27.6236 21.7913 27.1843 21.1244 25.512 21.3891C22.2221 21.9112 21.9786 22.4898 21.834 23.4671L21.811 23.6276C21.5976 25.0547 21.5588 25.5363 22.155 26.1626C24.3865 28.5034 25.7237 30.1916 26.1294 31.1795C26.3111 31.624 26.7557 32.8942 26.5528 34.2172C20.3781 36.7694 13.2598 34.6418 9.49846 29.1198Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </template>
              <template slot="popup-content">
                <div class="">
                  <product-ownership/>
                </div>
              </template>
            </heylo-popup>
          </div>
        </div>
      </div>

      <!--Product information section-->
      <div class="mb-2 z-4">
        <div class="product-layout">
          
          <div class="grid-main flex flex-row w-full">

            <div class="mt-2 flex flex-col relative justify-center items-center">  
                <div class=" m-2 flex flex-row">
                  <div class="px-4 py-2 bg-purple rounded" @click="toggleShare()">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6666 0V5H14.2857C11.6557 5 9.52376 7.23858 9.52376 10V17.5H11.9047V10C11.9047 8.6193 12.9707 7.50001 14.2857 7.50001H25L16.6666 0ZM8.33336 4.9999V2.4999H1.19048C0.532996 2.4999 0 3.05954 0 3.7499V23.7499C0 24.4403 0.532996 24.9999 1.19048 24.9999H22.6191C23.2766 24.9999 23.8096 24.4403 23.8096 23.7499V11.2499H21.4286V22.4999H2.38096V4.9999H8.33336Z" fill="white"/>
                    </svg>
                  </div>

                  <div v-if="showShare" class="ml-2 card-custom rounded flex flex-row py-1 px-4 justify-between">
                    
                    <div class="mx-2 my-1">
                      <svg width="25" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30.3909 3.18957C29.2751 3.68312 28.0918 4.00726 26.8803 4.15126C28.1573 3.38751 29.1131 2.18551 29.5695 0.76926C28.371 1.48249 27.0571 1.98234 25.6877 2.25272C23.7962 0.228958 20.7802 -0.269764 18.338 1.03738C15.8957 2.34453 14.6379 5.1307 15.2727 7.82703C10.3576 7.58068 5.7782 5.2591 2.67426 1.44011C2.131 2.37323 1.84551 3.43398 1.84703 4.51372C1.84703 6.63295 2.92565 8.50518 4.5655 9.60134C3.59505 9.57079 2.64596 9.30871 1.79734 8.83695V8.91295C1.79795 11.8229 3.84863 14.3296 6.7008 14.9067C5.79993 15.1509 4.85533 15.1868 3.9385 15.012C4.73814 17.5027 7.03323 19.2092 9.64873 19.2577C7.08803 21.2688 3.83288 22.1795 0.600342 21.7891C3.39436 23.586 6.64687 24.5399 9.9688 24.5368C21.2124 24.5368 27.3611 15.2224 27.3611 7.14449C27.3611 6.88141 27.3538 6.61541 27.3421 6.35526C28.5389 5.49027 29.5718 4.41875 30.3923 3.19103L30.3909 3.18957Z" fill="#26B1FF"/>
                      </svg>
                    </div>
                    <div class="mx-2 my-1">
                      <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 0.92308C6.92795 0.92308 0.384644 7.46639 0.384644 15.5385C0.384644 22.833 5.72949 28.8794 12.7171 29.977V19.7623H9.0048V15.5385H12.7171V12.3187C12.7171 8.65608 14.8977 6.63331 18.2373 6.63331C19.8363 6.63331 21.5083 6.91831 21.5083 6.91831V10.5137H19.6667C17.85 10.5137 17.2844 11.6405 17.2844 12.7966V15.5385H21.3373L20.6898 19.7623H17.2844V29.977C24.2706 28.8808 29.6154 22.8315 29.6154 15.5385C29.6154 7.46639 23.0721 0.92308 15 0.92308Z" fill="#1D4EFF"/>
                      </svg>
                    </div>
                    <div class="mx-2 my-1">                      
                      <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4616 30.1539C7.3895 30.1539 0.846191 23.6105 0.846191 15.5385C0.846191 7.46639 7.3895 0.92308 15.4616 0.92308C23.5337 0.92308 30.077 7.46639 30.077 15.5385C30.077 23.6105 23.5337 30.1539 15.4616 30.1539ZM25.2099 15.5385C25.1792 14.6981 24.6578 13.9541 23.8783 13.6385C23.0988 13.3229 22.2066 13.4946 21.5999 14.0769C19.9373 12.9467 17.9829 12.3223 15.973 12.2792L16.923 7.71923L20.0507 8.37692C20.1275 9.0909 20.7116 9.64331 21.4288 9.6802C22.1459 9.7171 22.7836 9.22755 22.9333 8.52523C23.083 7.82291 22.7003 7.11589 22.0304 6.8572C21.3605 6.5985 20.6019 6.86476 20.2407 7.48538L16.6599 6.76923C16.5416 6.74328 16.4179 6.76577 16.3163 6.83167C16.2147 6.89757 16.1437 7.00141 16.1192 7.12L15.0376 12.1915C13.003 12.2222 11.0217 12.8471 9.33762 13.9892C8.72194 13.4099 7.82231 13.2487 7.04377 13.5782C6.26524 13.9077 5.75461 14.6657 5.74179 15.5109C5.72897 16.3562 6.21637 17.1294 6.98455 17.4823C6.96809 17.6964 6.96809 17.9113 6.98455 18.1254C6.98455 21.3992 10.7992 24.0592 15.5053 24.0592C20.2115 24.0592 24.0261 21.3992 24.0261 18.1254C24.0425 17.9113 24.0425 17.6964 24.0261 17.4823C24.7622 17.1165 25.2226 16.3603 25.2099 15.5385ZM12.0562 15.5385C11.249 15.5385 10.5947 16.1928 10.5947 17C10.5947 17.8072 11.249 18.4615 12.0562 18.4615C12.8634 18.4615 13.5177 17.8072 13.5177 17C13.5177 16.1928 12.8634 15.5385 12.0562 15.5385ZM19.0862 21.0192C18.0493 21.8007 16.7735 22.1984 15.4762 22.1446C14.1789 22.1984 12.9031 21.8007 11.8662 21.0192C11.7375 20.8624 11.7487 20.6334 11.8922 20.4899C12.0357 20.3463 12.2647 20.3351 12.4216 20.4639C13.3003 21.1084 14.3729 21.4333 15.4616 21.3846C16.5516 21.4439 17.6292 21.1294 18.5162 20.4931C18.6181 20.379 18.7751 20.3312 18.9233 20.3693C19.0714 20.4073 19.186 20.5248 19.2203 20.6739C19.2546 20.823 19.2029 20.9787 19.0862 21.0777V21.0192ZM17.3616 17.0585C17.3616 17.8656 18.0159 18.52 18.8231 18.52L18.8085 18.5785C19.209 18.5828 19.5937 18.4226 19.8728 18.1352C20.1518 17.8479 20.3007 17.4587 20.2847 17.0585C20.2847 16.2513 19.6303 15.5969 18.8231 15.5969C18.0159 15.5969 17.3616 16.2513 17.3616 17.0585Z" fill="#FF4500"/>
                      </svg>
                    </div>
                    <div class="mx-2 my-1">
                      
                      <svg width="25" height="25" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.999 1.06062C9.76772 0.0658827 2.91073 4.55732 0.93348 11.5838C-1.04378 18.6103 2.46463 26.0185 9.15346 28.9409C9.06599 27.8182 9.14628 26.6887 9.3917 25.5896C9.66208 24.3634 11.2858 17.6052 11.2858 17.6052C10.9625 16.8805 10.8009 16.0939 10.8123 15.3004C10.8123 13.13 12.0648 11.5106 13.6228 11.5106C14.1892 11.5024 14.7311 11.7408 15.1077 12.164C15.4842 12.5871 15.6582 13.1531 15.5842 13.7146C15.5842 15.03 14.7395 17.0206 14.2981 18.8885C14.1212 19.5832 14.2849 20.3206 14.7391 20.8752C15.1933 21.4298 15.8841 21.7356 16.6 21.699C19.374 21.699 21.2331 18.146 21.2331 13.9514C21.2331 10.736 19.1036 8.32739 15.1779 8.32739C13.2799 8.25364 11.4346 8.96147 10.0728 10.2857C8.71106 11.6099 7.9519 13.4346 7.97254 15.334C7.93069 16.3766 8.26705 17.3991 8.91962 18.2132C9.17013 18.4002 9.26668 18.7304 9.15639 19.0229C9.08916 19.2919 8.91962 19.9335 8.85239 20.1688C8.82403 20.3306 8.72049 20.4693 8.57342 20.5426C8.42636 20.6158 8.25325 20.6149 8.107 20.54C6.08423 19.7303 5.13131 17.5044 5.13131 14.9628C5.13131 10.8018 8.61562 5.82085 15.5872 5.82085C21.1352 5.82085 24.8241 9.87954 24.8241 14.2203C24.8241 19.9335 21.6423 24.2289 16.9405 24.2289C15.5124 24.2746 14.1598 23.5878 13.3539 22.4079C13.3539 22.4079 12.5092 25.7928 12.3425 26.4329C12.0024 27.5389 11.5006 28.5884 10.8532 29.5475C12.2022 29.9567 13.6038 30.1613 15.0128 30.1555C18.8902 30.1586 22.6095 28.619 25.3503 25.8762C28.0911 23.1335 29.6281 19.4131 29.6223 15.5357C29.6186 8.23712 24.232 2.0596 17.0019 1.06208L16.999 1.06062Z" fill="#FF0000"/>
                      </svg>

                    </div>
                  </div>
                </div>
                <div class=" m-2 flex flex-row">
                  <div class="px-4 py-2 bg-blue rounded" @click="toggleVideo()">
                    <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0862 30.1724C6.7541 30.1724 0 23.4183 0 15.0862C0 6.7541 6.7541 0 15.0862 0C23.4183 0 30.1724 6.7541 30.1724 15.0862C30.1724 23.4183 23.4183 30.1724 15.0862 30.1724ZM15.0861 27.1552C21.7516 27.1552 27.1551 21.7518 27.1551 15.0863C27.1551 8.42075 21.7516 3.01729 15.0861 3.01729C8.42061 3.01729 3.01715 8.42075 3.01715 15.0863C3.01715 21.7518 8.42061 27.1552 15.0861 27.1552ZM20.3678 14.5839L13.0072 9.67787C12.8222 9.55444 12.5844 9.54277 12.3882 9.64749C12.192 9.75221 12.0693 9.95634 12.0689 10.1787V19.9938C12.0697 20.2157 12.1921 20.4193 12.3878 20.5239C12.5835 20.6285 12.8208 20.6173 13.0057 20.4947L20.3678 15.5886C20.5359 15.4768 20.6369 15.2882 20.6369 15.0863C20.6369 14.8843 20.5359 14.6958 20.3678 14.5839Z" fill="white"/>
                    </svg>
                  </div>

                  <div v-if="showVideo" class="ml-2 video-card rounded">
                    <iframe width="auto" height="auto" :src="shoe_url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div class=" m-2 flex flex-row">
                  <div class="px-4 py-2 bg-light-blue rounded" @click="toggleStores()">
                    <svg width="25" height="22" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 0H1.5V3H28.5V0ZM28.5 15V25.5C28.5 26.3284 27.8284 27 27 27H3C2.17157 27 1.5 26.3284 1.5 25.5V15H0V12L1.5 4.5H28.5L30 12V15H28.5ZM4.5 15V24H25.5V15H4.5ZM26.9401 12H3.06006L3.96006 7.5H26.0401L26.9401 12ZM6 16.5H18V21H6V16.5Z" fill="white"/>
                    </svg>
                  </div>

                  <div class="ml-2 video-card rounded" v-if="showStores">
                    <p class="store-p px-2 py-3">No stores in your area have this item in stock</p>
                  </div>
                </div>
                <div class=" m-2 flex flex-row">
                  <div class="px-4 py-2 bg-shirt rounded" @click="toggleShirt()">
                    <svg width="25" height="22" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9385 0.397379L18.4076 3.92965H11.5924L8.06147 0.397379C7.80733 0.142957 7.46247 0 7.10286 0C6.74326 0 6.3984 0.142957 6.14426 0.397379L0.396701 6.14629C-0.132234 6.67539 -0.132234 7.53305 0.396701 8.06215L5.51558 13.181V25.6083C5.51558 26.3566 6.1222 26.9632 6.8705 26.9632H23.1295C23.8778 26.9632 24.4844 26.3566 24.4844 25.6083V13.181L29.6033 8.06215C30.1322 7.53305 30.1322 6.67539 29.6033 6.14629L23.8557 0.397379C23.6016 0.142957 23.2567 0 22.8971 0C22.5375 0 22.1927 0.142957 21.9385 0.397379ZM10.4704 6.63954H19.5293L22.8963 3.27258L26.7294 7.10428L21.7744 12.0592V24.2535H8.22526V12.0592L3.27033 7.10428L7.10339 3.27258L10.4704 6.63954Z" fill="white"/>
                    </svg>
                  </div>

                  <div class="ml-2 video-card rounded" v-if="showShirt">
                    <p class="store-p px-2 py-3">No stores in your area have this item in stock</p>
                  </div>
                </div>
            </div>
            <div class="my-2 px-2 relative  justify-center items-center w-full">
              <div
                class="single-product-card w-full flex flex-col items-center "
              >
                <div
                  class="headline-lg font-bold my-2 text-center relative mx-2"
                >
                  <div
                    :title="product.name"
                    class="ellipsis relative block mx-auto product-name"
                    style="max-width: 400px"
                  >
                    {{ product.name }}
                  </div>
                  <nuxt-link
                    :to="{
                      name: 'delphi-slug',
                      params: { slug: product.slug }
                    }"
                    class="mx-4 absolute bottom-0  right-0 -mr-6 pt-4 top-0 "
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 26 26"
                      fill="none"
                      class="mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 7.46308L6.37937 0H26V18.7806L19.7639 26H0V7.46308Z"
                        fill="#0000FF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.01855 10.2672L9.44451 6.25928H19.9815V16.3452L16.6325 20.2222H6.01855V10.2672Z"
                        fill="white"
                      />
                      <circle cx="13" cy="13" r="5" fill="#0000FF"/>
                    </svg>
                  </nuxt-link>
                </div>
                <!--Product metadata-->
                <div class="product-meta relative">
                  <span class="capitalize font-semibold">{{ product.brand }}</span>
                  <span class="capitalize font-semibold">{{ product.condition }}</span>
                  <span class=" capitalize font-semibold">SKU: {{ product.sku.toUpperCase() }}
                     <span
                    class="relative h-6 text-right block lg:hidden cursor-pointer"
                    @click="toggleDescSidebar"
                  >
                    <svg
                      width="19"
                      height="19"
                      class="absolute right-0"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        r="8.75"
                        transform="matrix(1 0 0 -1 9.5 9.5)"
                        stroke="black"
                        stroke-width="1.5"
                      />
                      <path
                        d="M9.05041 7.592H10.5504V14H9.05041V7.592ZM9.80641 6.536C9.53441 6.536 9.30641 6.452 9.12241 6.284C8.93841 6.108 8.84641 5.892 8.84641 5.636C8.84641 5.38 8.93841 5.168 9.12241 5C9.30641 4.824 9.53441 4.736 9.80641 4.736C10.0784 4.736 10.3064 4.82 10.4904 4.988C10.6744 5.148 10.7664 5.352 10.7664 5.6C10.7664 5.864 10.6744 6.088 10.4904 6.272C10.3144 6.448 10.0864 6.536 9.80641 6.536Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  </span>

                </div>
              </div>
              <div class="flex flex-col items-center relative">
                <!--Product Thumbnail-->
                <div class="product-thumb">
                  <!--Product image slider-->
                  <img :src="product.images[0].url" alt=""/>
                </div>
                <!--Product cta buttons-->
                <div class="flex flex-wrap w-full justify-center items-center">
                  <single-product-size-chooser-button
                    :variations="product.variations"
                    @selected="selected"
                  />
                  <payment-button @onPay="toggleProductPaymentSidebar"/>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-aside">
            <!--Product description panel and featured product panel-->
            <aside class="">
              <div class="desc-sidebar" :class="{ open: descSidebar }">
                <!--Close trigger-->
                <div class="block relative h-full mt-4 ">
                  <!--Description card-->
                  <div
                    class="flex flex-col items-center pt-6 sm:px-10 md:px-10 xs:px-4"
                  >
                    <div class="relative lg:hidden mb-6 w-full">
                      <div
                        class="headline-lg text-h-300 font-semibold mx-auto block "
                      >
                        More Info:
                      </div>
                    </div>
                    <div class="block relative w-full w-5/6 overflow-hidden">
                      <div class="card mx-auto">
                        <div class="card-head">
                          <div class="headline font-normal">Description</div>
                        </div>
                        <div class="card-body">
                          <div class="list-group text-sm">
                            <div class="list-group-item">
                             <strong> Release date:</strong>
                              {{ formatDateData(product.created_at) }}
                            </div>
                            <div class="list-group-item" v-if="product.color">
                              <strong>Color way:</strong> {{ product.color }}
                            </div>
                            <div class="list-group-item">
                              <strong>Designer:</strong>
                            </div>
                            <div class="list-group-item capitalize">
                              <strong>Brand:</strong> {{ product.brand }}
                            </div>
                            <div class="list-group-item">
                              <strong>Silohette:</strong> {{ product.silohette }}
                            </div>
                            <div class="list-group-item">
                              <strong>SKU:</strong> {{ product.sku.toUpperCase() }}
                            </div>
                            <div class="list-group-item">
                              <strong>Category:</strong> {{ product.category }}
                            </div>
                            <div class="list-group-item truncate">
                              <strong>Description:</strong> {{ product.description }}
                            </div>
                          </div>
                        </div>
                        <div class="card-foot border-t">
                          <div class="w-full flex items-center justify-center">
                            <span class="cursor-pointer">More...</span>
                          </div>
                        </div>
                      </div>
                      <div class="card mx-auto">
                        <div class="card-head">
                          <div class="headline">Featured items</div>
                        </div>
                        <div class="card-body">
                          <div class="featured-thumb ">
                            <heylo-swiper :autoplay="true" :autoHeight="false" v-if="featured.length">
                              <swiper-slide v-for="(product, index) in featured"
                                            :key="`single-product-featured-slider-${index}-${product.id}`">
                                <div class="justify-center flex h-full items-center overflow-hidden">
                                  <nuxt-link :to="{ name: 'store-featured-slug', params: { slug: product.slug } }"
                                             class="relative">
                                    <!--Add to cart trigger-->
                                    <div @click.stop="addToCart" class="absolute right-0 mr-4 cursor-pointer above">
                                      <svg
                                        width="19"
                                        height="19"
                                        viewBox="0 0 19 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle
                                          r="9"
                                          transform="matrix(1 0 0 -1 9.5 9.5)"
                                          stroke="black"
                                        />
                                        <path
                                          d="M13.0625 9.93333H10.1175V12.815H9.11998V9.93333H6.17498V8.99917H9.11998V6.10167H10.1175V8.99917H13.0625V9.93333Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </div>

                                    <div class="relative flex justify-center w-full ">
                                      <img class="w-3/4 object-contain object-center" :src="product.images[0].url" alt=""/>
                                    </div>
                                  </nuxt-link>
                                </div>
                              </swiper-slide>
                            </heylo-swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="desc-overlay" @click.stop="closeDescSidebar" v-if="descSidebar"></div>
            </aside>
            <!-- End aside -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '@nuxtjs/axios';
  export default {
    name: 'SingleProduct',
    props: {
      product: {
        default() {
          return {}
        }
      },
      featured: {
        default() {
          return []
        }
      }
    },
    data() {
      return {
        user: this.$cookies.get('helyos_user'),
        data: [],
        descSidebar: false,
        showShare: false,
        showVideo: false,
        showStores: false,
        showShirt: false,
        shoe_url: ''
      }
    },
    computed: {
      likes() {
        if (this.user) return this.product.likes.filter(like => like.user_id === this.user.id);
      },
      notLiked() {
        return !this.product.likes.length;
      },

      liked() {
        if (this.likes) return this.likes.filter(item => item.like === 1).length
      },

      disliked() {
        if (this.likes) return this.likes.filter(item => item.like === 0).length
      }
    },
    methods: {
      toggleShare() {
        this.showShare = !this.showShare;
      },
      async toggleVideo() {
        const youtube_url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&order=viewCount&q=${this.product.name}&maxResults=3&key=AIzaSyDAxhMhIFCa7wN32yt87Wduaufxk2XTQXM`;
        this.showVideo = !this.showVideo;
        if(this.showVideo === true) {
          let response = await fetch(youtube_url);
          let data = await response.json();

          this.shoe_url =  `https://youtube.com/embed/${data.items[0].id.videoId}`; 
        }
      },
      toggleStores() {
        this.showStores = !this.showStores;
      },
      toggleShirt() {
        this.showShirt = !this.showShirt;
      },
      closeDescSidebar() {
        this.descSidebar = false
      },
      toggleDescSidebar() {
        this.descSidebar = !this.descSidebar
      },
      toggleProductPaymentSidebar() {
        this.$emit('onShowPaymentSidebar')
      },
      setPicked(value) {
        this.$emit('like', value)
      },
      selected(value) {
        this.$emit('picked', value)
      },

      addToCart(product) {
        let cartItem = {}
        let variation =
          product.variations[
            Math.floor(Math.random() * product.variations.length)
            ]
        cartItem.product = product
        cartItem.size = variation.size
        cartItem.price = variation.price
        cartItem.uid = Math.floor(Math.random() * 10000)

        this.$store.commit('cart/ADD_TO_CART', cartItem)
        this.$notification.success('Added To Cart')
      },

      dislike() {

      }
    }
  }

</script>

<style scoped lang="scss">
  * {
      font-family: 'Montserrat' !important;
  }

  .card-custom {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(196, 196, 196, 0.25);
    border-radius: 10px;
    position: absolute;
    left: 70px;
    width: auto;
    z-index: 100;
  }

  .store-p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    width: 300px;
    text-align: center;
    padding: 30px 40px 30px 40px !important;
  }

  .video-card {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(196, 196, 196, 0.25);
    border-radius: 10px;
    position: absolute;
    left: 70px;
    width: auto;
    z-index: 100;
  }

  .bg-purple {
    background-color: #5200ff;
    cursor: pointer;
  }
  
  .bg-light-blue {
    background-color: #6BA6FF;
    cursor: pointer;
  }

  .bg-blue {
    background-color: #0000FF;
    cursor: pointer;
  }

  .bg-shirt {
    background-color: #CDF0FF;
    cursor: pointer;
  }

  .product-thumb {
    overflow: hidden;
    width: 100%;
    max-width: 500px;
    z-index: auto;
    min-height: 250px;
    @apply mb-2 block justify-center relative;
    >img {
      position: relative;
      @apply w-full h-full object-contain object-center;
    }
  }

  .single-product-card {
    @apply mt-8 px-4;
    .headline {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 2;
      color: #000000;
      position: relative;
      @apply px-4;
    }

    .product-name {
      font-style: normal;
      font-weight: 600;
      font-size: 35px;
      text-transform: capitalize;
      line-height: 55px;
      color: #000000;
    }

    @apply w-full flex items-center flex-col;
    .product-meta {
      @apply text-center flex justify-center;
      > span {
        font-style: normal;
        line-height: 24px;
        color: #000000;
        font-weight: 500;
        font-size: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;

        @apply flex-1;
        &:not(:last-of-type):after {
          content: '|';
          width: 2px;
          @apply h-full mx-2;
        }
      }
    }
  }

  .featured-thumb {
    @apply relative w-auto  items-center w-full justify-center ;
  }

  .desc-overlay {
    z-index: 10;
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.07);
    width: 100vw;
    height: 100vh;
    left: 0;
    transition: all 0.35s ease-in-out;
    @media (min-width: 768px) {
      @apply hidden;
    }
  }

  .desc-sidebar {
    @apply relative;
    @media (max-width: 1024px) {
      position: fixed;
      background: white;
      width: 50%;
      top: 0;
      right: -1000%;
      height: 100vh;
      margin: 0;
      overflow-y: auto;
      -webkit-box-shadow: -7px 0 7px 7px #000;
      -moz-box-shadow: -7px 0 7px 7px #000;
      box-shadow: -7px 0 14px -7px #c4c4c4;
      transition: all 0.35s ease-in-out;
      z-index: 10;
      padding: 7px 14px;
    }
    @media (max-width: 769px) {
      width: 87%;
    }

    &.open {
      right: 0 !important;
      z-index: 200;
    }
  }

  .product-layout {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 340px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
    }

    .grid-aside {
      margin-top: 6em;
    }
  }
</style>
