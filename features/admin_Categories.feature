Feature: Categories feature
  I want to use this template for my Categories testing

Background: Admin must be login to run the test on dashboard
    Given Admin is on Login Page
    And Admin enters "ravi" and "12345678"
    Then Admin redirected to dashboard page
    And Admin goto manage Categories
    
  	@Categories
  	Scenario: when no data enter and click on publish
  	#Given Admin goto manage Categories
    Given Admin enter no data and click on publish button at Categories page
    Then Validation fire "All fields must be filled out" at Categories page
    
    
    @Categories
  	Scenario: when enter already available Categories
    Given Admin enter "Movies" and click on publish button at Categories page
    Then Validation fire "Category already exists. Try Another One!" at Categories page
    
    
    @Categories
  	Scenario: when enter valid data
    Given Admin enter "test Categories" and click on publish button at Categories page
    Then Validation success fire "Category added Successfully" at Categories page
    
    @Categories
  	Scenario: when we delete that Category 
    Given Admin click on delete button at Categories page
    Then Validation success fire "Category Deleted Successfully !" at Categories page
    
    