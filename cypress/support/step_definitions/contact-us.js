/// <reference types="Cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

When('I type a first name', () => {
  cy.get('[name="first_name"]').type('Joe');
});

When('I type a last name', () => {
  cy.get('[name="last_name"]').type('Blogs');
});

When('I enter an e-mail address', () => {
  cy.get('[name="email"]').type('joeblogs123@mail.com');
});

When('I enter a comment', () => {
  cy.get('[name="message"]').type('Hello world!');
});

When('I click on the "Submit" button', () => {
  cy.get('[type="submit"]').click();
});

Then('I should be presented with a successful form submission message', () => {
  cy.get('h1').should('have.text', 'Thank You for your Message!');
});

Then('I should be presented with an error message', () => {
  cy.get('body').should('contain', 'Error: Invalid email address');
});

When('I type a specific first name {string}', (firstName) => {
  cy.get('[name="first_name"]').type(firstName);
});

When('I type a specific last name {string}', (lastName) => {
  cy.get('[name="last_name"]').type(lastName);
});

When('I type a specific e-mail address {string}', (emailAddress) => {
  cy.get('[name="email"]').type(emailAddress);
});

When(
  'I type a specific word {string} and number {int} within the comment input field',
  (word, number) => {
    cy.get('[name="message"]').type(word + number);
  }
);

When(
  'I provide a first name {string} and a last name {string}',
  (firstName, lastName) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
  }
);

When(
  'I provide an e-mail address {string} and a comment {string}',
  (emailAddress, comment) => {
    cy.get('[name="email"]').type(emailAddress);
    cy.get('[name="message"]').type(comment);
  }
);

Then('I should be presented with header text {string}', (message) => {
  cy.xpath('//h1 | //body').contains(message);
});
