<template>
  <XyzTransition appear duration="auto">
    <div class="px-10 md:px-16 lg:px-24 py-5 mb-16 md:mb-24"
    >
      <div class="flex-col space-y-4" xyz="fade flip-down duration-10 delay-2 stagger ease-out-back">
        <h2 class="deco-heading xyz-nested">{{ deco_heading }}</h2>
        <h2 class="heading xyz-nested">
          {{ heading }}</h2>
        <h2 class="sub-heading xyz-nested">{{ sub_heading }}</h2>
      </div>
    </div>
  </XyzTransition>
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
