<template>
  <div>
    <div class="bg-card_background rounded flex relative">
      <div class="w-1/4 rounded-l flex justify-center items-center px-4 py-2" :class="color">
        <slot></slot>
      </div>
      <div class="text-white w-3/4 font-sans px-4 py-2 ">
        <h2 class="font-bold mb-2 pr-16">
          {{ title }}
        </h2>
        <p class="text-sm break-normal">{{ description }}</p>
      </div>
      <div
        class="absolute bg-opacity-60 text-white -top-3 -right-3 rounded-full py-1 px-3 flex items-center justify-center"
        :class="color"
      >
        {{ step }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    step: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  name: 'StepsCard'
}
</script>

<style scoped>

</style>
