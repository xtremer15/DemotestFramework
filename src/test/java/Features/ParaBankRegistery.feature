Feature: This feature will handle the completion of registry form
  As an user
  I want to fill the registry form
  So that i can have an active account


  Background:User is on the main Page
    Given Main page has loaded
    And User will click on Register
    And User sees the registering form and "Signing up is easy!" is displayed as well

  @TestDeLaTataLor
  Scenario:User will insert the values in the boxes
    Given User will add the values
      | First Name | Last Name | Address | City   | State | Zip Code | Phone | SSN    | User Name | Password | Confirm |
      | ksdfh      | dfkjgh    | slkdfj  | fhdfhd | hjjh  | ryu      | rutru | hgjghj | jkiu      | fdgh     | sdfshj  |
    Then The response should be displayed as invalid

  @TestDeLaMamaLor
  Scenario:The user will not add any value
    Given User does not add anything
    And clicks on submit
    Then Error should be displayed for the required fields

  @TestDeLaBunicaLor
  Scenario: User is going to check a null value
    Given We have null value
    And User will input the value
      | First Name | Last Name | Address | City | State | Zip Code | Phone | SSN | User Name | Password | Confirm |
      | null       | null      | null    | null | null  | null     | null  |     | null      | null     | null    |
    Then Account should not be created


