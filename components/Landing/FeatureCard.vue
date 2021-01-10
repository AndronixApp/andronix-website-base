<template>
  <div>

    <div class="flex-col justify-between">
      <div class="rounded-t md:rounded-t-lg bg-card_background pb-6 pt-3 px-6">
        <div class="flex justify-start items-start my-4">
          <slot></slot>
        </div>
        <div class="text-white font-sans text-left">
          <h2 class="font-bold text-lg mb-4">
            {{ title }}
          </h2>
          <p class="text-sm">{{ desc }}</p>
        </div>
      </div>
      <div class="h-1.5 rounded-b md:rounded-b-lg" :class="color ? color : 'bg-primary'">
      </div>
    </div>
  </div>

  <!--    <div class="rounded bg-card_background p-6 flex-col items-center justify-center">
        <div class="rounded-full bg-background p-3 w-12 h-12 items-center justify-center flex mx-auto">
          <slot v-if="!image"></slot>
          <div v-html="image"></div>
        </div>

      </div>-->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    color: {
      type: String
    }
  },
  name: 'FeatureCard',
  data: () => {
    return {}
  }
}
</script>

<style scoped>

</style>
