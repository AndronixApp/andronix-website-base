import Chance from 'chance'

const chance = new Chance()

describe('Checkout Tests', () => {
  /* Logout if logged in */
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('#nav_hamburger').click()
    cy.wait(2000)
    cy.get('body').then(($body) => {
      return !!$body.find('#drawer_logout_button').length
    })
      .then((isLoggedIn) => {
        if (isLoggedIn) {
          cy.get('#drawer_logout_button').click()
          cy.wait(2000)
        }
      })
  })

  it('should redirect to auth when not authenticated', function () {
    cy.visit('/pricing')
    cy.get('#pricing_table_modded_os_button').click()
    cy.url().should('include', '/login')
  })

  //todo captcha loading forever
  /*it('should not allow submitting the form if the captcha isn\'t filled', function () {
    cy.login('cypress@test.io', 'ioioio')
    /!* Continue with our checkout testing *!/
    cy.visit('/pricing')
    cy.wait(2000)
    cy.get('#pricing_table_modded_os_button').click()
    cy.url().should('include', '/checkout')

    /!* Mocking the pricing API *!/
    cy.intercept('GET', '/v1/gen/pricing', {
      statusCode: 200,
      fixture: 'pricing.json'
    }).as('pricingFetch')
    cy.get('#checkout_premium_cta').click()
    cy.wait('@pricingFetch')

    /!*waiting for the captcha to actually load*!/
    cy.wait(4000)

    /!* We'll fill out the form now *!/
    cy.fill_out_form()

    cy.get('#checkout_submit').click()
    cy.get('.v-toast__text').should('have.text', 'Are... are you a bot? Please complete the captcha.')
  })*/

  it('should correctly switch between checkout steps', function () {
    cy.login('cypress@test.io', 'ioioio')
    /* Continue with our checkout testing */
    cy.visit('/pricing')
    cy.wait(2000)
    cy.get('#pricing_table_modded_os_button').click()
    cy.url().should('include', '/checkout')

    /* The first we enter this page, we should see the product selection first and not the form. */
    cy.get('#checkout_section_product_selection').should('exist')
    cy.get('#checkout_section_details').should('not.exist')

    /* Mocking the pricing API */
    cy.intercept('GET', '/v1/gen/pricing', {
      statusCode: 200,
      fixture: 'pricing.json'
    }).as('pricingFetch')
    cy.get('#checkout_premium_cta').click()
    cy.wait('@pricingFetch')

    /* Now after selecting the product the product selection section should be un-rendered and we'll have our form  */
    cy.get('#checkout_section_product_selection').should('not.exist')
    cy.get('#checkout_section_details').should('exist')
  })

  it('should not add an incorrect coupon and show a warning', function () {

    cy.login('cypress@test.io', 'ioioio')
    /* Continue with our checkout testing */
    cy.visit('/pricing')
    cy.wait(2000)
    cy.get('#pricing_table_modded_os_button').click()
    cy.url().should('include', '/checkout')

    /* Mocking the pricing API */
    cy.intercept('GET', '/v1/gen/pricing', {
      statusCode: 200,
      fixture: 'pricing.json'
    }).as('pricingFetch')
    cy.get('#checkout_premium_cta').click()
    cy.wait('@pricingFetch')

    /* We'll fill out the form now */
    cy.fill_out_form()

    /* Mocking the coupon API */
    cy.intercept('GET', '/v1/coupon/verify', {
      statusCode: 200,
      fixture: 'coupon-failure.json'
    }).as('couponValidationRequest')

    cy.get('#checkout_coupon_validate_button').click()
    cy.wait('@couponValidationRequest')

    /* We are using first because the coupon toast is triggered with the captcha toast randomly. This can lead to a flaky test. todo fix this. */
    cy.get('.v-toast__text').first().should('have.text', 'Coupon doesn\'t exists')
    cy.get('#checkout_coupon_success_text').should('not.exist')
  })

  it('should add a correct coupon', function () {

    cy.login('cypress@test.io', 'ioioio')
    /* Continue with our checkout testing */
    cy.visit('/pricing')
    cy.wait(2000)
    cy.get('#pricing_table_modded_os_button').click()
    cy.url().should('include', '/checkout')

    /* Mocking the pricing API */
    cy.intercept('GET', '/v1/gen/pricing', {
      statusCode: 200,
      fixture: 'pricing.json'
    }).as('pricingFetch')
    cy.get('#checkout_premium_cta').click()
    cy.wait('@pricingFetch')

    /* We'll fill out the form now */
    cy.fill_out_form()

    /* Mocking the coupon API */
    cy.intercept('GET', '/v1/coupon/verify', {
      statusCode: 200,
      fixture: 'coupon-success.json'
    }).as('couponValidationRequest')

    /* Add a coupon */
    cy.get('#checkout_coupon_input').type('TESTCOUPON')
    cy.get('#checkout_coupon_validate_button').click()
    cy.wait('@couponValidationRequest')

    /* We are using first because the coupon toast is triggered with the captcha toast randomly. This can lead to a flaky test. todo fix this. */
    cy.get('.v-toast__text').first().should('have.text', 'Coupon applied!')

    /* Post coupon validation actions */
    cy.contains('#checkout_coupon_success_text', 'TESTCOUPON applied!')
    cy.contains('#checkout_billing_info_selected_product', 'Andronix Premium')
    cy.contains('#checkout_billing_info_selected_product_price', '$ 1.60')
    cy.contains('#checkout_billing_info_selected_product_total', '$ 1.60')

    /* Coupon input and submit button should be gone */
    cy.get('#checkout_coupon_input').should('not.exist')
    cy.get('#checkout_coupon_validate_button').should('not.exist')

    /* Now we will test the removal of the coupon */
    cy.get('#checkout_coupon_remove_button').click()
    cy.get('#checkout_coupon_input').should('exist')
    cy.get('#checkout_coupon_validate_button').should('exist')
    cy.get('#checkout_coupon_success_text').should('not.exist')
    cy.get('#checkout_coupon_remove_button').should('not.exist')
  })

  it('should delete the selected product from the billing summary when trash icon is clicked and state should be restored', function () {
    cy.login('cypress@test.io', 'ioioio')
    /* Continue with our checkout testing */
    cy.visit('/pricing')
    cy.wait(2000)
    cy.get('#pricing_table_modded_os_button').click()
    cy.url().should('include', '/checkout')

    /* The first we enter this page, we should see the product selection first and not the form. */
    cy.get('#checkout_section_product_selection').should('exist')
    cy.get('#checkout_section_details').should('not.exist')

    /* Mocking the pricing API */
    cy.intercept('GET', '/v1/gen/pricing', {
      statusCode: 200,
      fixture: 'pricing.json'
    }).as('pricingFetch')
    cy.get('#checkout_premium_cta').click()
    cy.wait('@pricingFetch')

    /* Now after selecting the product the product selection section should be un-rendered and we'll have our form  */
    cy.get('#checkout_section_product_selection').should('not.exist')
    cy.get('#checkout_section_details').should('exist')

    cy.get('#checkout_billing_info_delete_select_product').click()
    /* selection should be restored */
    cy.get('#checkout_section_product_selection').should('exist')
    cy.get('#checkout_section_details').should('not.exist')
  })

})
