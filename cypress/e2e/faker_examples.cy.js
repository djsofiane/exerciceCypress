/// <reference types="cypress" />

import { faker } from "@faker-js/faker/locale/tr";
it("Examples of faker", () => {
  let album = faker.music.album();
  let artiste = faker.music.artist();

  let address = faker.location.streetAddress();
  let companyName = faker.company.name();

  let color = faker.color.human();

  cy.log(" Album random : " + album);
  cy.log(" artiste random : " + artiste);
  cy.log(" addresse random : " + address);
  cy.log(" companyName random : " + companyName);
  cy.log(" color random : " + color);
});
