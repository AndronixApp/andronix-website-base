<template>
  <div class="relative bg-background w-full bg-landing-pattern bg-top px-10 md:px-20 lg:px-30 font-sans">
    <div class="flex-col items-center justify-center cont">
      <XyzTransition :appear-visible="true" duration="auto">
        <div class="text-5xl md:text-6xl lg:text-7xl tracking-tight" xyz="fade small stagger ease-out-back">
          <h1 class="text-white font-bold xyz-nested">The power
            of</h1>
          <h1 class=" text-white font-extrabold font-sans text-7xl md:text-8xl lg:text-9xl xyz-nested"
          >
        <span
            class="bg-clip-text tracking-tighter xyz-nested text-transparent bg-gradient-to-r from-gradient1 to-gradient2"
        >
            Linux
          </span>
          </h1>
          <h1 class="text-white font-bold xyz-nested">on
            Android</h1>
        </div>
      </XyzTransition>
      <div class=" flex mt-8 flex-wrap justify-center items-center md:mx-20">
        <div class="bg-gradient-to-r from-violet to-primary-600 px-3 rounded py-1 mt-4 flex mr-4 xyz-in"
             xyz="fade big left ease-out-back delay-15"
        >
          <img
              src="~assets/images/icons/play-store.svg"
              class="w-5 mr-4"
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
        <div class="bg-gray-600 px-3 rounded py-1 mt-4 mr-4 flex xyz-in" xyz="fade big right ease-out-back delay-15">
          <img src="~assets/images/icons/github.svg" class="w-5 mr-4" alt=""/>
          <div>
            <h5 class="text-white font-sans text-sm font-medium text-left">
              Know more on
            </h5>
            <h2 class="text-white font-sans font-bold text-left">GitHub</h2>
          </div>
        </div>
      </div>
      <!--      <div class="lg:inline-flex hidden mt-24">
              <DistroCard class="mr-4" :distro-data="details"/>
              <DistroCard class="mr-4" :distro-data="details"/>
              <DistroCard class="mr-4" :distro-data="details"/>
              <DistroCard class="mr-4" :distro-data="details"/>
              <DistroCard class="mr-4" :distro-data="details"/>
            </div>-->
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
