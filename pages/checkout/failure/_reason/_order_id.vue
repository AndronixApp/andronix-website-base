<template>
  <div
    class="flex-col h-screen bg-background mt-16 px-12 md:px-24 items-center"
  >
    <XyzTransition appear-visible xyz="fade small">
      <div class="grid grid-rows-4 justify-center items-center">
        <!--    Animation    -->
        <div>
          <svg class="w-24 fill-current text-red-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
               fill="currentColor"
          >
            <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
            />
          </svg>
        </div>

        <div class="text-white py-6 text-center">
          <h3 class="font-extrabold text-3xl lg:text-4xl mb-2">Order Failed!</h3>
          <p class="md:text-lg lg:text-xl">Reason - <strong class="font-bold text-lg md:text-xl lg:text-2xl"
          >{{ this.reason }}</strong></p>
          <p v-if="this.order_id" class="md:text-lg lg:text-xl">Your order ID - <strong
            class="md:text-lg lg:text-xl text-primary-400 font-extrabold"
          >{{ this.order_id }}</strong></p>
        </div>

        <div class="max-w-md text-sm lg:text-lg bg-opacity-20 bg-red-400 py-3 px-4 text-center rounded text-white">
          <p>We are sorry to inform you that you recent order has failed because of the reason state above. You can
            retry or reach out to us at <a href="mailto:andronix@techriz.com"
                                           class="cursor-pointer text-purple-400 font-bold"
            >andronix@techriz.com</a></p>
        </div>

        <div @click="$router.push('/checkout/buy')">
          <div
            class="cursor-pointer px-3 py-2 bg-card_background flex items-center space-x-5 justify-center rounded hover:bg-card_background2 hover:scale-105 transition transform duration-300"
          >
            <svg class="text-white fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                 fill="currentColor"
            >
              <path fill-rule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clip-rule="evenodd"
              />
            </svg>
            <p class="text-white font-bold">Retry payment</p>
          </div>
        </div>
      </div>
    </XyzTransition>
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    const order_id = params.order_id
    const reason = params.reason
    return {
      order_id,
      reason
    }
  },
  name: '_order_id'
}
</script>

<style scoped>

</style>
