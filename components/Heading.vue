<template>
  <div class="px-5 py-5 mb-16 md:mb-24">
    <div>
      <div class="flex-col text-white font-sans text-center text-4xl sm:text-6xl lg:text-7xl space-y-3">
        <h2 class="font-extrabold text-primary-500 text-lg md:text-xl lg:text-2xl">{{ deco_heading }}</h2>
        <h2 class="font-extrabold ">{{ heading }}</h2>
        <h2 class="font-medium text-base md:text-xl text-center text-gray-300 space">{{ sub_heading }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    sub_heading: {
      type: String,
      required: true,
    },
    deco_heading: {
      type: String,
      required: true,
    },
  },
  name: 'Heading'
}
</script>

<style scoped>

</style>
