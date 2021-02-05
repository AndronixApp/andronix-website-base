import { auth } from '~/plugins/firebase'
import firebase from 'firebase'

export const state = () => ({
  isUserLoggedIn: false,
  user: {
    email: '',
    uid: '',
    photo_url: '',
    name: '',
  }
})

export const mutations = {
  SET_USER_INFO (state, userData) {
    if (userData) {
      state.user = {
        email: userData.email,
        uid: userData.uid,
        photo_url: userData.photo_url,
        name: userData.name
      }
    }
  },
  SET_LOGGED_IN_STATE (state, isLoggedIn) {
    console.log(`IsLoggedIn is ${isLoggedIn}`)
    state.isUserLoggedIn = isLoggedIn
  }
}
export const getters = {
  isUserLoggedIn: (state) => {
    return state.isUserLoggedIn
  },
  getUserData: (state) => {
    return {
      photo_url: state.user.photo_url,
      email: state.user.email,
      name: state.user.name,
      uid: state.user.uid
    }
  },
  getEmail: (state) => {
    return state.user.email
  }
}

export const actions = {
  loginUserWithEmailPassword ({ commit },
    {
      email,
      password
    },
  ) {
    return auth.signInWithEmailAndPassword(email, password).then(user => {
        let firebaseUser = user.user
        if (firebaseUser) {
          let data = {
            email: firebaseUser.email,
            uid: firebaseUser.uid,
            photo_url: firebaseUser.photoURL,
            name: firebaseUser.displayName
          }
          console.log({ data })
          commit('SET_LOGGED_IN_STATE', true)
          return commit('SET_USER_INFO', data)
        } else {
          commit('SET_USER_INFO', null)
          commit('SET_LOGGED_IN_STATE', false)
          console.log('Login failed')
        }
      }
    )

  },
  logoutUser ({ commit }) {
    auth.signOut().then(() => {
      commit('SET_LOGGED_IN_STATE', false)
      return commit('SET_USER_INFO', null)
    }).catch((e) => {
      console.log(e)
    })
  },
  loginWithGoogle ({ commit }) {
    let provider = new firebase.auth.GoogleAuthProvider()
    return auth.signInWithPopup(provider).then(result => {
        let firebaseUser = result.user
        if (firebaseUser) {
          let data = {
            email: firebaseUser.email,
            uid: firebaseUser.uid,
            photo_url: firebaseUser.photoURL,
            name: firebaseUser.displayName
          }
          console.log({ data })
          commit('SET_LOGGED_IN_STATE', true)
          return commit('SET_USER_INFO', data)
        } else {
          commit('SET_USER_INFO', null)
          commit('SET_LOGGED_IN_STATE', false)
          console.log('Login failed')
        }
      }
    )

  }
}
