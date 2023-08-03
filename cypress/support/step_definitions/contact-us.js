/// <reference types="Cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import ContactUsPO from '../page_objects/contact-us';

const contactUs = new ContactUsPO();

When('I type a first name', () => {
  contactUs.typeFirstName('Joe');
});

When('I type a last name', () => {
  contactUs.typeLastName('Blogs');
});

When('I enter an e-mail address', () => {
  contactUs.typeEmailAddress('joeblogs123@mail.com');
});

When('I enter a comment', () => {
  contactUs.typeComment('Hello world!');
});

When('I click on the "Submit" button', () => {
  contactUs.clickSubmitButton();
});

Then('I should be presented with a successful form submission message', () => {
  contactUs.validateHeaderText('Thank You for your Message!');
});

Then('I should be presented with an error message', () => {
  contactUs.validateHeaderText('Error: Invalid email address');
});

When('I type a specific first name {string}', (firstName) => {
  contactUs.typeFirstName(firstName);
});

When('I type a specific last name {string}', (lastName) => {
  contactUs.typeLastName(lastName);
});

When('I type a specific e-mail address {string}', (emailAddress) => {
  contactUs.typeEmailAddress(emailAddress);
});

When(
  'I type a specific word {string} and number {int} within the comment input field',
  (word, number) => {
    contactUs.typeComment(word + number);
  }
);

When(
  'I provide a first name {string} and a last name {string}',
  (firstName, lastName) => {
    contactUs.typeFirstName(firstName);
    contactUs.typeLastName(lastName);
  }
);

When(
  'I provide an e-mail address {string} and a comment {string}',
  (emailAddress, comment) => {
    contactUs.typeEmailAddress(emailAddress);
    contactUs.typeComment(comment);
  }
);

Then('I should be presented with header text {string}', (message) => {
  contactUs.validateHeaderText(message);
});
