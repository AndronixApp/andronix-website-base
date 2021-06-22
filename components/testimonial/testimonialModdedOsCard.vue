<template>
  <div>
    <div class="rounded-lg bg-card_background px-8 py-4">
      <div class="flex justify-between">
        <h3 class="text-white font-bold text-lg mb-2">{{ title }}</h3>
        <div class="mx-2 my-2">
          <slot></slot>
        </div>
      </div>
      <p class="text-gray-400 text-sm pr-7">{{ quote }}</p>
      <p class="text-gray-400 mt-2 text-xs pr-7 text-gray-400">- {{ name }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

  },
  name: 'TestimonialModdedOsCard'
}
</script>

<style scoped>

</style>
