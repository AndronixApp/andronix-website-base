<template>
  <div>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <Overlay v-show="$store.state.drawer.isDrawerOpen"/>
    </transition>
    <div
      class="bg-card_background p-8 rounded-r-lg transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="this.$store.state.drawer.isDrawerOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class=" flex justify-between">
        <h2 class="font-extrabold text-primary-500">ANDRONIX</h2>
        <svg @click="$store.commit('drawer/toggleDrawer')" class="stroke-current text-white w-5"
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>
      <div>
        <div class="text-white font-medium flex-col space-y-3 mt-6">
          <div>
            <NuxtLink to="/modded-os">Modded OS</NuxtLink>
          </div>
          <div>
            <NuxtLink to="/">Premium</NuxtLink>
          </div>
          <div>
            <NuxtLink to="/">Docs</NuxtLink>
          </div>
          <div>
            <NuxtLink to="/">Help</NuxtLink>
          </div>
          <div>
            <NuxtLink to="/">Commands</NuxtLink>
          </div>
          <div>
            <NuxtLink to="/">About</NuxtLink>
          </div>
        </div>
        <div class="text-white font-bold font-medium sm:hidden md:hidden lg:block mt-6">
          <NuxtLink to="/login">Login</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuDropdown'
}
</script>

<style scoped>

</style>
