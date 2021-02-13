<template>
  <div class="container h-screen text-center flex justify-center items-center">
    <div>
      <h3 class="font-extrabold text-white mt-8 text-4xl md:text-5xl">{{ get_error }}</h3>
      <h5 class="text-gray-300 pt-3 text-lg">It's not you, it's us.</h5>
      <div class="pt-10 text-sm  text-gray-400 ">
        <p class="underline">Let's get you back</p>
        <PrimaryTextButton @click="$router.push('/')" class="pt-3"
                           label="Keep Exploring"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    get_error () {
      if (this.error.statusCode === 404) {
        return 'Are you lost?'
      } else if (error.statusCode >= 500) {
        return 'There\'s a problem...'
      }
    }
  },
  props: ['error'],
  name: 'error'
}
</script>

<style scoped>

</style>
