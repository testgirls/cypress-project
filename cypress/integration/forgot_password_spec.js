it('envia email de recuperacao da senha', function() {
  cy.visit('https://the-internet.herokuapp.com/forgot_password')
  cy.get('#email').type('kjjkjkj@testgirls.com.br')
  cy.get('#form_submit').click()
  cy.get('#content').should('have.text', "\n        Your e-mail\'s been sent!\n\n      ")

  cy.url().should('eq', 'https://the-internet.herokuapp.com/email_sent')
  cy.location('pathname').should('eq', '/email_sent')
})
