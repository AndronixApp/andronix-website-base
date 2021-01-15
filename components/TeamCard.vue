<template>
  <XyzTransition appear duration="auto">
    <div class="rounded-lg max-w-sm bg-card_background px-4 py-3 flex-col justify-center items-center">
      <div xyz="fade big duration-6 delay-1 stagger ease-out-back">
        <img class="h-16 w-16 mx-auto rounded-full my-5 xyz-nested"
             :src="photo_url"
             alt=""
        >
        <div class="text-white text-center xyz-nested">
          <h3 class="text-lg font-bold">{{ name }}</h3>
          <h5 class="font-light text-sm">{{ position }}</h5>
        </div>
        <!--  Quote   -->
        <div v-if="quote" class="px-8 py-6 relative xyz-nested">
          <svg width="45" height="36" class="mb-5 absolute top-3 left-4 fill-current text-gray-200 opacity-10">
            <path
              d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
            ></path>
          </svg>
          <p class="font-sans text-center text-sm text-white">{{ quote }}</p>
        </div>
      </div>
    </div>
  </XyzTransition>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    photo_url: {
      type: String,
      required: true,
    },
  },
  name: 'TeamCard'
}
</script>

<style scoped>

</style>
