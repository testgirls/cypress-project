describe('login com sucesso', function(){

  it('faz login com sucesso', function() {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()

    cy.get('#flash').should('contain', 'You logged into a secure area!')
    cy.get('h2').should('contain', 'Secure Area')
    cy.get('.subheader').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.')
    cy.get('.icon-2x').should('contain', 'Logout')
    cy.url().should('eq', 'https://the-internet.herokuapp.com/secure')
    cy.location('pathname').should('eq', '/secure')
  })

})

describe('login com falha', function(){

  beforeEach(function(){
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('faz login com usuario e senha invalidos', function() {
    cy.get('#username').type('catarina')
    cy.get('#password').type('senhaerrada!')
    cy.get('.fa').click()

    cy.get('#flash').should('contain', 'Your username is invalid!')
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
    cy.location('pathname').should('eq', '/login')
  })

  it('faz login com usuario correto e senha invalida', function() {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('senhaerrada!')
    cy.get('.fa').click()

    cy.get('#flash').should('contain', 'Your password is invalid!')
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
    cy.location('pathname').should('eq', '/login')
  })

  it('faz login com usuario e senha em branco', function() {
    cy.get('.fa').click()

    cy.get('#flash').should('contain', 'Your username is invalid!')
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
    cy.location('pathname').should('eq', '/login')
  })
})
