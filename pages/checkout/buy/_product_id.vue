<template>

  <div
    class="flex-col bg-background  px-12 md:px-24 pb-10 items-center"
  >
    <loading :active.sync="isLoading"
             background-color="#0F1535"
             color="#ff8b25"
             :is-full-page="true"
    />
    <XyzTransition appear-visible xyz="fade right-100%">
      <div id="checkout_section_product_selection" v-if="currentStep === this.PRODUCT_SELECTION"
           class="top-section mx-10 md:mx-20"
      >
        <Heading heading="Product Selection"
                 sub_heading="Please select the product you want to purchase."
                 deco_heading="CHECKOUT"
        />
        <div class="mt-12 mb-8 text-center">
          <h3 class="text-white font-bold text-2xl">Andronix Premium</h3>
          <h3 class="text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, impedit. Learn
            more
            <NuxtLink class="text-primary-400" to="/products/premium">here.</NuxtLink>
          </h3>
        </div>

        <div id="checkout_premium_cta" @click="setSelectedProduct('premium')"
             class="cursor-pointer hover:scale-105 transition transform duration-300 flex-col justify-between max-w-screen-sm mx-auto"
        >
          <div class="rounded-t-lg md:rounded-t-lg bg-card_background text-white py-3 px-5 ">
            <h1 class="font-extrabold text-4xl py-3 text-purple-400">PR</h1>
            <h2 class="text-lg font-bold pb-2">Andronix Premium</h2>
            <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus atque cupiditate
              ducimus
              ea eos fugiat neque quam quo unde.</p>
          </div>
          <div class="h-1.5 rounded-b-lg bg-purple-400">
          </div>
        </div>

        <hr class="border-dashed border-t-1 mr-3 my-10 border-opacity-70 border-gray-600">

        <div class="mt-12 mb-8 text-center">
          <h3 class="text-white font-bold text-2xl">Andronix Modded OS</h3>
          <h3 class="text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, impedit. Learn
            more
            <NuxtLink class="text-primary-400" to="/products/modded-os">here.</NuxtLink>
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 pb-16 md:pb-24 lg:grid-cols-4 justify-center items-center gap-5">
          <div v-for="os in moddedProducts" :key="os.id">
            <div @click="setSelectedProduct(os.id)"
                 class="cursor-pointer hover:scale-105 transition transform duration-300 flex-col justify-between"
            >
              <div class="rounded-t-lg md:rounded-t-lg bg-card_background text-white py-3 px-5">
                <h1 class="font-extrabold text-4xl py-3" :class="os.color_text">{{ os.logo_text }}</h1>
                <h2 class="text-lg font-bold pb-2">{{ os.name }}</h2>
                <p class="pb-2">{{ os.description }}</p>
              </div>
              <div class="h-1.5 rounded-b-lg" :class="os.color_bg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </XyzTransition>
    <!--   Details   -->
    <XyzTransition appear-visible xyz="fade left-100% delay-5">
      <div id="checkout_section_details" v-if="currentStep === this.DETAILS">
        <h3 class="form heading-2 md:text-left mt-16 mb-10 md:mb-16 md:mt-20">Billing Information</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-8">

          <!--   Form     -->
          <div>
            <FormulateForm
              class="login-form"
              ref="form"
              @submit="submitForm"
              #default="{ hasErrors }"
            >
              <div class="lg:max-w-screen-md">
                <div class="grid gap-x-5 gap-y-2 grid-cols-1 md:grid-cols-2">
                  <!--   Name       -->
                  <FormulateInput
                    type="text"
                    id="checkout_first_name_input"
                    name="first_name"
                    label="First Name"
                    placeholder="Your cool name goes here..."
                    input-class="formulate-input-class"
                    label-class="formulate-label-class"
                    error-class="formulate-error-class"
                    outer-class="mb-4"
                    help-class="formulate-help-class"
                    validation="required"
                  />
                  <FormulateInput
                    type="text"
                    name="last_name"
                    label="Last Name"
                    id="checkout_first_last_input"
                    input-class="formulate-input-class"
                    label-class="formulate-label-class"
                    placeholder="Surname too!"
                    error-class="formulate-error-class"
                    outer-class="mb-4"
                    help-class="formulate-help-class"
                    validation="required"
                  />
                  <FormulateInput
                    type="email"
                    id="checkout_email_input"
                    name="email"
                    v-model="get_email_of_user"
                    disabled="true"
                    label="Email"
                    input-class="formulate-input-class"
                    label-class="formulate-label-class"
                    error-class="formulate-error-class"
                    outer-class="mb-4"
                    help-class="formulate-help-class"
                    validation="^required|email"
                  />
                  <FormulateInput
                    type="number"
                    id="checkout_postal_code_input"
                    name="postal_code"
                    label="Postal Code"
                    input-class="formulate-input-class"
                    label-class="formulate-label-class"
                    error-class="formulate-error-class"
                    placeholder="If we ever needed to write you letters"
                    outer-class="mb-4"
                    help-class="formulate-help-class"
                    validation="^required|number"
                  />

                  <FormulateInput
                    type="text"
                    name="address"
                    label="Address"
                    id="checkout_address_input"
                    input-class="formulate-input-class"
                    placeholder="Your address"
                    label-class="formulate-label-class"
                    error-class="formulate-error-class"
                    outer-class="mb-4"
                    help-class="formulate-help-class"
                    validation="required"
                  />
                  <FormulateInput
                    type="select"
                    name="country"
                    label="Country"
                    id="checkout_country_input"
                    v-model="selectedCountry"
                    :options="country_list"
                    input-class="formulate-input-class"
                    placeholder="Select your country"
                    label-class="formulate-label-class"
                    error-class="formulate-error-class"
                    outer-class="mb-4"
                    help-class="formulate-help-class"
                    validation="required"
                  />
                  <FormulateInput
                    type="select"
                    name="state"
                    label="State"
                    id="checkout_state_input"
                    :options="getStateListOfSelectedCountry(selectedCountry)"
                    input-class="formulate-input-class"
                    label-class="formulate-label-class"
                    placeholder="Select your state"
                    error-class="formulate-error-class"
                    outer-class="mb-4"
                    help-class="formulate--class"
                    validation="required"
                  />
                  <!--          </div>-->
                </div>

                <!-- Coupon  -->
                <div v-if="!couponApplied" class="flex space-x-5 mt-5 pb-1 items-center">
                  <div>
                    <input id="checkout_coupon_input" v-model="couponCodeEntered" placeholder="Coupon Code"
                           class="input uppercase" type="text"
                    >
                  </div>
                  <div>
                    <button id="checkout_coupon_validate_button" @click="validateCoupon"
                            class="rounded text-white font-bold text-sm px-4 py-3 bg-primary-600"
                    >APPLY
                    </button>
                  </div>
                </div>

                <div id="checkout_coupon_success_div" v-if="couponApplied" class="flex space-x-5">
                  <p id="checkout_coupon_success_text" class="font-medium font-bold my-4 text-green-500"
                  >
                    {{ couponText }}</p>
                  <svg id="checkout_coupon_remove_button" @click="removeCoupon" class="w-5 text-red-500 fill-current"
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20"
                       fill="currentColor"
                  >
                    <path fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                    />
                  </svg>
                </div>


                <recaptcha class="mt-6"/>
                <FormulateInput
                  type="submit"
                  id="checkout_submit"
                  :input-class="`w-full rounded font-bold py-3 px-3 mt-4 text-white transition transform duration-300 ${!hasErrors ?'bg-primary-500 opacity-1':'bg-gray-600 opacity-50'}`"
                  :disabled="hasErrors"
                  :label="isLoading ? 'Loading...' : 'Proceed'"
                />
              </div>
            </FormulateForm>


          </div>

          <!--  Billing Invoice kinda    -->
          <div class="pb-16 md:pb-24 max-w-md">
            <div class="bg-card_background rounded px-4 py-3">
              <div class="flex-col text-white">
                <div class="flex justify-between">
                  <div>
                    <h2 class="font-bold text-lg">Selected Product</h2>
                    <h2 id="checkout_billing_info_selected_product" class="mb-2 mt-1 opacity-70 text-sm"
                        ref="selected_product_text"
                    >Loading...</h2>
                  </div>
                  <svg id="checkout_billing_info_delete_select_product" @click="deleteSelectedProduct"
                       class="text-red-600 cursor-pointer mr-3 stroke-current w-5 hover:scale-105 transform transition duration-100 ease-in-out"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
                <hr class="border-dashed border-t-1 mr-3 my-4 border-opacity-70 border-gray-600">
                <div class="flex justify-between">
                </div>
                <div class="flex justify-between">
                  <p>Product price</p>
                  <p id="checkout_billing_info_selected_product_price" class="text-sm opacity-60"
                     ref="product_price_text"
                  >....</p>
                </div>
                <div class="flex justify-between mt-3">
                  <p class="font-bold text-2xl">Total</p>
                  <h2 id="checkout_billing_info_selected_product_total" class="font-bold opacity-70 text-xl"
                      ref="product_total_text"
                  >....</h2>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
    </XyzTransition>


    <!--  Payment awaiting...  -->
    <XyzTransition appear-visible xyz="fade left-100% delay-5">
      <div v-if="currentStep === this.PAYING"
           class="flex-col h-screen space-y-10 justify-center items-center pt-10"
      >
        <div class="text-white text-center font-extrabold opacity-50 text-4xl md:text-5xl lg:text-7xl">
          {{ get_payment_status }}
        </div>
        <svg class="mx-auto text-primary-400 opacity-50 stroke-current w-10 md:w-16 mt-10 md:mt-20 animate-spin"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24" stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </div>
    </XyzTransition>

  </div>

