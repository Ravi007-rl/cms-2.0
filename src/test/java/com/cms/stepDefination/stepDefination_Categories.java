package com.cms.stepDefination;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import com.cms.pageObject.admin_category;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class stepDefination_Categories{
	
	public WebDriver driver=StepDefination_Login_Admin.driver;
	public admin_category Category;
	
	@And("^Admin goto manage Categories$")
    public void admin_goto_manage_categories() throws Throwable {
		Category=new admin_category(driver);
		driver.get(admin_category.Categories_url);
    }
	
	@Given("^Admin is on Categories$")
    public void admin_is_on_categories() throws Throwable {
		Category=new admin_category(driver);
		driver.get(admin_category.Categories_url);
    }

    @Then("^Validation fire \"([^\"]*)\" at Categories page$")
    public void validation_fire_something_at_categories_page(String strArg1) throws Throwable {
    	String expected=strArg1;
    	String actual=Category.validation().getText();
    	Assert.assertEquals(expected, actual);
    }

    @And("^Admin enter no data and click on publish button at Categories page$")
    public void admin_enter_no_data_and_click_on_publish_button_at_categories_page() throws Throwable {
    	Category.Submit().click();
    }
    
    @And("^Admin enter \"([^\"]*)\" and click on publish button at Categories page$")
    public void admin_enter_something_and_click_on_publish_button_at_categories_page(String strArg1) throws Throwable {
    	Category.Title().sendKeys(strArg1);
    	Category.Submit().click();
    }
    
    @Then("^Validation success fire \"([^\"]*)\" at Categories page$")
    public void validation_success_fire_something_at_categories_page(String strArg1) throws Throwable {
    	String expected=strArg1;
    	String actual=Category.success_verification().getText();
    	Assert.assertEquals(expected, actual);
    }
    
    @Given("Admin click on delete button at Categories page")
    public void admin_click_on_delete_button_at_Categories_page() {
        Category.delete_icon().click();
    }

}
