/// <reference types="Cypress" />

import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import HomepagePO from '../page_objects/homepage';

const homepage = new HomepagePO();

Given(`I navigate to the WebDriverUniversity homepage`, () => {
  homepage.navigateToHomepage();
});

When(`I click on the "Contact Us" button`, () => {
  homepage.clickContactUsButton();
});

When(`I click on the "Login Portal" button`, () => {
  homepage.clickLoginPortalButton();
});
