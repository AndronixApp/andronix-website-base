<template>
  <div class="bg-background">
    <NavBar/>
    <MenuDropdown/>
    <Nuxt/>
  </div>
</template>


<script>
import { auth } from '~/plugins/firebase'

export default {
  created () {
    this.observeAuthStateChange()
  },
  methods: {
    observeAuthStateChange: function () {
      let ctx = this
      auth.onAuthStateChanged(function (user) {
        console.log('Hola!')
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
</style>