</template>

<script>
import countryList from '~/static/Data/misc/country.json'
import stateList from '~/static/Data/misc/state.json'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import moddedOs from '~/static/Data/pricing/modded-os-products.json'
import { getProductNameWithId } from '~/lib/checkout/productHelper'
import {
  generateOrderId,
  getCountryName, getPrices,
  ProductIdArray,
  verifyPurchase
} from '~/lib/checkout/checkoutHelper'
import { database } from '~/plugins/firebase'

const PRODUCT_SELECTION = 'product_selection'
const DETAILS = 'details'
const PAYING = 'paying'
const SUCCESS = 'success'
const FAILED = 'failed'

export default {
  async asyncData ({ params }) {
    const product_id = params.product_id
    return { product_id }
  },
  created () {
    this.observeBillingStatus()
    if (this.is_billing_active) {
      if (this.product_id && ProductIdArray.includes(this.product_id)) {
        this.setSelectedProduct(this.product_id)
      }
      this.PRODUCT_SELECTION = PRODUCT_SELECTION
      this.DETAILS = DETAILS
      this.PAYING = PAYING
      this.SUCCESS = SUCCESS
      this.FAILED = FAILED
    } else {
      this.$router.push('/pricing')
    }
  },
  head () {
    return {
      script: [
        {
          src:
            'https://checkout.razorpay.com/v1/checkout.js'
        }
      ],
    }
  },
  name: 'buy',
  components: { Loading },
  data () {
    return {
      currentStep: PRODUCT_SELECTION,

      selectedCountry: '1',
      isCouponError: null,
      isLoading: false,
      moddedProducts: moddedOs['modded-os'],
      selectedProductId: '',
      order_id: '',
      couponText: '',
      couponCodeEntered: '',
      couponApplied: null,
      paymentStatus: 'Awaiting Payment...'
    }
  },
  computed: {
    is_billing_active () {
      return this.$store.getters['checkout/getBillingState']
    },
    get_payment_status () {
      return this.paymentStatus
    },
    country_list: function () {
      return countryList
    },
    get_email_of_user: function () {
      return this.$store.getters['auth/getEmail']
    }
  },
  methods: {
    async observeBillingStatus () {
      try {
        if (window.Cypress) {
          console.log('Running in cypress')
          await this.$store.dispatch('checkout/setBillingState', true)
        } else {
          await database.ref('billingStatus/isActive').on('value', async (snapshot) => {
            let isBillingActive = snapshot.val()
            console.log({ isBillingActive })
            await this.$store.dispatch('checkout/setBillingState', isBillingActive)
          })
        }
      } catch (e) {
        console.log(e)
      }
    },
    removeCoupon () {
      this.couponApplied = null
      this.setSelectedProduct(this.selectedProductId)
    },
    async validateCoupon () {
      this.isLoading = true
      try {
        let couponEntered = this.couponCodeEntered.toUpperCase()
        let res = await
          this.$axios.$get(`/coupon/verify/?coupon_code=${couponEntered}`)
        if (res.isValid === true) {
          this.couponApplied = couponEntered
          this.couponCodeEntered = ''
          this.$toast.success('Coupon applied!')
          this.couponText = `${couponEntered} applied!`
          this.setCouponedPrices(this.selectedProductId, res.pricing)
          this.isLoading = false
        } else {
          this.isLoading = false
          this.$toast.error('Coupon doesn\'t exists')
        }
      } catch (e) {
        console.log(e)
        this.isLoading = false
        this.$toast.error('Coupon validation failed.')
      }
    },
    deleteSelectedProduct () {
      this.selectedProductId = ''
      this.currentStep = PRODUCT_SELECTION
    },
    async setSelectedProduct (id) {

      this.selectedProductId = id
      this.currentStep = DETAILS
      this.isLoading = true

      const pricingData = await getPrices(id, this.$axios)
      this.$refs.product_price_text.innerHTML = pricingData.price
      this.$refs.product_total_text.innerHTML = pricingData.price
      this.$refs.selected_product_text.innerHTML = pricingData.name
      this.scrollToTop()
      this.isLoading = false
    },
    setCouponedPrices (id, couponPriceObj) {
      let price = `$ ${(parseInt(couponPriceObj[id]) / 100).toFixed(2)}`
      this.$refs.product_price_text.innerHTML = price
      this.$refs.product_total_text.innerHTML = price
      this.$refs.selected_product_text.innerHTML = getProductNameWithId(id)
    },
    getStateListOfSelectedCountry: function (country_id) {
      return stateList[country_id]
    },
    async submitForm (data) {
      this.isLoading = true
      /* ============== CHECKING FOR COUPON ===============*/
      if (this.couponApplied) {
        data.coupon = this.couponApplied
      } else {
        data.coupon = null
      }
      /*=================================================*/
      let token
      try {
        /* ===========CAPTCHA============= */
        try {
          token = await this.$recaptcha.getResponse()
        } catch (e) {
          this.isLoading = false
          this.$toast.error('Are... are you a bot? Please complete the captcha.')
          return
        }
        await this.$axios.get(`/sec/captcha?token=${token}`)
        /* =============================== */

        /* ===========SETTING DATA============= */
        data.uid = this.$store.getters['auth/getUserData'].uid
        data.product_id = this.selectedProductId
        data.product_name = getProductNameWithId(this.selectedProductId)
        data.country = getCountryName(data.country)
        await this.$store.dispatch('checkout/setUserBillingData', data)
        this.currentStep = PAYING
        // todo check if it's not empty
        /* ============================================= */

        /* ===========GENERATING ORDER============= */
        this.paymentStatus = 'Generating Order...'
        this.order_id = await generateOrderId(data, this.$axios)
        this.paymentStatus = 'Awaiting Payment...'
        /* ============================================= */

        /* ===========STARTING PAYMENT FLOW============= */
        this.startPaymentFlow(data)
        /* ============================================= */
        await this.$recaptcha.reset()
        this.isLoading = false

      } catch (error) {
        this.isLoading = false
        this.$toast.error('An error occurred!')
        console.log('Login error:', error)
      }
    },
    startPaymentFlow: function (data) {
      const verificationHandler = this.verifyPurchase
      const resetIfClosed = this.resetIfClosed
      const key = 'rzp_test_YLoi6QYb1Sq3sy'
      let options = {
        key,
        'name': data.product_name,
        'description': `Andronix App - ${data.product_name}`,
        order_id: this.order_id,
        'prefill': {
          'name': data.first_name + data.last_name,
          'email': data.email,
        },
        'theme': {
          'color': '#ff8b25'
        },
        modal: {
          'ondismiss': function () {
            resetIfClosed()
          }
        },
        handler: function (response) {
          this.paymentStatus = 'Verifying Payment'
          const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
          } = response
          verificationHandler({
            rzpay_order_id: razorpay_order_id,
            rzpay_payment_id: razorpay_payment_id,
            rzpay_signature: razorpay_signature,
          })
        }
      }
      const rzp1 = new Razorpay(options)

      rzp1.on('payment.failed', function (response) {
        console.log(response)
        this.$toast.error(response.error.reason)
        this.$toast.info('You can retry your payment if available.')
      })
      rzp1.open()

    },
    resetIfClosed () {
      this.currentStep = PRODUCT_SELECTION
    },
    verifyPurchase: async function (data) {
      try {
        const isOK =
          await verifyPurchase(data, axios)
        this.isLoading = false
        if (isOK) {
          this.currentStep = SUCCESS
          await this.$router.push(`/checkout/success/${data.rzpay_order_id}`)
        } else {
          this.currentStep = FAILED
          await this.$router.push(`/checkout/failure/verification`)
        }
      } catch (e) {
        console.log(e)
      }
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    }

  },
  beforeDestroy () {
    this.$recaptcha.destroy()
  }
  ,
  watch: {
    selectedCountry: (val) => {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
