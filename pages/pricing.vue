<template>
  <div>
    <div class="mt-24 px-12 md:p-24 bg-background bg-landing-pattern bg-top">


      <Heading heading="Pricing"
               sub_heading="We hate subscriptions. All purchases here are one-time and life long. They sync all your devices automatically."
               deco_heading="ANDRONIX"
      />

      <XyzTransition appear duration="auto" mode="out-in" xyz="fade down flip-up">
        <div v-if="showDistroSelection">
          <DistroSelection/>
          <!--             Close button       -->
          <div @click="showDistroSelection = false"
               class=" flex justify-center items-center py-5"
          >
            <button
              class="bg-card_background px-3 py-2 rounded text-white font-bold text-sm"
            >Close Selection
            </button>
          </div>
        </div>
        <div v-else xyz="fade down flip-up"
             class="grid gap-x-16 gap-y-5 grid-cols-1 items-center lg:grid-cols-2 justify-center max-w-screen-lg mx-auto"
        >
          <PricingCard @purchase="purchase" v-for="product in productDetails"
                       :id="product.id"
                       :heading="product.heading"
                       :deco_heading="product.deco_heading"
                       :price="product.price"
                       :color="product.color"
                       :slashedPrice="product.slashedPrice"
                       :features="product.features"
          />
        </div>
      </XyzTransition>

      <Heading class="mt-24" heading="Andronix Bundles"
               sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores aut deleniti facere fuga minus officia perferendis praesentium tempore temporibus!"
               deco_heading="ANDRONIX"
      />

      <div class="grid gap-x-16 gap-y-5 grid-cols-1 items-center lg:grid-cols-2 justify-center max-w-screen-lg mx-auto">
        <PricingCard @purchase="purchase" v-for="product in bundleDetails"
                     :id="product.id"
                     :heading="product.heading"
                     :deco_heading="product.deco_heading"
                     :price="product.price"
                     :color="product.color"
                     :slashedPrice="product.slashedPrice"
                     :features="product.features"
        />
      </div>
    </div>
  </div>
</template>

<script>
import productDetails from '~/static/Data/pricing/product-details.json'

export default {
  data: function () {
    return {
      productDetails: productDetails.products,
      bundleDetails: productDetails.bundles,
      showDistroSelection: false
    }
  },
  methods: {
    purchase: function (id) {
      console.log(`Purchase clicked for the product ${id}`)
      this.showDistroSelection = id === 'modded_os'
    }
  },
  name: 'pricing'
}
</script>

<style scoped>

</style>
