export const state = () => ({
  isDrawerOpen: false
})

export const mutations = {
  toggleDrawer (state, forced) {
    if (forced === undefined) {
      state.isDrawerOpen = !state.isDrawerOpen
    } else {
      state.isDrawerOpen = forced
    }
  }
}

export const getters = {
  getDrawerState (state) {
    return state.isDrawerOpen
  }
}

