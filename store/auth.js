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
    state.isUserLoggedIn = !!userData
    if (userData) {
      state.user = {
        email: userData.email,
        uid: userData.uid,
        photo_url: userData.photo_url,
        name: userData.name
      }
    } else {
      state.user = {
        email: '',
        uid: '',
        photo_url: '',
        name: ''
      }
    }
  },
  SET_LOGGED_IN_STATE (state, isLoggedIn) {
    return state.user.uid === '' || null
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
    return new Promise(async (resolve, reject) => {
        try {
          const user = await auth.signInWithEmailAndPassword(email, password)
          let firebaseUser = user.user
          if (firebaseUser) {
            commit('SET_USER_INFO', getUserData(user))
            resolve()
          } else {
            commit('SET_USER_INFO', null)
            reject('Error occurred while registering. Try again later.')
          }
        } catch (e) {
          if (e.code === 'auth/auth/user-not-found') {
            reject('This email is not registered with us. Please try again.')
          } else if (e.code === 'auth/wrong-password') {
            reject('Incorrect details, please try again.')
          } else if (e.code === 'auth/user-disabled') {
            reject('Account disable. Please contact us.')
          } else {
            reject('Error occurred while logging in. Try again later.')
          }
        }
      }
    )
  },

  registerUserWithEmailPassword ({ commit },
    {
      email,
      password
    },
  ) {
    return new Promise(async (resolve, reject) => {
        try {
          const user = await auth.createUserWithEmailAndPassword(email, password)
          let firebaseUser = user.user
          if (firebaseUser) {
            commit('SET_USER_INFO', getUserData(user))
            resolve()
          } else {
            commit('SET_USER_INFO', null)
            reject('Error occurred while registering. Try again later.')
          }
        } catch (e) {
          if (e.code === 'auth/email-already-in-use') {
            reject('Email is already registered.')
          } else if (e.code === 'auth/weak-password') {
            reject('Weak password. Please try again with a stronger one.')
          } else {
            reject('Error occurred while registering. Try again later.')
          }
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
  }
  ,
  loginWithGoogle ({ commit }) {
    return new Promise(async (resolve, reject) => {
        try {
          let provider = new firebase.auth.GoogleAuthProvider()
          let user = await auth.signInWithPopup(provider)
          let firebaseUser = user.user
          if (firebaseUser) {
            commit('SET_USER_INFO', getUserData(user))
            resolve()
          } else {
            commit('SET_USER_INFO', null)
            reject('Error occurred while registering. Try again later.')
          }
        } catch (e) {
          if (e.code === 'auth/account-exists-with-different-credential') {
            reject('User is not registered with Google sign-in but with other methods.')
          } else if (e.code === 'auth/cancelled-popup-request') {
            reject('You are generating too many requests.')
          } else if (e.code === 'auth/popup-blocked') {
            reject('Your browser is blocking pop up. Please disable it.')
          } else if (e.code === 'auth/popup-closed-by-user') {
            reject('Sign in pop-up closed. Please try again.')
          } else {
            reject('Error occurred while registering. Try again later.')
          }
        }
      }
    )
  }
}

const getUserData = (user) => {
  let firebaseUser = user.user
  if (firebaseUser) {
    let {
      email,
      uid,
      photoURL,
      displayName
    } = firebaseUser
    return {
      email,
      uid,
      name: displayName,
      photo_url: photoURL
    }
  } else {
    return {}
  }
}
