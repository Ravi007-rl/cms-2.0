Feature: Admin Login Action
  I want to use this template for my login page testing

  @login
  Scenario: Successful Login with Valid Credentials
    Given Admin is on Login Page
    And Admin enters "Ravi" and "12345678"
    Then Admin redirected to dashboard page

  @login
  Scenario: Unsuccessful Login with Invalid Credentials
    Given Admin is on Login Page
    And Admin enters "Ravi" and "12345"
    Then Admin redirected to login page

  @login
  Scenario: Unsuccessful Login with Invalid Credentials
    Given Admin is on Login Page
    And Admin enters "Ravi" and "12345678"
    Then Admin redirected to login page

  @login
  Scenario: verify trim is working in username
    Given Admin is on Login Page
    And Admin enters "                       ravi              " and "12345678"
    Then Admin redirected to dashboard page

  @login
  Scenario: verify not enter any detail and click on login
    Given Admin is on Login Page
    And Admin enters "" and ""
    Then Admin redirected to login page

  @login
  Scenario: verify admin enter username and not enter password
    Given Admin is on Login Page
    And Admin enters "ravi" and ""
    Then Admin redirected to login page

  @login
  Scenario: verify admin enter invalid username and enter password
    Given Admin is on Login Page
    And Admin enters "rav" and "123456789"
    Then Admin redirected to login page

  @login
  Scenario: verify admin enter directly url and try to login
    Given Admin is on Login Page
    And admin enter url "http://localhost/CMS/admin/Dashboard.php"
    Then Admin redirected to login page

  @login
  Scenario: verify admin login and click on logout and click on back button
    Given Admin is on Login Page
    And Admin enters "Ravi" and "12345678"
    Then Admin redirected to dashboard page
    And Admin click on logout
    And Admin press back button
    Then Admin redirected to login page

  @login
  Scenario Outline: Verify Admin welcome message with his name
    Given Admin is on Login Page
    And Admins enters <username> and <password>
    Then Admin redirected to dashboard page
    Then check welcome message has same <output>

    Examples: 
      | username | password | output                 |
      | Ravi     | 12345678 | Wellcome Ravi!         |
      | shubham  | 12345678 | Wellcome !             |
      | Ravi     | 12345678 | Wellcome Ravi!         |
