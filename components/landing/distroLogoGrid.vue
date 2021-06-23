<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div>
          <div class="flex-col text-white font-sans">
            <h2 class="font-extrabold text-primary">ANDRONIX</h2>
            <h2 class="font-bold text-4xl">Distributions</h2>
            <p class="text-sm mt-3">Ever thought of trying out new distros? We provide a large variety of distros to
              choose from.
              Just choose any of your favourite distro and you are ready to roll.
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 mt-8 gap-8 justify-center items-center">
        <img content="Debian Linux" v-tippy class="gray justify-self-center w-9 lg:w-12"
             src="~assets/images/distro/debian.svg" alt="">
        <img content="Ubuntu Linux" v-tippy class="gray justify-self-center w-9 lg:w-12"
             src="~assets/images/distro/ubuntu.svg" alt="">
        <img content="Manjaro Linux" v-tippy class="gray justify-self-center w-9 lg:w-12"
             src="~assets/images/distro/manjaro.svg" alt="">
        <img content="Arch Linux" v-tippy class="gray justify-self-center w-9 lg:w-12"
             src="~assets/images/distro/arch.svg" alt="">
        <img content="Fedora Linux" v-tippy class="gray justify-self-center w-9 lg:w-12"
             src="~assets/images/distro/fedora.svg" alt="">
        <img content="Kali Linux" v-tippy class="gray justify-self-center w-9 lg:w-12"
             src="~assets/images/distro/kali.svg" alt="">
        <img content="Void Linux" v-tippy class="gray justify-self-center w-9 lg:w-12"
             src="~assets/images/distro/void.svg" alt="">
        <img content="Alpine Linux" v-tippy class="gray justify-self-center w-9 lg:w-12"
             src="~assets/images/distro/alpine.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DistroLogoGrid'
}
</script>

<style scoped>
</style>
