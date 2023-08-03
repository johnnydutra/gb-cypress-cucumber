/// <reference types="Cypress" />

import BasePO from './base';

class HomepagePO extends BasePO {
  navigateToHomepage() {
    super.navigate('');
  }

  clickContactUsButton() {
    cy.removeTargetAndClick('#contact-us');
  }

  clickLoginPortalButton() {
    cy.removeTargetAndClick('#login-portal');
  }
}
export default HomepagePO;
