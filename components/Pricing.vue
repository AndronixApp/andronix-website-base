<template>
  <div>
    <div>
      <Heading heading="Our Pricing"
               sub_heading="We hate subscriptions. All purchases here are one-time and life long. They sync all your devices automatically."
               deco_heading="ANDRONIX"
      />
      <div class="grid gap-4 grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 justify-center">
        <div class="flex lg:justify-self-end justify-self-center  items-center">
          <div class="rounded bg-card_background p-6 text-center">
            <h3 class="font-sans font-medium  text-sm text-primary">ANDRONIX</h3>
            <h2 class="text-white font-sans font-extrabold text-2xl">
              Premium
            </h2>
            <div class="mt-3">
              <h4 class="line-through text-gray-500">$ 4.99</h4>
              <h4 class="text-white font-bold text-xl">$ 1.99</h4>
              <!--            <h4 class="text-white text-gray-900 text-sm">$ 1.00 with Premium</h4>-->
            </div>
            <div class="mt-5">
              <ul>
                <li v-for="features in premiumFeatures">
                  <div class="flex items-center justify-start">
                    <svg class="text-green-600 stroke-current w-5 mr-4 my-2" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24"
                         stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <!--                <img class="text-green-600 w-4 fill-current mx-4 my-2" src="~assets/images/icons/check.svg" alt="">-->
                    <p class="text-white text-left text-sm ">{{ features }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-background shadow-lg rounded px-4 py-2 mt-9">
              <h4 class="text-white text-center font-bold">Purchase</h4>
            </div>
            <h4 class="text-white text-center mt-2 text-xs underline font-light">or Purchase via App</h4>
          </div>
        </div>
        <div class="flex lg:justify-self-center justify-self-center items-center">
          <div class="rounded bg-card_background p-6 text-center">
            <h3 class="font-sans font-medium  text-sm text-primary">ANDRONIX</h3>
            <h2 class="text-white font-sans font-extrabold text-2xl">
              Modded OS
            </h2>
            <div class="mt-3">
              <h4 class="line-through text-gray-500">$ 4.99</h4>
              <h4 class="text-white font-bold text-xl">$ 1.99</h4>
              <h4 class="text-white text-gray-200 text-sm">$ 1.00 with Premium</h4>
            </div>
            <div class="mt-5">
              <ul>
                <li v-for="features in premiumFeatures">
                  <div class="flex items-center justify-start">
                    <svg class="text-green-600 stroke-current w-5 mr-4 my-2" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24"
                         stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <!--                <img class="text-green-600 w-4 fill-current mx-4 my-2" src="~assets/images/icons/check.svg" alt="">-->
                    <p class="text-white text-left text-sm ">{{ features }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-background shadow-lg rounded px-4 py-2 mt-9">
              <h4 class="text-white text-center font-bold">Purchase</h4>
            </div>
            <h4 class="text-white text-center mt-2 text-xs underline font-light">or Purchase via App</h4>
          </div>
        </div>
        <div class="flex lg:justify-self-start justify-self-center items-center">
          <div class="rounded bg-card_background p-6 text-center">
            <h3 class="font-sans font-medium  text-sm text-primary">ANDRONIX</h3>
            <h2 class="text-white font-sans font-extrabold text-2xl">
              Modded OS Bundle
            </h2>
            <div class="mt-3">
              <h4 class="line-through text-gray-500">$ 19.99</h4>
              <h4 class="text-white font-bold text-xl">$ 6.99</h4>
              <!--            <h4 class="text-white text-gray-900 text-sm">$ 1.00 with Premium</h4>-->
            </div>
            <div class="mt-5">
              <ul v-for="features in moddedOsBundleFeatures">
                <li>
                  <div class="flex items-center items-start">
                    <svg class="text-green-600 stroke-current w-5 mr-4 my-2" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24"
                         stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <!--                <img class="text-green-600 w-4 fill-current mx-4 my-2" src="~assets/images/icons/check.svg" alt="">-->
                    <p class="text-white text-left text-sm ">{{ features }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-background shadow-lg rounded px-4 py-2 mt-9">
              <h4 class="text-white text-center font-bold">Purchase</h4>
            </div>
            <h4 class="text-white text-center mt-2 text-xs underline font-light">or Purchase via App</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import features from '../static/distros/features.json'

export default {
  name: 'Pricing',
  data: () => {
    return {
      premiumFeatures: features.premium,
      moddedOsBundleFeatures: features.modded_os_bundle,
      moddedOsFeatures: features.modded_os
    }
  }
}
</script>

<style scoped>

</style>
