/// <reference types="cypress" />

describe('docs', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders heading', () => {
    cy.getBySel('heading').contains('Example App')
  })
})
