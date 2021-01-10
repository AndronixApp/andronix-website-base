export const state = () => ({
  isDrawerOpen: false
})

export const mutations = {
  toggleDrawer (state) {
    state.isDrawerOpen = !state.isDrawerOpen
  }
}

