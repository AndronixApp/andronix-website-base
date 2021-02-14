export const state = () => ({
  is_billing_active: false,
  selected_product_id: '',
  user_billing_data: {
    country: '',
    email: '',
    first_name: '',
    last_name: '',
    address: '',
    postal_code: '',
    state: '',
  }
})

export const mutations = {
  SET_BILLING_STATE (state, isActive) {
    state.is_billing_active = isActive
  },
  SET_SELECTED_PRODUCT_ID (state, id) {
    state.selected_product_id = id
  },
  SET_USER_BILLING_DATA (state, data) {
    state.user_billing_data = data
  }
}
export const getters = {
  getSelectedProductId (state) {
    return state.selected_product_id
  },
  getUserBillingData (state) {
    return state.user_billing_data
  },
  getBillingState (state) {
    return state.is_billing_active
  }
}

export const actions = {
  setBillingState ({ commit }, billingState) {
    return commit('SET_BILLING_STATE', billingState)
  },
  setSelectedProductId ({ commit }, id) {
    return commit('SET_SELECTED_PRODUCT_ID', id)
  },
  setUserBillingData ({ commit }, data) {
    return commit('SET_USER_BILLING_DATA', data)
  }
}
