<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 flex">
      <div >
        <div>
          <div class="flex-col text-white font-sans">
            <h2 class="font-extrabold text-primary">ANDRONIX</h2>
            <h2 class="font-bold text-4xl">Window Managers</h2>
            <p class="text-sm mt-3">Do you like to rice your setups and want to have a minimalistic and lightweight workspace? 
              We have most prominent Window Managers to select from so that you can flex your Linux rice on Android. </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 mt-8 gap-8 justify-center items-center">
        <img content="Awesome Window Manager" v-tippy class="gray justify-self-center w-9 lg:w-12" src="~assets/images/wm/Awesome_logo.svg" alt="">
        <img content="Openbox Window Manage" v-tippy class="gray justify-self-center w-9 lg:w-12" src="~assets/images/wm/openbox_logo.svg" alt="">
        <img content="i3 Window Manage" v-tippy class="gray justify-self-center w-12 lg:w-12" src="~assets/images/wm/I3_window_manager_logo.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WmLogoGrid'
}
</script>

<style scoped>

</style>
