<template>
  <div>
    <div class="rounded-lg p-6 text-center justify-center items-center flex-col" :class="color">
      <h3 class="font-sans font-medium  text-sm text-white">{{ deco_heading }}</h3>
      <h2 class="text-white font-sans font-extrabold text-2xl">
        {{ heading }}
      </h2>
      <div class="mt-3">
        <h4 class="line-through text-gray-200 opacity-50">{{ slashedPrice }}</h4>
        <h4 class="text-white font-bold text-xl">{{ price }}</h4>
        <!--            <h4 class="text-white text-gray-900 text-sm">$ 1.00 with Premium</h4>-->
      </div>
      <div class="mt-5">
        <ul class="w-2/3 mx-auto">
          <li v-for="feature in features">
            <div class="flex items-center justify-start text-white text-left ml-4">
              <svg class="text-white fill-current w-5 mr-4 my-2" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 20 20" fill="currentColor"
              >
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                />
              </svg>
              {{ feature }}
            </div>
          </li>
        </ul>
      </div>
      <button @click="purchaseClicked"
              class="focus:outline-none hover:scale-105 hover:bg-card_background transform transition duration-300 bg-background shadow-lg rounded text-white text-center font-bold w-3/4 px-3 py-2 mt-9"
      >Purchase
      </button>
      <h4 class="text-white text-center mt-2 text-xs underline font-light">or Purchase via App</h4>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    color: {
      type: String,
      required: true
    },
    deco_heading: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    infoLink: {
      type: String,
      required: false,
    },
    features: {
      type: Array,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    slashedPrice: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    purchaseClicked: function () {
      this.$emit('purchase', this.id)
    }
  },
  name: 'Pricing',
}
</script>

<style scoped>

</style>
