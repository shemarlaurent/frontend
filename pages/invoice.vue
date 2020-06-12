<template>
  <div class="container ">
    <div class="lg:w-2/3 md:w-2/3 mx-auto bck">
      <div class="flex justify-between my-6 mx-6 ">
        <nuxt-link :to="{name: 'index'}" class="invoice-logo">
          <logo :height="85" :width="200"/>
        </nuxt-link>
        <div class="flex justify-end w-full cursor-pointer">
          <div class="invoice-address text-right">
            <span class="block">YOUR COMPANY</span>
            <span class="block">1331 Hart Ridge Road</span>
            <span class="block">48436 Gaines, MI</span>
            <span class="block">VAT no.: 987654321</span>
            <span class="block">your.mail@gmail.com</span>
            <span class="block">+386 989 271 3115</span>
          </div>
        </div>
      </div>

      <div class="div flex justify-between my-12 mx-6">
        <div class="invoice-address text-left mt-6">
          <span class="block font-bold mb-3 text-black">RECIPIENT</span>
          <span class="block">JOHN SMITH</span>
          <span class="block">4304 Liberty Avenue</span>
          <span class="block">92680 Tustin, CA</span>
          <span class="block">VAT no.: 12345678</span>
          <span class="block">company.mail@gmail.com</span>
        </div>
        <div class="text-right">
          <div class="headline-lg mb-6">Invoice</div>
          <div class="invoice-address">
            <div class="mt-2">
              <span class="block font-bold uppercase text-black">invoice no.</span>
              <span class="block">001/2018</span>
            </div>
            <div class="mt-2">
              <span class="block font-bold uppercase text-black">Invoice date</span>
              <span class="block">January 1, 2018</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-1">
        <div class="invoice-order my-12 mx-6  pb-6">
          <div class="headline">ORDER DESCRIPTION</div>
          <div class="order-list">
            <div class="list-item" v-for="order in orders">
              <div class="flex justify-between">
                <div>{{order.name}}</div>
                <div>{{order.value}}</div>
              </div>
            </div>

            <div class="my-6 text-right text-gray-600">Amount</div>

            <div class="list-item">
              <div class="flex justify-between">
                <div>Items Price</div>
                <div>{{amount}} USD</div>
              </div>
            </div>
            <div class="flex">
              <div class="flex-1"></div>
              <div class="flex-1 items-end flex flex-col w-full">
                <div class="list-item w-full">
                  <div class="flex ">
                    <div class="mr-auto w-full">
                      SUBTOTAL
                    </div>
                    <div class="flex-1 whitespace-no-wrap">
                      {{amount}} USD
                    </div>
                  </div>
                </div>
                <div class="list-item w-full">
                  <div class="flex justify-between w-full">
                    <div class="mr-auto w-full">
                      TAX
                    </div>
                    <div class="flex-1 whitespace-no-wrap">
                      {{tax}} USD
                    </div>
                  </div>
                </div>
                <div class="flex justify-between w-full py-5">
                  <div class="mr-auto w-full">
                    TOTAL
                  </div>
                  <div class="flex-1 whitespace-no-wrap text-2xl headline-total">
                    {{total}} USD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="mx-6">
        <footer class="my-6 mx-6 text-sm text-h-600">
          <div class="lg:flex lg:flex-wrap-reverse lg:justify-center">
            <div class="lg:flex-1">
              <div class="m-2 text-right">
                <div>YOUR COMPANY</div>
                <p> 1331 Hart Ridge Road, 48436 Gaines, MI</p>
              </div>
            </div>
            <div class="lg:flex-1">
              <div class="m-2 text-right">
                <div>your.mail@gmail.com</div>
                <p>+386 989 271 3115</p>
              </div>
            </div>
            <div class="lg:flex-1">
              <div class="m-2 text-right">
                <p class="text-right">
                  The company is registered in the business register under no. 87650000
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'invoice',
    layout: 'clear',
    data() {
      return {
        orders: [
          { name: 'Size', value: '11 US Mens' },
          { name: 'Colorway', value: '“Product Name”' },
          { name: 'Condition', value: 'New' },
          { name: 'SKU Code', value: 'AT57H-87U' }
        ],
        amount: 240.00,
        tax: 57.00,
        total: 297.00
      }
    }
  }
</script>

<style scoped lang="scss">
  .bck {
    background: #fbfbfb;
    padding: 30px 4px;
  }

  .invoice-address {
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 2;
      /* or 162% */
      letter-spacing: 0.0016px;

      color: #828691;
    }
  }

  .invoice-order {
    .headline {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 11px;
      /* identical to box height */

      color: #9DA8BB;


    }

    .order-list {
      @apply px-2 my-8 block;
      .list-item {
        @apply py-4;
        border-bottom: 1px solid #e7e8ec;
      }
    }
  }
  .headline-total{
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: right;

    color: #0099FF;
  }
</style>
