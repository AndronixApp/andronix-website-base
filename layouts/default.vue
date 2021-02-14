<template>
  <div class="bg-background">
    <NavBar/>
    <SideBar/>
    <Nuxt class="lg:max-w-screen-2xl pt-20 mx-auto"/>
    <Footer/>
  </div>
</template>


<script>
import { auth, database } from '~/plugins/firebase'

export default {
  created () {
    this.observeAuthStateChange()
    this.observeBillingStatus()
  },
  methods: {
    async observeBillingStatus () {
      try {
        await database.ref('billingStatus').child('isActive').on('value', async (snapshot) => {
          let isBillingActive = snapshot.val()
          await this.$store.dispatch('checkout/setBillingState', isBillingActive)
        })
      } catch (e) {
        console.log(e)
      }
    },
    observeAuthStateChange () {
      let ctx = this
      auth.onAuthStateChanged(function (user) {
        if (user) {
          let data = {
            email: user.email,
            uid: user.uid,
            photo_url: user.photoURL,
            name: user.displayName
          }
          console.log({ data })
          ctx.$store.commit('auth/SET_USER_INFO', data)
          ctx.$store.commit('auth/SET_LOGGED_IN_STATE', true)
        } else {
          ctx.$store.commit('auth/SET_USER_INFO', null)
          ctx.$store.commit('auth/SET_LOGGED_IN_STATE', false)
        }
      })
    }
  }
}
</script>


<style>
*,
html {

}

body {
  background-color: #0f1535;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>

