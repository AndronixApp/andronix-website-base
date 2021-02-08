<template>
  <div>
    <div class=" grid grid-cols-1 lg:grid-cols-2 flex">
      <div >
        <div>
          <div class="flex-col text-white font-sans">
            <h2 class="font-extrabold text-primary">ANDRONIX</h2>
            <h2 class="font-bold text-4xl">Desktop Environments</h2>
            <p class="text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, hic ipsam qui
              reprehenderit ut voluptatem.</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 mt-8 gap-8 justify-center items-center">
        <img content="LXDE Desktop Environment" v-tippy  class="gray justify-self-center w-9 lg:w-12" src="~assets/images/distro/lxde.svg" alt="">
        <img content="LXQT Desktop Environment" v-tippy class="gray justify-self-center w-9 lg:w-12" src="~assets/images/distro/lxqt.svg" alt="">
        <img content="KDE Desktop Environment" v-tippy class="gray justify-self-center w-9 lg:w-12" src="~assets/images/distro/kde_logo.svg" alt="">
        <img content="XFCE Desktop Environment" v-tippy class="gray justify-self-center w-9 lg:w-12" src="~assets/images/distro/xfce.svg" alt="">
        <img content="MATE Desktop Environment" v-tippy class="gray justify-self-center w-9 lg:w-12" src="~assets/images/distro/mate.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeLogoGrid'
}
</script>

<style scoped>

</style>
