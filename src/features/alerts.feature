@alerts
Feature: JavaScript Dialogs

  Background:
    Given the user is on JavaScript Dialog page

  Scenario: Accept alert
    When the user accepts JS Alert
    Then success message should be displayed

  Scenario: Dismiss confirmation
    When the user dismisses JS Confirm
    Then cancel message should be displayed

  Scenario: Enter text in prompt
    When the user enters "Automation Testing"
    Then entered text should be displayed