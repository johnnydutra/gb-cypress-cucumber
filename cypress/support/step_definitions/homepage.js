/// <reference types="Cypress" />

import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import BasePO from '../page-objects/base';
import HomepagePO from '../page-objects/homepage';

const url = 'http://www.webdriveruniversity.com/';

const base = new BasePO();
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
