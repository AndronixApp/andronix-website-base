<template>
  <div
    class="flex-col bg-background mt-16 px-12 md:px-24 items-center"
  >
    <XyzTransition appear-visible xyz="fade small">
      <div class="grid grid-rows-4 justify-center items-center">
        <!--    Animation    -->
        <div>
          <svg class="w-24 fill-current text-green-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
               fill="currentColor"
          >
            <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
            />
          </svg>
        </div>

        <div class="text-white py-6 text-center">
          <h3 class="font-extrabold text-3xl lg:text-4xl text-3xl lg:text-4xl mb-2">Order Successful!</h3>
          <p class="md:text-lg lg:text-xl">We have synced this order on all your devices already.</p>
          <p class="md:text-lg lg:text-xl">Your order ID - <strong class="md:text-lg lg:text-xl text-primary-400 font-extrabold">{{ this.order_id }}</strong></p>
        </div>

        <div class="max-w-md text-sm lg:text-lg bg-opacity-20 bg-green-400 py-3 px-4 text-center rounded text-white">
          <p>Just to let you know, we've sent you your receipt of this purchase at your email. You can attach it if you
            have any trouble regarding your purchase.</p>
        </div>

        <div @click="$router.push('/')">
          <div
            class="cursor-pointer px-3 py-2 bg-card_background flex items-center space-x-5 justify-center rounded hover:bg-card_background2 hover:scale-105 transition transform duration-300"
          >
            <svg class="text-white stroke-current w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <p class="text-white font-bold">Explore more things...</p>
          </div>
        </div>

        <div class="pb-24"></div>

      </div>
    </XyzTransition>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  async asyncData ({ params }) {
    const order_id = params.order_id
    return { order_id }
  },
  name: '_order_id'
}
</script>

<style scoped>

</style>
