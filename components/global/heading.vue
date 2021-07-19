<template>
  <XyzTransition :appear-visible="true" duration="auto">
    <div class="py-5 pb-16 px-6 md:pb-24 lg:max-w-screen-md mx-auto"
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
