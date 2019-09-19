it('nao testa nada com nada', function() {
  expect(true).to.equal(false)
})

it('navega ate o google', function () {
  cy.visit('http://google.com')
})
