it('Forgot password send email to recovery', function(){
  cy.visit('https://the-internet.herokuapp.com/forgot_password')
  cy.get('#email').type('fake@email.com')
  cy.get('#form_submit').click()
  cy.get('#content').should('contain', "Your e-mail's been sent!")
})
