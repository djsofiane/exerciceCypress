/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("Achats de produits ", function () {
  it("achat complet de produit Cartons", function () {
    // Authentification
    cy.visit("/");

    cy.login("standard_user", "secret_sauce");
    // Achat de produits
    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="inventory-item-name"]').should("be.visible");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Validation du panier
    cy.get('[data-test="shopping-cart-badge"]')
      .should("have.text", "1")
      .click();
    cy.get('[data-test="checkout"]').click();

    // Informations d'utilisateurs
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let zipCode = faker.location.zipCode();
    cy.userForm(firstName, lastName, zipCode);
    // Confirmation de commande
    cy.url().should("include", "/checkout-step-two.html");
    cy.get('[data-test="finish"]').click();
    cy.contains("Thank you for your order!");
    cy.get('[data-test="back-to-products"]').click();
  });

  it("achats de produits masque", () => {});

  it("achat à partir du burger menu", () => {});
});
