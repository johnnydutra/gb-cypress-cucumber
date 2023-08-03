/// <reference types="Cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import LoginPO from '../page_objects/login';

let alertStub;

const login = new LoginPO();

Given('I navigate to the WebDriverUniversity login page', () => {});

When('I input an username {string}', (username) => {
  login.typeUsername(username);
});

When('I input a password {string}', (password) => {
  login.typePassword(password);
});

When('I click the "Login" button', () => {
  alertStub = cy.stub();
  cy.on('window:alert', alertStub);
  login.clickLoginButton();
});

Then(
  'I should be presented with an feedback alert with the message {string}',
  (message) => {
    expect(alertStub).to.have.been.calledWith(message);
  }
);
