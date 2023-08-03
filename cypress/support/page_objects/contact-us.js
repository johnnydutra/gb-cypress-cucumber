/// <reference types="Cypress" />

import BasePO from './base';

class ContactUsPO extends BasePO {
  elements = {
    firstNameInput: () => cy.get('[name="first_name"]'),
    lastNameInput: () => cy.get('[name="last_name"]'),
    emailAddressInput: () => cy.get('[name="email"]'),
    commentInput: () => cy.get('[name="message"]'),
    submitButton: () => cy.get('[type="submit"]'),
    headerText: () => cy.xpath('//h1 | //body'),
  };

  navigateToContactUsPage() {
    super.navigate('/Contact-Us/contactus.html');
  }

  typeFirstName(firstName) {
    this.elements.firstNameInput().type(firstName);
  }

  typeLastName(lastName) {
    this.elements.lastNameInput().type(lastName);
  }

  typeEmailAddress(emailAddress) {
    this.elements.emailAddressInput().type(emailAddress);
  }

  typeComment(comment) {
    this.elements.commentInput().type(comment);
  }

  clickSubmitButton() {
    this.elements.submitButton().click();
  }

  validateHeaderText(expectedText) {
    this.elements.headerText().contains(expectedText);
    this.elements.headerText().invoke('text').should('include', expectedText);
  }
}

export default ContactUsPO;
