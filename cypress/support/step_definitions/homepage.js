/// <reference types="Cypress" />

import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import BasePO from '../page-objects/base';

const url = 'http://www.webdriveruniversity.com/';

const basePO = new BasePO();

Given(`I navigate to the WebDriverUniversity homepage`, () => {
  // cy.visit(url);
  basePO.navigate('');
});

When(`I click on the "Contact Us" button`, () => {
  cy.removeTargetAndClick('#contact-us');
});

When(`I click on the "Login Portal" button`, () => {
  cy.removeTargetAndClick('#login-portal');
});
