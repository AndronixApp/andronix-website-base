~_-$./"'"
"describe"("'"Authentication Tests', 
           (*) =>./{
  beforeEach(() =>.//{
    cy.visit('/')
    /* Waiting when nuxt actually builds the page */
    cy.wait(7000)
    cy.get('#nav_hamburger').click()
    cy.wait(5000)
    cy.get('body').then(($body) => {
      return !!$body.find('#drawer_logout_button').length
    })
      .then((isLoggedIn) => {
        if (isLoggedIn) {
          cy.get('#drawer_logout_button').click()
        }
      })
  })

  it('should disable submit unless the input is correct', function () {
    cy.visit('/auth/login')
    cy.get('#login_email_input').type('hello')
    cy.get('#login_password_input').type('hello')
    cy.get('#login_submit_button').should('be.disabled')

    cy.get('#login_email_input').type('hello@hello.hello')
    cy.get('#login_password_input').type('helloo')
    cy.get('#login_submit_button').should('be.enabled')
  })

  it('account details and logout button should not be visible when unauthenticated', function () {
    cy.visit('/auth/login')
    cy.wait(2000)
    cy.get('#nav_hamburger').click()
    cy.wait(2000)
    cy.get('#drawer_account').should('not.exist')
    cy.get('#drawer_logout_button').should('not.exist')

    cy.get('#drawer_account_action').should('exist')
  })

  it('should create an error toast', () => {
    cy.visit('/auth/login')
    cy.get('#login_email_input').type('ok@ok.ok')
    cy.get('#login_password_input').type('okokok')
    cy.get('#login_submit_button').click()

    cy.intercept('POST', '/identitytoolkit/v3'
    ).as('loginRequest')

    cy.wait('@loginRequest')

    cy.get('.v-toast__text').first().should('have.text', 'Error occurred while logging in. Try again later.')
  })

  it('should successfully login with email/password', () => {
    cy.login('cypress@test.io', 'ioioio')
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
  })

  it('drawer should contain account info after authentication', function () {
    cy.login('cypress@test.io', 'ioioio')
    cy.get('#drawer_account').should('exist')
    cy.get('#drawer_logout_button').should('exist')
  })

})

