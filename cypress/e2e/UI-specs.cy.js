/// <reference types="Cypress" />

describe("Test UI", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("url should match", () => {
    cy.url().should("eq", "https://petstore.swagger.io/");
  });
  it("title should match", () => {
    cy.get(".title").should("contain", "Swagger Petstore");
  });
  it("version should match", () => {
    cy.get('.ch2-allow-all-btn').click();
    cy.get(".version").should("contain", "1.0.7");
  });
});