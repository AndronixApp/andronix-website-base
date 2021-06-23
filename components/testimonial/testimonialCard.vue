<template>
  <div>
    <div :class="`bg-card_background bg-opacity-70 transform ${tilt} rounded-lg`">
      <div class="px-8 py-6">
        <svg width="45" height="36" class="mb-5 fill-current text-gray-200 opacity-30">
          <path
            d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
          ></path>
        </svg>
        <p class="font-sans text-white">{{ quote }}</p>
      </div>
      <div :class="`${bg_gradient} px-8 py-3 rounded-b-lg`">
        <div class="flex justify-between">
          <div class="flex-col">
            <p class="font-sans text-white font-bold">{{ name }}</p>
            <p class="font-sans text-white text-sm">{{ platform }}</p>
          </div>
          <slot></slot>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      required: true
    },
    tilt: {
      type: String,
      required: true
    },
    bg_gradient: {
      type: String,
      required: true
    }

  },
  name: 'TestimonialCard'
}
</script>

<style scoped>

</style>
