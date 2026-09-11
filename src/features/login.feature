@smoke @login
Feature: User Login

  As a registered user
  I want to log into the application
  So that I can access secure pages

  Background:
    Given the user is on the Login page

  Scenario: Successful login with valid credentials
    When the user logs in with username "practice" and password "SuperSecretPassword!"
    Then the Secure Area page should be displayed

  Scenario: Login with invalid password
    When the user logs in with username "practice" and password "WrongPassword"
    Then an invalid password message should be displayed

  Scenario Outline: Login validation
    When the user logs in with username "<username>" and password "<password>"
    Then "<message>" should be displayed

    Examples:
      | username | password             | message                  |
      | practice | WrongPassword        | Your password is invalid!|
      | wrong    | SuperSecretPassword! | Your username is invalid!|
      |          |                      | Username is required     |