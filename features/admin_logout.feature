Feature: Admin Logout Action
  I want to use this template for my logout page testing

  @logout
  Scenario: verify logout fuctionality
    Given Admin is on Login Page
    And Admin enters "Ravi" and "12345678"
    Then Admin redirected to dashboard page
    And Admin click on logout
    Then Admin redirected to login page
