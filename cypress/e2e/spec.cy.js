/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-focused-tests */
/* global cy */

//LOGIN

describe('Login', () => {
  it('visit login for first time and throws error if no data', () => {
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda/login')
    cy.get('[data-cy="login"]').click()
  })
  it('throws error wrong email or password', () => {
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda/login')
    cy.get('[data-cy="email"]').type('email@email.com')
    cy.get('[data-cy="password"]').type('12345')
    cy.get('[data-cy="login"]').click()
  })

  it('user login', () => {
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda/login')
    cy.get('[data-cy="email"]').type('admin@admin.com')
    cy.get('[data-cy="password"]').type('12345')
    cy.get('[data-cy="login"]').click()
    cy.url().should('contain', '/')
  })

  it('user logout', () => {
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda/login')
    cy.get('[data-cy="email"]').type('admin@admin.com')
    cy.get('[data-cy="password"]').type('12345')
    cy.get('[data-cy="login"]').click()
    cy.url().should('contain', '/')
    cy.get('[data-cy="logout"]').click()
    cy.window().its('localStorage').invoke('removeItem', 'session')
    cy.url().should('include', 'http://localhost:3000/Dashboard-Hotel-Miranda/login')
  })
})

//Routes

describe('Routes', () => {
  it('Rooms Page', () => {
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda/login')
    cy.get('[data-cy="email"]').type('admin@admin.com')
    cy.get('[data-cy="password"]').type('12345')
    cy.get('[data-cy="login"]').click()
    cy.url().should('contain', '/')
    cy.get('[data-cy="rooms"]').click()
  })

  it('Bookings Page', () => {
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda/login')
    cy.get('[data-cy="email"]').type('admin@admin.com')
    cy.get('[data-cy="password"]').type('12345')
    cy.get('[data-cy="login"]').click()
    cy.url().should('contain', '/')
    cy.get('[data-cy="bookings"]').click()
  })
  it('Contacts Page', () => {
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda/login')
    cy.get('[data-cy="email"]').type('admin@admin.com')
    cy.get('[data-cy="password"]').type('12345')
    cy.get('[data-cy="login"]').click()
    cy.url().should('contain', '/')
    cy.get('[data-cy="contacts"]').click()

  })
  it('Users Page', () => {
    cy.visit('http://localhost:3000/Dashboard-Hotel-Miranda/login')
    cy.get('[data-cy="email"]').type('admin@admin.com')
    cy.get('[data-cy="password"]').type('12345')
    cy.get('[data-cy="login"]').click()
    cy.url().should('contain', '/')
    cy.get('[data-cy="users"]').click()

  })
})