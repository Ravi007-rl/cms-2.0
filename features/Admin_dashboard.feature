Feature: Dashboaed feature
  I want to use this template for my deashboard testing

  Background: Admin must be login to run the test on dashboard
    Given Admin is on Login Page
    And Admin enters "ravi" and "12345678"
    Then Admin redirected to dashboard page

  @total_post
  Scenario: verify total post on dashnoard
    Given Admin click on publish at manage admin page
    Then validation fire "All fields must be filled out"

#Scenario: verify total Categories on dashnoard
   # Given Admin read total Categories
    #And Admin go to Categories page
   # Then Admin cross verify the Categories
    
    
    