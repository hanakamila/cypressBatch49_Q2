describe('Registration', () => {

  function randomEmail(){
    const randomString = Math.random().toString(36).substring(10)
    const email = randomString + "@gmail.com"
    return email
  }
  let emailAddress = randomEmail()

  beforeEach(() => { 
    cy.visit('https://demowebshop.tricentis.com')
  })

  it('Registing New User Success', () => {
    const firstName = 'John'
    const lastName =  'Doe'
    const email = emailAddress
    const password = 'thisIsPassword'
    cy.get('.ico-register').click()
    cy.get('#gender-male').check()
    cy.get('#FirstName').type(`${firstName}`)
    cy.get('#LastName').type(`${lastName}`)
    cy.get('#Email').type(`${email}`)
    cy.get('#Password').type(`${password}`)
    cy.get('#ConfirmPassword').type(`${password}`)
    cy.get('#register-button').click()
    cy.contains('registration completed').should('exist')
  })

  it('Registing New User Failed (Empty Fields)', () => {
    cy.get('.ico-register').click()
    cy.get('#register-button').click()
    cy.contains('is required').should('exist')
  })

  it('Registing New User Failed (Wrong Email Format)', () => {
    const firstName = 'John'
    const lastName =  'Doe'
    const email = 'emailAddress'
    const password = 'thisIsPassword'
    cy.get('.ico-register').click()
    cy.get('#gender-male').check()
    cy.get('#FirstName').type(`${firstName}`)
    cy.get('#LastName').type(`${lastName}`)
    cy.get('#Email').type(`${email}`)
    cy.get('#Password').type(`${password}`)
    cy.get('#ConfirmPassword').type(`${password}`)
    cy.get('#register-button').click()
    cy.contains('Wrong email').should('exist')
  })

  it('Registing New User Failed (Existing Email)', () => {
    const firstName = 'John'
    const lastName =  'Doe'
    const email = emailAddress
    const password = 'thisIsPassword'
    cy.get('.ico-register').click()
    cy.get('#gender-male').check()
    cy.get('#FirstName').type(`${firstName}`)
    cy.get('#LastName').type(`${lastName}`)
    cy.get('#Email').type(`${email}`)
    cy.get('#Password').type(`${password}`)
    cy.get('#ConfirmPassword').type(`${password}`)
    cy.get('#register-button').click()
    cy.contains('already exist').should('exist')
  })

  it('Registing New User Failed (Password Mismatched)', () => {
    const firstName = 'John'
    const lastName =  'Doe'
    const email = emailAddress
    const password = 'thisIsPassword'
    cy.get('.ico-register').click()
    cy.get('#gender-male').check()
    cy.get('#FirstName').type(`${firstName}`)
    cy.get('#LastName').type(`${lastName}`)
    cy.get('#Email').type(`${email}`)
    cy.get('#Password').type(`${password}`)
    cy.get('#ConfirmPassword').type(`a`)
    cy.get('#register-button').click()
    cy.contains('password do not match').should('exist')
  })

})