/// <reference types="Cypress" />
import {
  Given,
  When,
  Then,
  Before,
  After,
} from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
  cy.log('Executes before each scenario/test');
  cy.clearLocalStorage();
});

Before({ tags: '@smoke' }, () => {
  cy.log('Executes smoke tests');
});

After(() => {
  cy.log('Executes after each scenario/test');
});

When('I wait for {int} seconds', (seconds) => {
  cy.wait(seconds * 1000);
});
