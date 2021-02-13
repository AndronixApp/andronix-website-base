<template>
  <div class="bg-background bg-top">
    <loading
      :active.sync="isLoading"
      background-color="#0F1535"
      color="#ff8b25"
      :is-full-page="true"
    />
    <div class="px-12 md:p-24">
      <Heading
        heading="Pricing"
        sub_heading="We hate subscriptions. All purchases here are one-time and life long. They sync all your devices automatically."
        deco_heading="ANDRONIX"
      />

      <XyzTransition
        appear
        duration="auto"
        mode="out-in"
        xyz="fade down flip-up"
      >
        <div
          xyz="fade down flip-up"
          class="grid gap-x-16 gap-y-5 grid-cols-1 items-center lg:grid-cols-2 justify-center max-w-screen-lg mx-auto"
        >
          <PricingCard
            @purchase="purchase(product.id)"
            v-for="product in productDetails"
            :id="product.id"
            :css_id="product.css_id"
            :key="product.id"
            :heading="product.heading"
            :deco_heading="product.deco_heading"
            :price="
              pricingObject[product.id]
                ? pricingObject[product.id]
                : 'Loading...'
            "
            :color="product.color"
            :slashedPrice="product.slashedPrice"
            :features="product.features"
          />
        </div>
      </XyzTransition>

      <Heading
        class="mt-24"
        heading="Andronix Bundles"
        sub_heading="Save more with Andronix Bundles. Bundles will soon be generally available for you to get it here."
        deco_heading="ANDRONIX"
      />

      <h3
        class="opacity-10 pb-16 md:pb-24 text-white text-2xl flex justify-center items-center font-bold md:text-3xl lg:text-4xl"
      >
        COMING SOON...
      </h3>

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
import { getPrices } from '~/lib/checkout/checkoutHelper'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: { Loading },
  mounted () {
    //todo enable this
    this.getPricing()
  },
  data: function () {
    return {
      isLoading: false,
      productDetails: productDetails.products,
      bundleDetails: productDetails.bundles,
      showDistroSelection: false,
      pricingObject: {
        modded_os: null,
        premium: null,
      },
    }
  },
  methods: {
    async getPricing () {
     // this.isLoading = true
      let moddedRes = await getPrices('ubuntu_xfce', this.$axios)
      this.$set(this.pricingObject, 'modded_os', moddedRes.price)
      let premiumRes = await getPrices('premium', this.$axios)
      this.$set(this.pricingObject, 'premium', premiumRes.price)
      this.isLoading = false
    },
    purchase: function (id) {
      console.log(`Pricing ${this.$store.getters['auth/isUserLoggedIn']}`)
      if (this.$store.getters['auth/isUserLoggedIn']) {
        if (id !== 'premium') {
          this.$router.push('checkout/buy')
        } else {
          this.$router.push('checkout/buy/premium')
        }
      } else {
        this.$router.push('auth/login')
      }
    },
  },
  name: 'pricing',
}
</script>

<style scoped>
</style>
