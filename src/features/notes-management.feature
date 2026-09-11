@crud @notes
Feature: Notes Management

  Background:
    Given the user is logged into Notes App

  Scenario: Create a new note
    When the user creates a note titled "Playwright Practice"
    And enters description "BDD Automation Testing"
    Then the note should appear in Notes list

  Scenario: Edit note title
    Given note "Playwright Practice" exists
    When the user changes title to "Playwright BDD"
    Then updated note should appear

  Scenario: Delete a note
    Given note "Playwright BDD" exists
    When the user deletes the note
    Then the note should disappear

  Scenario: Search notes
    Given multiple notes exist
    When the user searches "BDD"
    Then only matching notes should appear