<template>
  <div class="text-center">
    <div>
      <div class="flex space-x-2 text-white items-center justify-center">
        <h3 class="font-bold text-xl">{{ heading }}</h3>
        <div :class="color">
          <slot></slot>
        </div>

      </div>
      <div>
        <h3 class="font-extrabold text-white font-extrabold text-3xl mt-4">{{ value }}</h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }

  },
  name: 'CounterComponent',
}
</script>

<style scoped>

</style>
