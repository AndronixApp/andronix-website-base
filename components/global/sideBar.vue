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
      <overlay v-show="$store.state.drawer.isDrawerOpen"/>
    </transition>
    <div id="drawer_main"
         class="bg-gray-800 p-8 rounded-r-lg transform top-0 left-0 w-72 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
         :class="this.$store.state.drawer.isDrawerOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div
        class="flex cursor-pointer hover:-translate-y-0.5 hover:text-primary-400 transition text-white transform duration-100 justify-end mb-10"
      >
        <svg @click="$store.commit('drawer/toggleDrawer')" class="stroke-current text-current w-5"
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>

      <!--  Account Details    -->
      <div id="drawer_account" v-if="isLoggedIn"
           class="my-10 text-white"
      >
        <div @click="$store.commit('drawer/toggleDrawer');$router.push('/user/profile')"
             class="flex-col bg-gray-700 bg-opacity-40 px-4 py-4 rounded-lg justify-center items-center cursor-pointer hover:scale-105 duration-200 transform transition"
        >
          <div class="rounded-full mx-auto overflow-hidden w-8 h-8">
            <img class="object-cover"
                 :src="userData.photo_url ? userData.photo_url : '/static_images/default_dp.svg'"
                 alt=""
            >
          </div>
          <p class="font-medium mt-2 text-sm text-center overflow-ellipsis line-clamp-1">
            {{ userData.name ? userData.name : 'Email Sign-in' }}</p>
          <p class="mt-1 text-xs text-center overflow-ellipsis line-clamp-1">{{
              userData.email ? userData.email : 'Not Logged In'
            }}</p>
        </div>
      </div>


      <!--  Menu    -->
      <div id="drawer_menu"
           class="text-white font-medium flex-col space-y-5 mt-6"
      >
        <div v-for="(items, index) in menu" :key="items.color">
          <hr v-if="index !== 0" class="border-dashed border-t-1 mr-3 my-4 border-opacity-50 border-gray-700">
          <div
            class="cursor-pointer text-white flex space-x-6 items-center px-2"
            @click="$store.commit('drawer/toggleDrawer')"
          >
            <div>
              <div v-html="items.icon"></div>
            </div>
            <NuxtLink :class="`hover:${items.color}`" :id="items.id" v-if="!items.to.includes('https://')"
                      :to="items.to"
            >{{ items.title }}
            </NuxtLink>
            <a target="_blank"  :class="`hover:${items.color}`" :id="items.id" v-else :href="items.to">{{ items.title }}</a>
          </div>
        </div>
      </div>


      <hr class="border-dashed border-t-1 mr-3 my-4 border-opacity-50 border-gray-700">

      <!--  Logout Button    -->

      <div v-if="isLoggedIn" class="mt-10">
        <div id="drawer_logout_button" @click="logout"
             class="cursor-pointer px-3 -mt-4 py-2 bg-card_background flex items-center space-x-5 justify-center rounded hover:bg-background hover:scale-105 transition transform duration-300"
        >
          <svg class="text-white stroke-current w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <p class="text-white font-bold">Logout</p>
        </div>
      </div>


      <!--  Account Action    -->
      <div id="drawer_account_action" v-if="!isLoggedIn"
           class="flex flex-wrap space-x-3 mt-8 justify-center items-center text-white"
      >
        <div @click="$store.commit('drawer/toggleDrawer');$router.push('/auth/register')"
             class="rounded bg-primary-600 text-center px-4 py-2 hover:scale-105 transition transform duration-300 cursor-pointer"
        >Register
        </div>
        <div @click="$store.commit('drawer/toggleDrawer');$router.push('/auth/login')"
             class="rounded bg-card_background2 text-center px-4 py-2 hover:scale-105 transition transform duration-300 cursor-pointer"
        >Login
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawerMenu from '~/static/data/menu/main-drawer-menu.json'
import Overlay from "~/components/global/overlay";

export default {
  components: {Overlay},
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
    logout: async function () {
      this.$store.commit('drawer/toggleDrawer')
      return this.$store.dispatch('auth/logoutUser')
    }
  },
  name: 'SideBar'
}
</script>

<style scoped>

</style>
