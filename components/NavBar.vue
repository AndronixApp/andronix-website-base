<template>
  <div>
    <div class="flex pt-6 md:pt-6 lg:pt-8 px-8 items-center justify-end">
      <div class="flex justify-self-start mr-auto cursor-pointer" @click="$router.push('/')">
        <h3 class="text-white font-sans font-bold text-lg">andronix</h3>
        <span class="text-primary-500 font-bold text-lg">.app</span>
      </div>

      <!--  Download Button    -->
      <div
        class="invisible md:invisible lg:visible cursor-pointer px-3 py-1 bg-primary-500 flex items-center space-x-5 justify-center rounded hover:bg-primary-600 hover:scale-105 transition transform duration-300"
      >
        <svg class="text-white fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
             fill="currentColor"
        >
          <path fill-rule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                clip-rule="evenodd"
          />
        </svg>
        <a href="https://play.andronix.app" class="text-white font-bold">Download</a>
      </div>

      <!--
            <div class="px-4 pt-3">
              <tasty-burger-button type="spring" v-on:toggle="$store.commit('drawer/toggleDrawer')"
                                   :active="$store.getters['drawer/getDrawerState']" color="#fff" active-color="#fff"
              />
            </div>-->

      <div @click="$store.commit('drawer/toggleDrawer')" class="cursor-pointer ml-5">
        <svg class="stroke-current text-white w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </div>

    </div>
  </div>
</template>


<!--

Modded OS
Pricing
Docs
Help
Commands
About

Download

-->


<script>

export default {
  name: 'NavBar',
  data: function () {
    return {
      userData: this.$store.getters['auth/getUserData']
    }
  }
}
</script>

<style scoped>

</style>
