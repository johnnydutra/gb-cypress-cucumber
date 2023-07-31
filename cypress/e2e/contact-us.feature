Feature: WebDriverUniversity - Contact Us Page

  Scenario: Valid "Contact Us" form submission
    Given I navigate to the WebDriverUniversity homepage
    When I click on the "Contact Us" button
    And I type a first name
    And I type a last name
    And I enter an e-mail address
    And I enter a comment
    And I click on the "Submit" button
    Then I should be presented with a successful form submission message

  Scenario: Invalid "Contact Us" form submission
    Given I navigate to the WebDriverUniversity homepage
    When I click on the "Contact Us" button
    And I type a first name
    And I type a last name
    And I enter a comment
    And I click on the "Submit" button
    Then I should be presented with an error message

  Scenario: Valid "Contact Us" form submission using specific data
    Given I navigate to the WebDriverUniversity homepage
    When I click on the "Contact Us" button
    And I type a specific first name "Sarah"
    And I type a specific last name "Woods"
    And I type a specific e-mail address "sarah.woods@mail.com"
    And I type a specific word "hello123" and number 6788 within the comment input field
    And I click on the "Submit" button
    Then I should be presented with a successful form submission message