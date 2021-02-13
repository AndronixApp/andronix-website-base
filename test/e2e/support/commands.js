// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/auth/login')
  cy.get('#login_email_input').type(email)
  cy.get('#login_password_input').type(password)
  cy.get('#login_submit_button').click()
  cy.get('#nav_hamburger').click()
  cy.wait(2000)
})

Cypress.Commands.add('fill_out_form', () => {

  cy.get('#checkout_first_name_input').type(chance.first())
  cy.get('#checkout_first_last_input').type(chance.last())
  cy.get('#checkout_email_input').should('be.disabled')
  cy.get('#checkout_postal_code_input').type(chance.postcode())
  cy.get('#checkout_address_input').type(chance.address())
  cy.get('#checkout_country_input').select('India')
  cy.get('#checkout_state_input').select('Uttar Pradesh')
})

Cypress.Commands.add('stub_pricing_request', () => {

})

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
