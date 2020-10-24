describe('Positive Scenarios - Form authentication feature', function(){
  it('login with success', function(){
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!')
    cy.get('.button').should('contain', 'Logout')
    cy.url().should('eq', 'https://the-internet.herokuapp.com/secure')
  })
})

describe('Negative scenarios - Form authentication feature', function(){
  it('login with blank password and/or username', function(){

  })
})
