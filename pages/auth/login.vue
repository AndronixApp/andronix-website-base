<template>
  <div class="bg-background">
    <loading :active.sync="isLoading"
             background-color="#0F1535"
             color="#ff8b25"
             :is-full-page="true"
    />
    <div class="flex justify-center items-center top-section">
      <div>
        <h1 class="heading tracking-tight">Welcome!</h1>
        <div>
          <input
            v-model="email"
            class="input mt-10 mb-3"
            placeholder="Email"
            type="email"
          >
          <input v-model="password"
                 class="input mb-10"
                 placeholder="Password"
                 type="password"
          >
        </div>
        <div
          class="px-4 mx-5 py-2 bg-card_background rounded cursor-pointer transition duration-300 hover:bg-card_background_accent"
          @click="emailLogin"
        >
          <div class="flex justify-between items-center">
            <div class="mr-10">
              <svg class="fill-current text-green-400 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                   fill="currentColor"
              >
                <path fill-rule="evenodd"
                      d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                      clip-rule="evenodd"
                />
              </svg>
            </div>
            <p class="text-white font-semibold text-lg text-center -ml-5 mr-5">Continue with Email</p>
          </div>
        </div>
        <div class="my-4 text-gray-500 text-sm text-center">OR</div>
        <div
          class="px-4 mx-5 py-2 bg-card_background rounded cursor-pointer transition duration-300 hover:bg-card_background_accent"
          @click="googleLogin"
        >
          <div class="flex justify-between items-center">
            <div class="mr-10">
              <svg class="fill-current text-green-400 w-4 ml-1" viewBox="0 0 533.5 544.3"
                   xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                  fill="#4285f4"
                />
                <path
                  d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                  fill="#34a853"
                />
                <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                />
                <path
                  d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                  fill="#ea4335"
                />
              </svg>
            </div>
            <p class="text-white font-semibold text-lg text-center -ml-5 mr-5">Continue with Google</p>
          </div>
        </div>


      </div>
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
  data: () => {
    return {
      isLoading: false,
      email: '',
      password: '',
    }
  },
  methods: {
    emailLogin:
      function () {
        this.isLoading = true
        this.$store.dispatch('auth/loginUserWithEmailPassword', {
          email: this.email,
          password: this.password
        }).then(() => {
          this.$router.push('/')
        }).catch(e => {
          console.log(e)
        })
        this.isLoading = false
        console.log(`Email is ${this.$store.getters['auth/getEmail']}`)
      },
    googleLogin:
      function () {
        this.isLoading = true
        this.$store.dispatch('auth/loginWithGoogle').then(() => {
          this.$router.push('/')
        }).catch(e => {
          console.log(e)
        })
        this.isLoading = false
        console.log(`Email is ${this.$store.getters['auth/getEmail']}`)
      }
    ,
  },
  name: 'index.vue'
}
</script>

<style scoped>

</style>
