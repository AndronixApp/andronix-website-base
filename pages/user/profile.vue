<template>
  <div class="bg-background h-screen w-full bg-top text-white">
    <div class="mt-20 lg:mt-32 mx-16 md:mx-24 md:mx-48">
      <!--  Profile photo    -->
      <div class="h-20 w-20 border-solid border-5 border-primary-100 rounded-full overflow-hidden mx-auto">
        <img class="object-cover"
             :src="userData.photo_url ? userData.photo_url : 'https://images.unsplash.com/photo-1610376541408-0deb8c3f1183?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'"
             alt=""
        >
      </div>
      <div class="mt-10 text-center overflow-ellipsis">
        <p class="font-extrabold text-xl">
          {{ userData.name ? userData.name : 'Anonymous' }}</p>
        <p class="mt-1">{{
            userData.email ? userData.email : 'Not Logged In'
          }}</p>
      </div>

      <div class="flex justify-center items-center mt-1 space-x-2">
        <svg class="text-green-400 fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
             fill="currentColor"
        >
          <path fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
          />
        </svg>
        <p class="text-white font-semibold text-xs text-center">Premium User</p>

      </div>
      <div class="max-w-md mx-auto">
        <div class="grid gap-4 grid-cols-2 md:grid-cols-2 mt-10 text-white font-sans text-center">
          <FeatureCard v-if="!!purchaseObject" class="col-span-2" title="Andronix Premium"
                       :desc="purchaseObject[this.PREM_DOC] ? purchaseObject[this.PREM_DOC].payID : 'Not Purchased'"
                       color="bg-purple-400"
                       :disabled="!purchaseObject[this.PREM_DOC]"
          >
            <svg class="w-12 text-purple-400 stroke-current"
                 :class="purchaseObject[this.PREM_DOC] === false || !purchaseObject[this.PREM_DOC]? 'text-card_background2 stroke-current': 'text-purple-500 stroke-current'"
                 xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </FeatureCard>

          <FeatureCard v-if="!!purchaseObject" class="col-span-1" title="Ubuntu XFCE"
                       :desc="purchaseObject[this.UBUNTU_XFCE] !== false && purchaseObject[this.UBUNTU_XFCE] ? purchaseObject[this.UBUNTU_XFCE].payID : 'Not Purchased'"
                       color="bg-primary-400"
                       :singleLine="true"
                       :disabled="!purchaseObject[this.UBUNTU_XFCE]"
          >
            <svg class="w-20"
                 :class="purchaseObject[this.UBUNTU_XFCE] === false || !purchaseObject[this.UBUNTU_XFCE]? 'text-card_background2 fill-current': 'text-primary-500 fill-current'"
                 xmlns="http://www.w3.org/2000/svg" width="46" height="46"
            >
              <path
                d="M34.601 7.931a4.25 4.25 0 10-1.555-5.8 4.249 4.249 0 001.555 5.8zm-8.7 27.486a12.367 12.367 0 01-5.231-1.155l-2.954 5.293a18.464 18.464 0 0013.118 1.24 5.969 5.969 0 018-4.627A18.409 18.409 0 0044.32 24.19l-6.058-.088a12.414 12.414 0 01-12.366 11.316zm0-24.834a12.415 12.415 0 0112.366 11.316l6.058-.089a18.409 18.409 0 00-5.487-11.978 5.969 5.969 0 01-8-4.627 18.462 18.462 0 00-13.117 1.24l2.954 5.292a12.365 12.365 0 015.23-1.155zM13.484 23a12.4 12.4 0 015.28-10.158l-3.108-5.206a18.5 18.5 0 00-7.637 10.735 5.969 5.969 0 010 9.258 18.5 18.5 0 007.636 10.735l3.108-5.206a12.4 12.4 0 01-5.28-10.159zm21.117 15.07a4.25 4.25 0 105.8 1.555 4.249 4.249 0 00-5.8-1.555zM4.251 18.751a4.25 4.25 0 104.25 4.251 4.25 4.25 0 00-4.25-4.251"
                fill="currentColor"
              />
            </svg>
          </FeatureCard>


          <FeatureCard v-if="!!purchaseObject" class="col-span-1" title="Debian XFCE"
                       :desc="purchaseObject[this.DEBIAN_XFCE] !== false && purchaseObject[this.DEBIAN_XFCE]? purchaseObject[this.DEBIAN_XFCE].payID : 'Not Purchased'"
                       :disabled="!purchaseObject[this.DEBIAN_XFCE]"
                       color="bg-pink-900"
          >
            <svg class="w-16"
                 :class="purchaseObject[this.DEBIAN_XFCE] === false || !purchaseObject[this.DEBIAN_XFCE]? 'text-card_background2 fill-current': 'text-pink-900 fill-current'"
                 xmlns="http://www.w3.org/2000/svg" width="46" height="46.257"
            >
              <g fill="currentColor">
                <path
                  d="M27.358 30.057c-.956.013.181.492 1.428.684.345-.269.657-.541.936-.806a7.128 7.128 0 01-2.364.122M32.482 28.778a6.07 6.07 0 001.13-2.534 6.184 6.184 0 01-.8 1.758c-1.786 1.125-.168-.668 0-1.349-1.921 2.417-.264 1.45-.333 2.125M34.379 23.852c.115-1.721-.339-1.177-.491-.52.178.093.319 1.213.491.52"
                />
                <path
                  d="M40.655 24.505a8.5 8.5 0 01-.911 3.622l-.826.413c-.676 1.312.065.833-.418 1.877-1.055.938-3.2 2.935-3.889 3.118-.5-.011.34-.592.45-.819-1.412.97-1.133 1.456-3.293 2.045l-.063-.14c-5.327 2.506-12.727-2.46-12.63-9.237-.057.43-.162.323-.28.5a8.533 8.533 0 014.789-8.419 8.081 8.081 0 018.98 1.162 8.008 8.008 0 00-6.545-3.143 7.4 7.4 0 00-6.355 3.794c-1.448.912-1.617 3.515-2.248 3.992-.849 6.241 1.6 8.938 5.736 12.11.651.439.183.506.272.84a11.23 11.23 0 01-3.67-2.806 9.861 9.861 0 001.908 2.2c-1.3-.439-3.028-3.142-3.534-3.252 2.235 4 9.067 7.017 12.645 5.521a14.925 14.925 0 01-5.609-.656c-.781-.4-1.844-1.235-1.654-1.391a13.951 13.951 0 0014.151-2.005c1.075-.837 2.249-2.261 2.588-2.281-.511.768.087.37-.305 1.048 1.071-1.727-.465-.7 1.107-2.983l.581.8c-.216-1.434 1.78-3.175 1.578-5.442.458-.693.511.746.025 2.341.674-1.77.178-2.054.351-3.514a13.27 13.27 0 01.559 1.53c-.439-1.71.451-2.88.671-3.874-.217-.1-.678.756-.783-1.264.015-.877.244-.46.332-.676a3.878 3.878 0 01-.9-2.062c.2-.3.533.786.8.831a20.052 20.052 0 01-.487-2.595c-.792-1.656-.28.221-.923-.711-.843-2.631.7-.61.8-1.806a21.127 21.127 0 012.342 5.911 24.223 24.223 0 00-1.171-4.213c.388.163-.625-2.983.5-.9-1.2-4.435-5.162-8.585-8.801-10.532.446.408 1.008.92.806 1-1.811-1.078-1.493-1.162-1.752-1.618-1.476-.6-1.572.048-2.55 0-2.781-1.475-3.317-1.318-5.876-2.242l.116.544c-1.843-.614-2.147.233-4.138 0-.121-.095.638-.342 1.263-.433-1.781.235-1.7-.351-3.441.065A14.812 14.812 0 0122.296 0c-1.453.088-3.468.845-2.846.157-2.369 1.057-6.578 2.541-8.939 4.755l-.074-.5c-1.082 1.3-4.719 3.88-5.009 5.562l-.289.068a31.183 31.183 0 00-1.375 3.019c-.736 1.255-1.079.483-.975.68a45.863 45.863 0 00-2.79 7.429c.443.662.011 3.985.178 6.645-.726 13.136 9.221 25.89 20.093 28.835a21.889 21.889 0 005.98.607c-2.379-.68-2.686-.361-5-1.168-1.671-.787-2.038-1.686-3.221-2.713l.468.828c-2.322-.822-1.35-1.017-3.239-1.615l.5-.654a4.3 4.3 0 01-2.332-1.939l-.823.032c-.989-1.22-1.516-2.1-1.478-2.781l-.266.474c-.3-.517-3.639-4.577-1.907-3.632a3.9 3.9 0 01-1.213-1.321l.353-.4a6.707 6.707 0 01-1.48-2.9 1.884 1.884 0 001.052.809c-2.1-5.221-2.222-.288-3.816-5.314l.337-.027a11.161 11.161 0 01-.621-1.227l.147-1.462c-1.515-1.752-.424-7.448-.205-10.572.152-1.27 1.264-2.623 2.111-4.743l-.516-.089c.986-1.72 5.629-6.906 7.779-6.639 1.042-1.309-.207 0-.411-.334 2.288-2.368 3.008-1.673 4.552-2.1 1.665-.989-1.429.386-.64-.377 2.879-.735 2.04-1.672 5.8-2.045.4.225-.919.348-1.25.641 2.4-1.174 7.591-.907 10.963.651 3.913 1.829 8.31 7.234 8.483 12.321l.2.053c-.1 2.022.309 4.36-.4 6.508l.483-1.017"
                />
                <path
                  d="M16.928 31.369l-.134.67a12.875 12.875 0 001.928 2.444c-.577-1.126-1.006-1.592-1.794-3.114M18.408 31.311a5.314 5.314 0 01-.749-1.251 8.7 8.7 0 001.049 2.117l-.294-.867M44.683 25.6l-.14.352a16.994 16.994 0 01-1.665 5.314 16.7 16.7 0 001.805-5.666"
                />
              </g>
            </svg>
          </FeatureCard>


          <FeatureCard v-if="!!purchaseObject" class="col-span-1" title="Debian XFCE"
                       :desc="purchaseObject[this.UBUNTU_KDE] !== false && purchaseObject[this.UBUNTU_KDE]? purchaseObject[this.UBUNTU_KDE].payID : 'Not Purchased'"
                       :disabled="!purchaseObject[this.UBUNTU_KDE]"
                       color="bg-blue-400"
          >
            <svg class="w-20"
                 :class="purchaseObject[this.UBUNTU_KDE] === false || !purchaseObject[this.UBUNTU_KDE]? 'text-card_background2 fill-current': 'text-blue-400 fill-current'"
                 xmlns="http://www.w3.org/2000/svg" width="71.43" height="75.51"
            >
              <path
                d="M41.634 0L29.076 1.202v51.71l12.424-1.87V28.995l16.7 24.452 13.1-4.143-17.1-23.516 17.23-22.18L58.07.536 41.5 22.715zM13.168 12.6a.637.637 0 00-.385.184l-4.929 4.928a.638.638 0 00-.093.782l5.771 9.5a24.665 24.665 0 00-2.432 5.538l-10.594 2.2A.638.638 0 000 36.36v6.969a.636.636 0 00.486.619l10.282 2.513a24.634 24.634 0 002.521 6.39l-5.952 9.076a.637.637 0 00.083.8l4.927 4.928a.642.642 0 00.783.1l9.327-5.664a24.659 24.659 0 005.9 2.453l2.176 10.463a.637.637 0 00.624.507h6.97a.637.637 0 00.619-.487l2.559-10.485a24.564 24.564 0 006.065-2.552l9.191 6.026a.637.637 0 00.8-.081l4.929-4.928a.635.635 0 00.093-.782l-3.355-5.529-1.085.343a.375.375 0 01-.424-.147l-4.9-7.178a19.97 19.97 0 11-25.976-27.295v-5.152A24.6 24.6 0 0023 18.875l-.005-.006-9.407-6.17a.639.639 0 00-.415-.1z"
                fill="currentColor"
              />
            </svg>
          </FeatureCard>


          <FeatureCard v-if="!!purchaseObject" class="col-span-1" title="Debian XFCE"
                       :desc="purchaseObject[this.DEBIAN_XFCE] !== false && purchaseObject[this.DEBIAN_XFCE]? purchaseObject[this.DEBIAN_XFCE].payID : 'Not Purchased'"
                       :disabled="!purchaseObject[this.DEBIAN_XFCE]"
                       color="bg-pink-900"
          >
            <svg class="w-16"
                 :class="purchaseObject[this.DEBIAN_XFCE] === false || !purchaseObject[this.DEBIAN_XFCE]? 'text-card_background2 fill-current': 'text-pink-900 fill-current'"
                 xmlns="http://www.w3.org/2000/svg" width="46" height="46.257"
            >
              <g fill="currentColor">
                <path
                  d="M27.358 30.057c-.956.013.181.492 1.428.684.345-.269.657-.541.936-.806a7.128 7.128 0 01-2.364.122M32.482 28.778a6.07 6.07 0 001.13-2.534 6.184 6.184 0 01-.8 1.758c-1.786 1.125-.168-.668 0-1.349-1.921 2.417-.264 1.45-.333 2.125M34.379 23.852c.115-1.721-.339-1.177-.491-.52.178.093.319 1.213.491.52"
                />
                <path
                  d="M40.655 24.505a8.5 8.5 0 01-.911 3.622l-.826.413c-.676 1.312.065.833-.418 1.877-1.055.938-3.2 2.935-3.889 3.118-.5-.011.34-.592.45-.819-1.412.97-1.133 1.456-3.293 2.045l-.063-.14c-5.327 2.506-12.727-2.46-12.63-9.237-.057.43-.162.323-.28.5a8.533 8.533 0 014.789-8.419 8.081 8.081 0 018.98 1.162 8.008 8.008 0 00-6.545-3.143 7.4 7.4 0 00-6.355 3.794c-1.448.912-1.617 3.515-2.248 3.992-.849 6.241 1.6 8.938 5.736 12.11.651.439.183.506.272.84a11.23 11.23 0 01-3.67-2.806 9.861 9.861 0 001.908 2.2c-1.3-.439-3.028-3.142-3.534-3.252 2.235 4 9.067 7.017 12.645 5.521a14.925 14.925 0 01-5.609-.656c-.781-.4-1.844-1.235-1.654-1.391a13.951 13.951 0 0014.151-2.005c1.075-.837 2.249-2.261 2.588-2.281-.511.768.087.37-.305 1.048 1.071-1.727-.465-.7 1.107-2.983l.581.8c-.216-1.434 1.78-3.175 1.578-5.442.458-.693.511.746.025 2.341.674-1.77.178-2.054.351-3.514a13.27 13.27 0 01.559 1.53c-.439-1.71.451-2.88.671-3.874-.217-.1-.678.756-.783-1.264.015-.877.244-.46.332-.676a3.878 3.878 0 01-.9-2.062c.2-.3.533.786.8.831a20.052 20.052 0 01-.487-2.595c-.792-1.656-.28.221-.923-.711-.843-2.631.7-.61.8-1.806a21.127 21.127 0 012.342 5.911 24.223 24.223 0 00-1.171-4.213c.388.163-.625-2.983.5-.9-1.2-4.435-5.162-8.585-8.801-10.532.446.408 1.008.92.806 1-1.811-1.078-1.493-1.162-1.752-1.618-1.476-.6-1.572.048-2.55 0-2.781-1.475-3.317-1.318-5.876-2.242l.116.544c-1.843-.614-2.147.233-4.138 0-.121-.095.638-.342 1.263-.433-1.781.235-1.7-.351-3.441.065A14.812 14.812 0 0122.296 0c-1.453.088-3.468.845-2.846.157-2.369 1.057-6.578 2.541-8.939 4.755l-.074-.5c-1.082 1.3-4.719 3.88-5.009 5.562l-.289.068a31.183 31.183 0 00-1.375 3.019c-.736 1.255-1.079.483-.975.68a45.863 45.863 0 00-2.79 7.429c.443.662.011 3.985.178 6.645-.726 13.136 9.221 25.89 20.093 28.835a21.889 21.889 0 005.98.607c-2.379-.68-2.686-.361-5-1.168-1.671-.787-2.038-1.686-3.221-2.713l.468.828c-2.322-.822-1.35-1.017-3.239-1.615l.5-.654a4.3 4.3 0 01-2.332-1.939l-.823.032c-.989-1.22-1.516-2.1-1.478-2.781l-.266.474c-.3-.517-3.639-4.577-1.907-3.632a3.9 3.9 0 01-1.213-1.321l.353-.4a6.707 6.707 0 01-1.48-2.9 1.884 1.884 0 001.052.809c-2.1-5.221-2.222-.288-3.816-5.314l.337-.027a11.161 11.161 0 01-.621-1.227l.147-1.462c-1.515-1.752-.424-7.448-.205-10.572.152-1.27 1.264-2.623 2.111-4.743l-.516-.089c.986-1.72 5.629-6.906 7.779-6.639 1.042-1.309-.207 0-.411-.334 2.288-2.368 3.008-1.673 4.552-2.1 1.665-.989-1.429.386-.64-.377 2.879-.735 2.04-1.672 5.8-2.045.4.225-.919.348-1.25.641 2.4-1.174 7.591-.907 10.963.651 3.913 1.829 8.31 7.234 8.483 12.321l.2.053c-.1 2.022.309 4.36-.4 6.508l.483-1.017"
                />
                <path
                  d="M16.928 31.369l-.134.67a12.875 12.875 0 001.928 2.444c-.577-1.126-1.006-1.592-1.794-3.114M18.408 31.311a5.314 5.314 0 01-.749-1.251 8.7 8.7 0 001.049 2.117l-.294-.867M44.683 25.6l-.14.352a16.994 16.994 0 01-1.665 5.314 16.7 16.7 0 001.805-5.666"
                />
              </g>
            </svg>
          </FeatureCard>


        </div>
      </div>

    </div>
  </div>
