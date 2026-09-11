@controls
Feature: Form Controls

  Scenario: Select Option 2
    Given the user is on Dropdown page
    When the user selects Option "2"
    Then Option "2" should be selected

  Scenario: Select first checkbox
    Given the user is on Checkboxes page
    When the user checks Checkbox 2
    Then Checkbox 2 should be selected

  Scenario: Unselect second checkbox
    Given Checkbox 2 is already selected
    When the user unchecks Checkbox 2
    Then Checkbox 2 should not be selected