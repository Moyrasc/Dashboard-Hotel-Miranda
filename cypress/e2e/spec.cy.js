/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-focused-tests */
/* global cy */

//LOGIN
describe('Login', () => {
  it('visit login for first time and throws error if no data', () => {
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda')
    cy.get('[data-cy="login"]').click()
  })
  it('throws error wrong email or password', () => {
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda')
    cy.get('[data-cy="email"]').type('email@email.com')
    cy.get('[data-cy="password"]').type('12345')
    cy.get('[data-cy="login"]').click()
  })
  it('user login', () => {
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda')
    cy.get('[data-cy="email"]').type('admin@admin.com')
    cy.get('[data-cy="password"]').type('12345')
    // cy.get('[data-cy="login"]').click().should(() => {
    //   expect(JSON.parse(localStorage.getItem('userMiranda'))).to.deep.equal({ username: '', email: 'admin@admin.com', logged: true });
    // })
    cy.get('[data-cy="login"]').click()
    cy.url().should('contain', '/')
  })
  it('user logout', () => {
    // cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda/dashboard')
    // cy.get('[data-cy="logout"]').click().should(() => {
    //   expect(JSON.parse(localStorage.getItem('userMiranda'))).to.deep.equal({ username: '', email: '', logged: false });
    // })
    cy.window().its('localStorage').invoke('removeItem', 'session')
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda/login')
  })
})