</template>

<script>
const UBUNTU_XFCE_DOC = 'ubuntu_xfce'
const DEBIAN_XFCE_DOC = 'debian_xfce'
const UBUNTU_KDE_DOC = 'ubuntu_kde'
const MANJARO_XFCE_DOC = 'manjaro_xfce'
const PREM_DOC = 'premium'
import { functions } from '~/plugins/firebase'

export default {
  created () {
    this.UBUNTU_XFCE = UBUNTU_XFCE_DOC
    this.DEBIAN_XFCE = DEBIAN_XFCE_DOC
    this.MANJARO_XFCE = MANJARO_XFCE_DOC
    this.UBUNTU_KDE = UBUNTU_KDE_DOC
    this.PREM_DOC = PREM_DOC
  },
  mounted () {
    this.getPurchases()
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters['auth/isUserLoggedIn']
    },
    userData: function () {
      return this.$store.getters['auth/getUserData']
    }
  },
  data: function () {
    return {
      purchaseObject: {}
    }
  },
  methods: {
    getPurchases () {
      let get = functions.httpsCallable('productListerWithDetails')
      get({ email: this.userData.email }).then((result) => {
        console.log(result.data[UBUNTU_XFCE_DOC])
        this.purchaseObject = result.data
      }).catch(e => {
        console.log(e)
      })
    }
  },
  watch: {
    isLoggedIn: function () {
      this.getPurchases()
    }
  },
  name: 'index'
}
</script>

<style scoped>

</style>
