<template>
  <div class="relative h-screen mt-8 lg:mt-0 bg-background w-full lg:px-24">
    <div class="grid grid-cols-1 ms:grid-cols-2 lg:grid-cols-3 justify-between lg:-mt-8">
      <div
        class="mt-6 self-stretch text-center lg:text-left lg:self-center lg:grid-cols-1 justify-self-center lg:justify-self-start order-2 lg:order-1"
      >
        <div xyz="fade big top-100% duration-5" class="xyz-in"
        >
          <h1 class="text-white text-4xl px-3 lg:text-5xl font-black">The Power of
            <strong class="text-primary-600">Linux</strong> on
            Android.</h1>
        </div>

        <div xyz="fade small bottom-100% ease-out-back delay-2" class="xyz-in">
          <p class="text-gray-400 lg:text-lg text-center lg:text-left px-8 pt-3 lg:pr-8 lg:pl-0">Run full-fledged
            Linux
            Distros right on
            your
            Android device <strong>without rooting.</strong></p>

          <div class="flex flex-wrap mt-8 justify-center lg:justify-start items-center lg:items-start">
            <a target="_blank" href="https://play.andronix.app" class="xyz-in"
               xyz="fade big left ease-out-back delay-3"
            >
              <div
                class="min-w-max cursor-pointer bg-gradient-to-r from-violet to-primary-600 px-3 hover:bg-white rounded py-1 mt-4 flex mr-4 hover:-translate-y-1.5 transform transition ease-in-out duration-200"

              >
                <img
                  src="~assets/images/icons/play-store.svg"
                  class="w-5 h-auto mr-4"
                  alt=""
                />
                <div>
                  <h5 class="text-white font-sans text-sm font-medium text-left">
                    Get the app on
                  </h5>
                  <h2 class="text-white font-sans font-bold text-left">
                    Google Play
                  </h2>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://github.com/AndronixApp" class="xyz-in"
               xyz="fade big left ease-out-back delay-3"
            >
              <div
                class="min-w-max cursor-pointer bg-gray-600 px-3 rounded py-1 mt-4 mr-4 flex hover:-translate-y-1.5 transform transition ease-in-out duration-200"
              >
                <img src="~assets/images/icons/github.svg" class="w-5 mr-4" alt=""/>
                <div>
                  <h5 class="text-white font-sans text-sm font-medium text-left">
                    Know more on
                  </h5>
                  <h2 class="text-white font-sans font-bold text-left">GitHub</h2>
                </div>
              </div>
            </a>
          </div>

        </div>

      </div>

      <div xyz="fade right-100% duration-5"
           class="lg:mt-16 max-w-sm md:max-w-md lg:max-w-screen-md order-1 xyz-in lg:order-2 lg:col-span-2 w-full md:w-8/12 lg:w-full place-self-center"
      >
        <img class="lg:pl-24 object-cover w-full" src="~assets/images/background/final_edited.svg">
      </div>

    </div>
  </div>
</template>

<script>
import detailsJson from '../static/distros/details.json'

export default {
  name: 'Landing',
  data: () => {
    return {
      details: detailsJson.ubuntu,
    }
  },
}
</script>

<style scoped>
</style>
