Feature: Admin Manage admin file validation

  Background: Admin must be login to run the test on dashboard
    Given Admin is on Login Page
    And Admin enters "ravi" and "12345678"
    Then Admin redirected to dashboard page
    And Admin goto manage admin page
    
    
    @Manage_admin
    Scenario: When Admin not enter any details and click on submit
    Given Admin click on publish at manage admin page
    Then validation fire "All fields must be filled out"

  	@Manage_admin
  	Scenario: When Admin enter only username and click on submit
    Given Admin Enter username "testAdmin"
    Given Admin click on publish at manage admin page
    Then validation fire "All fields must be filled out"

    @Manage_admin
    Scenario: When Admin enter username and name and click on submit
    Given Admin Enter username "testAdmin" and name "testAdmin"
    Given Admin click on publish at manage admin page
    Then validation fire "All fields must be filled out"

  	@Manage_admin
  	Scenario: When Admin enter username , name , password and click on submit
    Given Admin Enter username "testAdmin" , name "testAdmin" and password "12345678"
    Given Admin click on publish at manage admin page
    Then validation fire "All fields must be filled out"

  	@Manage_admin
  	Scenario: verify when admin enter diffrent password and confirm password
    Given Admin Enter username "testAdmin" , name "testAdmin" , password "12345678" and confirm password "12345"
    Given Admin click on publish at manage admin page
    Then validation fire "Password and Confirm Password should match"

   	@Manage_admin
  	Scenario: verify when admin enter already registered username and not enter password
    Given Admin Enter username "shubham" , name "shubham" , password "12345678" and confirm password "12345678"
    Given Admin click on publish at manage admin page
    Then verification fire "Username Exists. Try Another One!"

  	@Manage_admin
  	Scenario: verify when admin enter valid details
    Given Admin Enter username "testAdmin" , name "testAdmin" , password "12345678" and confirm password "12345678"
    Given Admin click on publish at manage admin page
    Then success_verification fire "New Admin with the name of testAdmin added Successfully"
    
    @Manage_admin
  	Scenario: admin login with that details
    Given Admin click on logout button
    Given Admin is on Login Page
    And Admin enters "testAdmin" and "12345678"
    Then Admin redirected to dashboard page
    
     @Manage_admin1
  	Scenario: admin delete that account
    Given Admin click on delete button
    Then success_verification fire "Admin Deleted Successfully !"
    
