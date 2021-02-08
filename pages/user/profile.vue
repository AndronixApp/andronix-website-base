<template>
  <div class="bg-background h-screen w-full bg-top text-white">
    <loading :active.sync="isLoading"
             background-color="#0F1535"
             color="#ff8b25"
             :is-full-page="true"
    />
    <div class="mt-20 lg:mt-32 md:mx-24 md:mx-48">
      <!--  Profile photo    -->
      <div class="h-20 w-20 border-solid border-5 border-primary-100 rounded-full overflow-hidden mx-auto">
        <img class="object-cover"
             :src="userData.photo_url ? userData.photo_url : '/static_images/default_dp.svg'"
             alt=""
        >
      </div>
      <div class="mt-10 text-center overflow-ellipsis">
        <p class="font-extrabold text-2xl md:text-3xl">
          {{ userData.name ? userData.name : 'Anonymous' }}</p>
        <p class="mt-1 text-gray-500 font-medium text-sm">{{
            userData.email ? userData.email : 'Not Logged In'
          }}</p>
      </div>

      <hr class="border-dashed border-t-1 max-w-sm my-10 mx-auto border-opacity-70 border-gray-600">

      <h3 class="font-black text-2xl mb-12 text-center">Purchases</h3>

      <div v-if="!isLoading && areNoPurchases"
           class="my-16 text-center"
      >
        <p class="font-bold text-gray-500">We've couldn't find any purchases...</p>
        <PrimaryTextButton class="my-6" @click="$router.push('/pricing')" label="CHECK OUR PRICING"/>
      </div>

      <XyzTransition appear-visible xyz="fade small left-100% delay-15">
        <div class="max-w-screen-sm mx-auto px-6 flex-col space-y-4" xyz="inner staggered fade small">
          <div v-for="(value, product) in purchaseObject" v-if="Object.keys(value).length>0"
               class="bg-card_background rounded flex justify-center items-center"
          >
            <div class="w-2/12 bg-card_background2 py-3 rounded">
              <h1 class="font-extrabold text-2xl md:text-3xl lg:text-4xl py-3 my-3 text-center"
                  :class="textColor(product)"
              >{{
                  logoText(product)
                }}</h1>
            </div>
            <div class="w-10/12 pl-6 py-3">
              <div class="text-white">
                <h4 class="font-extrabold capitalize mb-3">{{ product.replace('_', ' ') }}</h4>
                <h4 class="text-sm text-gray-400">{{ value.payID }}</h4>
                <h4 v-if="value.time" class="text-xs mt-2 text-gray-500">{{ value.time }}</h4>
              </div>
            </div>
          </div>
        </div>
      </XyzTransition>
    </div>
  </div>
</template>

<script>

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Loading
  },
  created () {
    if (!this.isLoggedIn) {
      this.$router.push('/auth/login')
    }
  },
  mounted () {
    this.getPurchases()
  },
  computed: {
    areNoPurchases () {
      let flag = true
      for (const product in this.purchaseObject) {
        console.log(Object.keys(this.purchaseObject[product]).length)
        if (Object.keys(this.purchaseObject[product]).length > 0) {
          flag = false
        }
      }
      return flag
    },
    isLoggedIn () {
      return this.$store.getters['auth/isUserLoggedIn']
    },
    userData () {
      return this.$store.getters['auth/getUserData']
    }
  },
  data: function () {
    return {
      purchaseObject: {},
      isLoading: true,
      email: this.$store.getters['auth/getEmail']
    }
  },
  methods: {
    logoText (product) {
      switch (product) {
        case 'ubuntu_xfce':
          return 'UX'
        case 'debian_xfce':
          return 'DX'
        case 'manjaro_xfce':
          return 'MX'
        case 'ubuntu_kde':
          return 'UK'
        case 'premium':
          return 'PR'
      }
    },
    textColor (product) {
      switch (product) {
        case 'ubuntu_xfce':
          return 'text-primary-400'
        case 'debian_xfce':
          return 'text-pink-400'
        case 'manjaro_xfce':
          return 'text-green-400'
        case 'ubuntu_kde':
          return 'text-blue-400'
        case 'premium':
          return 'text-purple-400'
      }
    },
    async getPurchases () {
      try {
        const res = await this.$axios.get(`/gen/purchases?email=${this.email}`)
        this.isLoading = false
        console.log(res.data)
        this.purchaseObject = res.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  name: 'index'
}
</script>

<style scoped>

</style>
