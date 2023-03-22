/// <reference types="cypress" />

describe('clima', () => {

  beforeEach(() => {
    cy.visit('https://www.google.com.br/')
  })
  it('pesquisar clima', () => {
    cy.get('input[name="q"').type('clima{enter}')
    console.log();
  });
})