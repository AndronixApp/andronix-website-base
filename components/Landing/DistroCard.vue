<template>
  <div class="bg-gradient-to-r from-gray-700 to-card_background bg-opacity-50 px-5 py-2 rounded text-white flex">
    <img :src="distroData.imageSrc" class="w-7 mr-4" alt="">
    <div class="flex-col">
      <h1 class="font-bold">{{ distroData.name }}</h1>
      <h1 class="font-medium text-sm">{{ distroData.origin }}</h1>
    </div>
  </div>
</template>

<script lang="ts">

interface DistroData {
  name: string,
  origin: string,
  imageSrc: string
}

import { PropType } from 'vue'

export default {
  name: 'DistroCard',
  props: {
    distroData: {
      type: Object as PropType<DistroData>,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
