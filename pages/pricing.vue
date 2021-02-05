<template>
  <div>
    <div class="mt-24 px-12 md:p-24 bg-background bg-top">


      <Heading heading="Pricing"
               sub_heading="We hate subscriptions. All purchases here are one-time and life long. They sync all your devices automatically."
               deco_heading="ANDRONIX"
      />

      <XyzTransition appear duration="auto" mode="out-in" xyz="fade down flip-up">
        <div xyz="fade down flip-up"
             class="grid gap-x-16 gap-y-5 grid-cols-1 items-center lg:grid-cols-2 justify-center max-w-screen-lg mx-auto"
        >
          <PricingCard @purchase="purchase(product.id)" v-for="product in productDetails"
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

      <h3
        class="opacity-10 pb-16 md:pb-24 text-white text-2xl flex justify-center items-center font-bold md:text-3xl lg:text-4xl"
      >
        COMING SOON...</h3>

      <!--      <div class="grid gap-x-16 gap-y-5 grid-cols-1 items-center lg:grid-cols-2 justify-center max-w-screen-lg mx-auto">
              <PricingCard @purchase="purchase" v-for="product in bundleDetails"
                           :id="product.id"
                           :heading="product.heading"
                           :deco_heading="product.deco_heading"
                           :price="product.price"
                           :color="product.color"
                           :slashedPrice="product.slashedPrice"
                           :features="product.features"
              />-->
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
      if (this.$store.getters['auth/isUserLoggedIn']) {
        if (id !== 'premium') {
          this.$router.push('checkout/buy')
        } else {
          this.$router.push('checkout/buy/premium')
        }
      } else {
        this.$router.push('auth/login')
      }
    }
  },
  name: 'pricing'
}
</script>

<style scoped>

</style>
