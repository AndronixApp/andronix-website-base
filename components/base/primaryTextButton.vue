<template>
  <div @click="$emit('click')">
    <a :href="link" v-if="!!link">
      <div class="cursor-pointer rounded px-4 py-3 hover:-translate-y-1.5 transition transform duration-300"
           :class="`${backgroundColor?backgroundColor:'bg-primary-600'} hover:${backgroundHoverColor?backgroundHoverColor:'bg-white'}
         ${textColor?textColor:'text-white'} hover:${textHoverColor?textHoverColor:'text-primary-600'}`"
      >
        <p class="text-center text-current font-bold">{{ label }}</p>
      </div>
    </a>
    <div v-else class="cursor-pointer rounded px-4 py-3 hover:-translate-y-1.5 transition transform duration-300"
         :class="`${backgroundColor?backgroundColor:'bg-primary-600'} hover:${backgroundHoverColor?backgroundHoverColor:'bg-white'}
         ${textColor?textColor:'text-white'} hover:${textHoverColor?textHoverColor:'text-primary-600'}`"
    >
      <p class="text-center text-current font-bold">{{ label }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
    },
    backgroundHoverColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
    textHoverColor: {
      type: String,
    },
    label: {
      type: String,
      require: true,
    },
    link: {
      type: String
    }
  },
  name: 'PrimaryTextButton'
}
</script>

<style scoped>

</style>
