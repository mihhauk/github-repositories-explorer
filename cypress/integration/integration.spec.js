/// <reference types="cypress" />

context('Integration test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.server()
  })

  it('search is working', () => {
    const username = 'testuser'
    cy.route(
      `https://api.github.com/search/users?q=${username}&per_page=5`,
      'fixture:searchUsers'
    )
    cy.route(`https://api.github.com/users/${username}/repos`, 'fixture:repos')

    cy.get('input').type(username)
    cy.get('button').click()
    cy.get('ul').contains('testuser').click()
    expect(cy.contains('haml-test')).to.exist
    expect(cy.contains('wwwsqldesigner')).to.exist
  })
})
