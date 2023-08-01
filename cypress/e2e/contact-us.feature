@regression @login
Feature: WebDriverUniversity - Contact Us Page

  Background: Preconditions
    Given I navigate to the WebDriverUniversity homepage
    When I click on the "Contact Us" button

  @smoke
  Scenario: Valid "Contact Us" form submission
    And I type a first name
    And I type a last name
    And I enter an e-mail address
    And I enter a comment
    And I click on the "Submit" button
    Then I should be presented with a successful form submission message

  Scenario: Invalid "Contact Us" form submission
    And I type a first name
    And I type a last name
    And I enter a comment
    And I click on the "Submit" button
    Then I should be presented with an error message

  Scenario: Valid "Contact Us" form submission using specific data
    And I type a specific first name "Sarah"
    And I type a specific last name "Woods"
    And I type a specific e-mail address "sarah.woods@mail.com"
    And I type a specific word "hello123" and number 6788 within the comment input field
    And I click on the "Submit" button
    Then I should be presented with a successful form submission message

  Scenario Outline: Validate "Contact Us" page
    And I provide a first name '<firstName>' and a last name '<lastName>'
    And I provide an e-mail address '<emailAddress>' and a comment '<comment>'
    And I click on the "Submit" button
    Then I should be presented with header text '<message>'

    Examples:
      | firstName | lastName | emailAddress        | comment                 | message                      |
      | John      | Jones    | john.jones@mail.com | Hello, how are you?     | Thank You for your Message   |
      | Mia       | Carter   | mia.carter@mail.com | Test123 Test321         | Thank You for your Message   |
      | Grace     | Hudson   | grace.hudson        | Do you create websites? | Error: Invalid email address |