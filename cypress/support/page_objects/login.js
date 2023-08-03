/// <reference types="Cypress" />

import BasePO from './base';

class LoginPO extends BasePO {
  navigateToLoginPage() {
    super.navigate('/Login_Page/index.html');
  }

  typeUsername(username) {
    cy.get('#text').click().type(username);
  }

  typePassword(password) {
    cy.get('#password').click().type(password);
  }

  clickLoginButton() {
    cy.get('#login-button').click();
  }
}

export default LoginPO;
