/// <reference types="cypress" />
describe("Autentification nominale", function () {
  it("connexion Ok", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]')
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get('[data-test="password"]')
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="inventory-item-name"]').should("be.visible");
  });
});

describe("Autentification non passant", function () {
  it("connexion KO", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });
});

it("ajouter un produit au panier ", function () {});
