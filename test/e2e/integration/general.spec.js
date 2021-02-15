describe('Drawer Tests', () => {
  it('hamburger should open drawer', () => {
    cy.visit('/')
    /* Waiting when nuxt actually builds the page */
    cy.wait(7000)
    cy.get('#nav_hamburger').click()
    cy.get('#drawer_main').should('have.class', 'translate-x-0')
  })

  it('should redirect to premium page', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('#nav_hamburger').click()
    cy.wait(100)
    cy.get('#drawer_main_premium').click()
    cy.url().should('include', '/products/premium')
  })
})
