/// <reference types="Cypress" />

describe('Test UI', () => {
    beforeEach(() => {
        cy.visit('https://petstore.swagger.io/');
    });     
    it('url should match', () => {
        cy.url().should('eq', 'https://petstore.swagger.io/')
    });
    it('title should match', () => {
        cy.get('.title').should('contain', 'Swagger Petstore')
    });
    it('version should match', () => {
        cy.get('.version').should('contain', '1.0.6');
    });
})