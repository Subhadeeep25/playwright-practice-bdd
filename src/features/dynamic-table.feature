@table
Feature: Dynamic Table Validation

  Background:
    Given the user is on Dynamic Table page

  Scenario: Verify Chrome CPU value
    Then CPU value for Chrome should match CPU usage text

  Scenario: Verify Firefox exists
    Then browser "Firefox" should exist in the table

  Scenario: Verify Safari exists
    Then browser "Safari" should exist in the table