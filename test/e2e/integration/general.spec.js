describe('Drawer Tests', () => {
  it('hamburger should open drawer', () => {
    cy.visit('/')
    cy.get('#nav_hamburger').click()
    cy.get('#drawer_main').should('have.class', 'translate-x-0')
  })

  it('should redirect to premium page', () => {
    cy.visit('/')
    cy.get('#nav_hamburger').click()
    cy.get('#drawer_main_premium').click()
    cy.url().should('include', '/products/premium')
  })
})
