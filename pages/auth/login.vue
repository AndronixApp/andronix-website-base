<template>

  <div class="bg-background">
    <loading :active.sync="isLoading"
             background-color="#0F1535"
             color="#ff8b25"
             :is-full-page="true"
    />
    <div class="mt-32 lg:mt-24 px-12 md:py-12 md:px-24 flex bg-background justify-center items-center top-section">
      <div>
        <XyzTransition appear-visible xyz="fade small">
          <h1 class="heading tracking-tight">Welcome.</h1>
        </XyzTransition>
        <div>

          <XyzTransition appear-visible xyz="fade right-100% small">
            <FormulateForm
              class="login-form"
              ref="form"
              @submit="loginWithEmail"
              #default="{ hasErrors }"
            >
              <div class="w-10/12 mx-auto">
                <div class="grid gap-x-5 grid-cols-1 mb-6 mt-12">

                  <!--   Name       -->
                  <FormulateInput
                    type="text"
                    name="email"
                    id="login_email_input"
                    placeholder="Email"
                    input-class="formulate-input-class"
                    label-class="formulate-label-class"
                    error-class="formulate-error-class"
                    outer-class="mb-4"
                    help-class="formulate-help-class"
                    validation="^required|email"
                  />
                  <FormulateInput
                    type="password"
                    name="password"
                    id="login_password_input"
                    input-class="formulate-input-class"
                    label-class="formulate-label-class"
                    placeholder="Password"
                    error-class="formulate-error-class"
                    outer-class="mb-4"
                    help-class="formulate-help-class"
                    validation="required|min:6,length"
                  />
                </div>

                <FormulateInput
                  type="submit"
                  id="login_submit_button"
                  :input-class="`md:w-full w-10/12 mx-auto flex justify-center items-center rounded font-bold py-3 px-3 text-white transition transform duration-300 ${!hasErrors ?'bg-primary-500 opacity-1':'bg-gray-600 opacity-50'}`"
                  :disabled="hasErrors"
                  :label="isLoading ? 'Loading...' : 'Login'"
                />

              </div>
            </FormulateForm>
          </XyzTransition>
        </div>

        <div class="my-4 text-gray-500 text-sm text-center">OR</div>
        <XyzTransition appear-visible xyz="fade left-100% small">
          <div>
            <div
              class="md:w-full w-10/12 mx-auto px-4 mx-5 py-2 bg-card_background rounded cursor-pointer transition duration-300 hover:bg-card_background_accent"
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
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
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
            <p class="text-white mt-8 text-center">New here?
              <NuxtLink to="/auth/register" class="underline font-extrabold">Register</NuxtLink>
            </p>
          </div>
        </XyzTransition>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  created () {
    if (this.$store.getters['auth/isUserLoggedIn']) {
      console.log('Logged in')
      this.$router.push('/user/profile')
    } else {
      console.log('Not Logged in')
    }
  },
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
  computed: {
    isLoggedIn: function () {
      return this.$store.getters['auth/isUserLoggedIn']
    },
  },
  methods: {
    async loginWithEmail (data) {
      this.isLoading = true
      try {
        await this.$store.dispatch('auth/loginUserWithEmailPassword', {
          email: data.email,
          password: data.password
        })
        this.isLoading = false
        await this.$router.push('/')
      } catch (e) {
        this.isLoading = false
        this.$toast.error(e)
      }
    },
    async googleLogin () {
      this.isLoading = true
      try {
        await this.$store.dispatch('auth/loginWithGoogle')
        this.isLoading = false
        await this.$router.push('/')
      } catch (e) {
        this.isLoading = false
        this.$toast.error(e)
      }
    },
  },
  watch: {
    isLoggedIn (val) {
      console.log(val)
      if (val) {
        console.log('Logged in')
        this.$router.push('/user/profile')
      } else {
        console.log('Not Logged in')
      }
    }
  },
  name: 'index.vue'
}
</script>

<style scoped>

</style>
