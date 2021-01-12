<template>
  <div class="px-5 py-5 mb-16 md:mb-24">
    <div>
      <div class="flex-col space-y-4">
        <h2 class="deco-heading">{{ deco_heading }}</h2>
        <h2 class="heading">
          {{ heading }}</h2>
        <h2 class="sub-heading">{{ sub_heading }}</h2>
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
