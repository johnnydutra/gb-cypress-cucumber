/// <reference types="Cypress" />

import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

const url = 'http://www.webdriveruniversity.com/';

Given(`I navigate to the WebDriverUniversity homepage`, () => {
  cy.visit(url);
});

When(`I click on the "Contact Us" button`, () => {
  cy.removeTargetAndClick('#contact-us');
});

When(`I click on the "Login Portal" button`, () => {
  cy.removeTargetAndClick('#login-portal');
});
