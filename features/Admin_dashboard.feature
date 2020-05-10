Feature: Dashboaed feature
  I want to use this template for my deashboard testing

  Background: Admin must be login to run the test on dashboard
    Given Admin is on Login Page
    And Admin enters "ravi" and "12345678"
    Then Admin redirected to dashboard page

  @total_post
  Scenario: verify total post on dashnoard
    Given Admin read total post
    And Admin go to post page
    Then Admin cross verify the post
    
    
    