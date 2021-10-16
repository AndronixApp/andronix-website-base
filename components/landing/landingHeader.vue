<template>
  <div :class="!view.atTopOfPage?'hidden':''">
    <div class="py-2 px-6 bg-blue-700 flex justify-center items-center">
      <p class="px-6 text-center font-bold text-gray-200 text-sm">We love open source. Star this <a href="https://github.com/AndronixApp/andronix-website-base" class="underline">website</a> and other projects @ <a
        href="https://git.andronix.app" class="underline">Github</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "landingHeader",
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
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
      view: {
        atTopOfPage: true
      }
    }
  }
}
</script>

<style scoped>

</style>
