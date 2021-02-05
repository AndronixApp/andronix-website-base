import axios from 'axios'

const fetchPricing = async (productId, axios) => {
  try {
    return await axios.get(`/gen/pricing?product_id=${productId}`)
  } catch (e) {
    console.log(e)
  }
}

import countryList from '~/static/Data/misc/country.json'

export const getCountryName = (countryID) => {
  return countryList[countryID]
}

export const ProductIdArray = [
  'premium',
  'ubuntu_xfce',
  'ubuntu_kde',
  'debian_xfce',
  'manjaro_xfce',
]

export const getPricesTaxes = async (productId, axios) => {
  let res = await fetchPricing(productId, axios)
  let productPrice = (parseInt(res.data.price) / 100).toFixed(2)
  let tax = (parseInt(res.data.tax) / 100).toFixed(2)
  let total = (+productPrice + +tax).toFixed(2)
  return {
    price: `$ ${productPrice.toString()}`,
    tax: `$ ${tax.toString()}`,
    total: `$ ${total.toString()}`,
    name: res.data.name
  }
}

export const generateOrderId = async (data, axios) => {
  try {
    const result = await axios.get('/rzp/generate', {
        params: data
      }
    )
    return result.data.order_id
  } catch (e) {
    console.log(e)
    return ''
  }
}

export const verifyPurchase = async (data, axios) => {
  try {
    const result = await axios.get('/rzp/verify', {
        params: data
      }
    )
    return result.data.is_verified
  } catch (e) {
    console.log(e)
    return false
  }
}
