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
      class="bg-background2 p-8 rounded-r-lg transform top-0 left-0 w-64 md:w-80 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="this.$store.state.drawer.isDrawerOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex justify-between mb-10">
        <h2 @click="log" class="font-extrabold text-primary-500">ANDRONIX</h2>
        <svg @click="$store.commit('drawer/toggleDrawer')" class="stroke-current text-white w-5"
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>

      <!--  Account Details    -->
      <div v-if="isLoggedIn" class="my-10 text-white">
        <div class="flex-col bg-card_background px-4 py-4 rounded justify-center items-center">
          <div class="rounded-full mx-auto overflow-hidden w-8 h-8">
            <img class="object-cover"
                 :src="userData.photo_url ? userData.photo_url : 'https://images.unsplash.com/photo-1610376541408-0deb8c3f1183?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'"
                 alt=""
            >
          </div>
          <p class="font-medium mt-2 text-sm text-center overflow-ellipsis">
            {{ userData.name ? userData.name : 'Anonymous' }}</p>
          <p class="mt-1 text-xs text-center overflow-ellipsis">{{
              userData.email ? userData.email : 'Not Logged In'
            }}</p>
        </div>
      </div>

      <!--  Menu    -->
      <div
        class="text-white font-medium flex-col space-y-5 mt-6"
      >
        <div v-for="(items, index) in menu" :key="items.color">
          <hr v-if="index !== 0" class="border-dashed border-t-1 mr-3 my-4 border-opacity-50 border-gray-700">
          <div class="flex space-x-6 items-center" @click="$store.commit('drawer/toggleDrawer')">
            <div>
              <div v-html="items.icon"></div>
            </div>
            <NuxtLink :class="`hover:${items.color}`" :to="items.to">{{ items.title }}</NuxtLink>
          </div>
        </div>
      </div>

      <!--  Account Action    -->
      <div v-if="!isLoggedIn" class="flex flex-wrap space-x-3 mt-12 justify-center items-center text-white">
        <div class="rounded bg-primary-600 text-center px-4 py-2">Register</div>
        <div class="rounded bg-card_background2 text-center px-4 py-2">Login</div>
      </div>
    </div>
  </div>
</template>

<script>
import drawerMenu from 'static/Data/menu/main-drawer-menu.json'

export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters['auth/isUserLoggedIn']
    },
    userData: function () {
      return this.$store.getters['auth/getUserData']
    }
  },
  data: function () {
    return {
      menu: drawerMenu.menu,
    }
  },
  methods: {
    log: function () {
      console.log(this.isLoggedIn)
    }
  },
  name: 'MenuDropdown'
}
</script>

<style scoped>

</style>
