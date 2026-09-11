@search
Feature: Search Products

  Background:
    Given the user is logged in

  Scenario: Search for an existing product
    When the user searches for "Backpack"
    Then matching products should be displayed

  Scenario: Search for a non-existing product
    When the user searches for "Laptop"
    Then a "No results found" message should appear

  Scenario Outline: Search using different keywords
    When the user searches for "<keyword>"
    Then search results should contain "<keyword>"

    Examples:
      | keyword |
      | Backpack |
      | Bike |
      | Shirt |