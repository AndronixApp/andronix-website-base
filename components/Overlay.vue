<template>
  <div class="z-10 fixed inset-0 transition-opacity">
    <div class="absolute inset-0 bg-black opacity-50" @click="$store.commit('drawer/toggleDrawer')"></div>
  </div>
</template>

<script>
export default {
  name: 'Overlay'
}
</script>

<style scoped>

</style>
