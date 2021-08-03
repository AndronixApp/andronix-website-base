<template>
  <div class="w-full bg-gray-700 px-8 py-4  transform transition duration-200"
       :class="get_animation_product_cards(index)"
  >
    <div class="flex-col text-white justify-center items-center">
      <p :class="isPaid? 'bg-primary-400': 'bg-green-400'"
         class="text-xs inline max-w-screen-sm px-2 bg-opacity-60 rounded-lg"
      >{{
          isPaid ? 'Paid' : 'Free'
        }}</p>
      <h3 class="font-extrabold text-2xl lg:text-3xl pb-3">{{ product }}</h3>
      <p class="lg:px-8">{{ description }}</p>
      <div class="inline-flex mt-4 space-x-2 cursor-pointer">
        <p v-if="!link.includes('https://')" @click="$router.push(link)"
           class="max-w-sm text-xs py-3 text-gray-400 hover:text-gray-200 transition transform duration-200 hover:underline"
        >Know
          more about {{ product }}</p>
        <a v-else :href="link" target="_blank"
           class="max-w-sm text-xs py-3 text-gray-400 hover:text-gray-200 transition transform duration-200 hover:underline"
        >Know
          more about {{ product }}</a>
        <svg class="w-4 text-primary-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
             fill="currentColor"
        >
          <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    get_animation_product_cards (index) {
      if (index === 0) {
        return 'md:hover:-translate-y-1.5 md:hover:-translate-x-1.5 hover:-translate-y-1.5'
      } else if (index === 1) {
        return 'md:hover:-translate-y-1.5 md:hover:translate-x-1.5 hover:-translate-y-1.5'
      } else if (index === 2) {
        return 'md:hover:translate-y-1.5 md:hover:-translate-x-1.5 hover:-translate-y-1.5'
      } else if (index === 3) {
        return 'md:hover:translate-y-1.5 md:hover:translate-x-1.5 hover:-translate-y-1.5'
      }

    },
  },
  props: {
    product: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isPaid: {
      type: Boolean,
      required: true
    },
  },
  name: 'ProductComponent'
}
</script>

<style scoped>

</style>
