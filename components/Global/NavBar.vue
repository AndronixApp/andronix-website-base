<template>
  <div>
    <div class="flex pt-6 md:pt-6 lg:pt-8 px-8 items-center justify-end">
      <XyzTransition appear-visible xyz="fade left-100% small">
        <div class="flex justify-self-start mr-auto cursor-pointer" @click="$router.push('/')">
          <h3 class="text-white font-sans font-bold text-lg">andronix</h3>
          <span class="text-primary-500 font-bold text-lg">.app</span>
        </div>
      </XyzTransition>

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

      <div @click="$store.commit('drawer/toggleDrawer')" class="cursor-pointer ml-5">
        <svg class="stroke-current text-white w-8" xmlns="http://www.w3.org/2000/svg" width="31" height="21">
          <g data-name="Group 393" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3">
            <path data-name="Line 9" d="M1.5 1.5h28"/>
            <path data-name="Line 10" d="M1.5 10.5h17"/>
            <path data-name="Line 11" d="M1.5 19.5h22"/>
          </g>
        </svg>
      </div>

    </div>
  </div>
</template>


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
