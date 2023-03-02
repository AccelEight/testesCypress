/// <reference types="cypress" />

describe('testes alurapic', () => {
  
  //antes de tudo
  beforeEach(() => {
    cy.visit('http://alura-fotos.herokuapp.com/')
  })

  it('validar se contem o botão Register now', () => {
    cy.get('a[href="#/home/signup"]').contains('a', 'Register now').click();
  })

  it('validar mensagens de validacao', () => {
    cy.get('a[href="#/home/signup"]').contains('a', 'Register now').click();
    cy.contains('button', 'Register').click().click()
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
  })

  //email invalido
  it('validar mensagem de email invalido', () => {
    cy.get('a[href="#/home/signup"]').contains('a', 'Register now').click();
    cy.get('input[placeholder="email"').type('Accel')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
  })

  //minimo de 2 - full name
  it('validar mensagem de full name minimum length is 2', () => {
    cy.get('a[href="#/home/signup"]').contains('a', 'Register now').click();
    cy.get('input[placeholder="full name"').type('a')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
  })

  //maximo de 40 - full name
  it('validar mensagem de full name Maximun length is 40', () => {
    cy.get('a[href="#/home/signup"]').contains('a', 'Register now').click();
    cy.get('input[placeholder="full name"').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Maximun length is 40').should('be.visible')
  })

  //minimo de 2 - user name
  it('validar mensagem de user name Mininum length is 2', () => {
    cy.get('a[href="#/home/signup"]').contains('a', 'Register now').click();
    cy.get('input[placeholder="user name"').type('a')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
  })

  //maximo de 30 - user name
  it('validar mensagem de user name Maximun length is 40', () => {
    cy.get('a[href="#/home/signup"]').contains('a', 'Register now').click();
    cy.get('input[placeholder="user name"').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible')
  })

  //minimo 8 - password
  it('validar mensagem de password Mininum length is 8', () => {
    cy.get('a[href="#/home/signup"]').contains('a', 'Register now').click();
    cy.get('input[placeholder="password"').type('aaaa')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
  })

  //maximo 18 - password
  it('validar mensagem de password Maximun length is 18', () => {
    cy.get('a[href="#/home/signup"]').contains('a', 'Register now').click();
    cy.get('input[placeholder="password"').type('aaaaaaaaaaaaaaaaa')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible')
  })
})