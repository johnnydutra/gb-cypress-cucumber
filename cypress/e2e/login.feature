Feature: WebDriverUniversity - Login Page

  Background: The user reaches the login page
    Given I navigate to the WebDriverUniversity homepage
    And I click on the "Login Portal" button

  Scenario Outline: Login attempt with different credentials
    When I input an username '<username>'
    And I input a password '<password>'
    And I click the "Login" button
    Then I should be presented with an feedback alert with the message '<message>'

    Examples:
      | username  | password     | message              |
      | webdriver | webdriver123 | Validation succeeded |
      | webdriver | webdriver1   | Validation failed    |