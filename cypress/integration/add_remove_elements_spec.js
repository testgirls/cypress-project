it('adiciona 5 elementos ao clicar 5 vezes', function(){
  cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')

  var i
  for (i = 0; i < 5; i++) {
    cy.get('button').first().click()
  }

  cy.get('#elements >').its('length').should('eq', 5)

})
