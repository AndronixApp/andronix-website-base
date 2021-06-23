<template>
    <div @click="$emit('click')">
      <div
        :class="`cursor-pointer px-4 py-3 flex items-center space-x-5 justify-center rounded ${backgroundColor} hover:${backgroundHoverColor} hover:translate-y-1.5 transition transform duration-300`"
      >
        <slot></slot>
        <p class="text-white font-bold">{{ label }}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      require: true,
    },
    backgroundHoverColor: {
      type: String,
      require: true,
    },
    label: {
      type: String,
      require: true,
    }
  },
  name: 'PrimaryButton'
}
</script>

<style scoped>

</style>
