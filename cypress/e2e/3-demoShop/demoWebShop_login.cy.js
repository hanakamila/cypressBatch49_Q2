describe('Login', () => {
  beforeEach(() => { 
    cy.visit('https://demowebshop.tricentis.com')
  })

  it('Login Success', () => {
    const email = 'HanaTest@gmail.com'
    const password = '123456'
    cy.get('.ico-login').click()
    cy.get('#Email').type(`${email}`)
    cy.get('#Password').type(`${password}`)
    cy.get('form > .buttons > .button-1').click()
    cy.contains('Welcome to our store').should('exist')
  })

  it('Login Failed (wrong email format)', () => {
    const email = '@gmail.com'
    const password = '123456'
    cy.get('.ico-login').click()
    cy.get('#Email').type(`${email}`)
    cy.get('#Password').type(`${password}`)
    cy.get('form > .buttons > .button-1').click()
    cy.contains('Please enter a valid email address').should('exist')
  })

  it('Login Failed (wrong email)', () => {
    const email = 'Hanates@gmail.com'
    const password = '123456'
    cy.get('.ico-login').click()
    cy.get('#Email').type(`${email}`)
    cy.get('#Password').type(`${password}`)
    cy.get('form > .buttons > .button-1').click()
    cy.contains('No customer account found').should('exist')
  })

  it('Login Failed (wrong password)', () => {
    const email = 'HanaTest@gmail.com'
    const password = '1234567'
    cy.get('.ico-login').click()
    cy.get('#Email').type(`${email}`)
    cy.get('#Password').type(`${password}`)
    cy.get('form > .buttons > .button-1').click()
    cy.contains('The credentials provided are incorrect').should('exist')
  })
})