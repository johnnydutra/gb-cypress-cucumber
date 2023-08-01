/// <reference types="Cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

let alertStub;

When('I input an username {string}', (username) => {
  cy.get('#text').click().type(username);
});

When('I input a password {string}', (password) => {
  cy.get('#password').click().type(password);
});

When('I click the "Login" button', () => {
  alertStub = cy.stub();
  cy.on('window:alert', alertStub);
  cy.get('#login-button').click();
});

Then(
  'I should be presented with an feedback alert with the message {string}',
  (message) => {
    expect(alertStub).to.have.been.calledWith(message);
  }
);
