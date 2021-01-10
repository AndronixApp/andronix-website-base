<template>
  <div>
    <div class="flex pt-4 md:pt-5 lg:pt-8 px-8 items-center justify-end">
      <div class="flex justify-self-start mr-auto">
        <h3 class="text-white font-sans font-bold text-lg">andronix</h3>
        <span class="text-primary-500 font-bold text-lg">.app</span>
      </div>

      <div class="text-white font-medium hidden md:hidden lg:block flex space-x-6 pr-6">
        <NuxtLink to="/">Modded OS</NuxtLink>
        <NuxtLink to="/">Premium</NuxtLink>
        <NuxtLink to="/">Docs</NuxtLink>
        <NuxtLink to="/">Help</NuxtLink>
        <NuxtLink to="/">Commands</NuxtLink>
        <NuxtLink to="/">About</NuxtLink>
        <NuxtLink class="text-primary" to="/login">Login</NuxtLink>
      </div>
      <!--  Download Button    -->
      <button class="rounded hidden md:hidden lg:block text-lg bg-primary text-white font-bold px-3 py-1">Download
      </button>

      <div @click="$store.commit('drawer/toggleDrawer')" class="ml-5">
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
  name: 'NavBar'
}
</script>

<style scoped>

</style>
