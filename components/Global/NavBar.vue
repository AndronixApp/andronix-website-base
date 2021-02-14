<template>
  <nav class="z-10 fixed w-full transition transform duration-100 ease-in-out"
       :class="!view.atTopOfPage?'bg-gray-800 bg-opacity-80':''"
  >
    <div class="flex pt-4 lg:pt-6 lg:pb-6 px-8 pb-4 items-center justify-end">
      <XyzTransition appear-visible xyz="fade left-100% small">
        <div class="flex justify-self-start mr-auto cursor-pointer" @click="$router.push('/')">
          <h3 class="text-white font-sans font-bold text-lg">andronix</h3>
          <span class="text-primary-500 font-bold text-lg">.app</span>
        </div>
      </XyzTransition>

      <!--  Download Button    -->
      <div
        class="text-white invisible md:invisible lg:visible cursor-pointer px-3 py-2 bg-primary-600 flex items-center space-x-5 justify-center rounded hover:bg-white hover:text-primary-600 hover:-translate-y-1.5 transition transform duration-300"
      >
        <svg class="text-current fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
             fill="currentColor"
        >
          <path fill-rule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                clip-rule="evenodd"
          />
        </svg>
        <a href="https://play.andronix.app" class="text-current font-bold">Download</a>
      </div>

      <!--   Hamburger   -->
      <div id="nav_hamburger" @click="$store.commit('drawer/toggleDrawer')" class="cursor-pointer ml-5">
        <svg class="stroke-current text-white w-8" xmlns="http://www.w3.org/2000/svg" width="31" height="15">
          <g fill="none" stroke="#fff" stroke-width="3">
            <path d="M0 1.5h31M0 13.5h31"/>
          </g>
        </svg>
      </div>

    </div>
  </nav>
</template>


<script>

export default {
  name: 'NavBar',
  // a beforeMount call to add a listener to the window
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll () {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) {
          this.view.atTopOfPage = false
        }
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) {
          this.view.atTopOfPage = true
        }
      }
    }
  },
  data: function () {
    return {
      userData: this.$store.getters['auth/getUserData'],
      view: {
        atTopOfPage: true
      }
    }
  }
}
</script>

<style scoped>

</style>
