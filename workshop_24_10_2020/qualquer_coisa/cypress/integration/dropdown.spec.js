it('selects 1 option', function(){
  cy.visit('https://the-internet.herokuapp.com/dropdown')
  cy.get('#dropdown').select('Option 1')
  cy.get('#dropdown').select('Option 2')
  cy.get('#dropdown').should('have.value', '2')
})
