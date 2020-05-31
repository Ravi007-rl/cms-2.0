package com.cms.stepDefination;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import com.cms.pageObject.admin_common;
import com.cms.pageObject.admin_manage_admins;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class StepDefination_Manage_Admin {
	
	public WebDriver driver =StepDefination_Login_Admin.driver;
	public admin_manage_admins Manage_Admins;
	public admin_common common;
	
	@And("^Admin goto manage admin page$")
    public void admin_goto_manage_admin_page() throws Throwable {
        Manage_Admins = new admin_manage_admins(driver);
        driver.get(admin_manage_admins.manage_admins);
    }
	
	@Given("^Admin click on publish at manage admin page$")
    public void admin_click_on_publish_at_manage_admin_page() throws Throwable {
        Manage_Admins.Submit().click();
    }

    @Then("^validation fire \"([^\"]*)\"$")
    public void validation_fire_something(String strArg1) throws Throwable {
        String actual=Manage_Admins.validation().getText();
        String expected=strArg1;
        Assert.assertEquals(expected, actual);
    }
    
    @Given("^Admin Enter username \"([^\"]*)\"$")
    public void admin_enter_username_something(String strArg1) throws Throwable {
        Manage_Admins.Username().sendKeys(strArg1);
    }
    
    @Given("^Admin Enter username \"([^\"]*)\" and name \"([^\"]*)\"$")
    public void admin_enter_username_something_and_name_something(String strArg1, String strArg2) throws Throwable {
    	Manage_Admins.Username().sendKeys(strArg1);
    	Manage_Admins.Name().sendKeys(strArg2);
    }
    
    @Given("^Admin Enter username \"([^\"]*)\" , name \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void admin_enter_username_something_name_something_and_password_something(String strArg1, String strArg2, String strArg3) throws Throwable {
    	Manage_Admins.Username().sendKeys(strArg1);
    	Manage_Admins.Name().sendKeys(strArg2);
    	Manage_Admins.Password().sendKeys(strArg3);;
    }
    
    @Given("^Admin Enter username \"([^\"]*)\" , name \"([^\"]*)\" , password \"([^\"]*)\" and confirm password \"([^\"]*)\"$")
    public void admin_enter_username_something_name_something_password_something_and_confirm_password_something(String strArg1, String strArg2, String strArg3, String strArg4) throws Throwable {
    	Manage_Admins.Username().sendKeys(strArg1);
    	Manage_Admins.Name().sendKeys(strArg2);
    	Manage_Admins.Password().sendKeys(strArg3);
    	Manage_Admins.ConfirmPassword().sendKeys(strArg4);
    }
    
    @Then("^success_verification fire \"([^\"]*)\"$")
    public void successverification_fire_something(String strArg1) throws Throwable {
    	String actual=Manage_Admins.success_verification().getText();
        String expected=strArg1;
        Assert.assertEquals(expected, actual);
    }
    
    @Then("^verification fire \"([^\"]*)\"$")
    public void verification_fire_something(String strArg1) throws Throwable {
    	String actual=Manage_Admins.validation().getText();
        String expected=strArg1;
        Assert.assertEquals(expected, actual);
    }
    
    @Given("Admin click on logout button")
    public void admin_click_on_logout_button() {
    	common = new admin_common(driver);
        common.logout().click();
    }
    
    @Given("Admin click on delete button")
    public void admin_click_on_delete_button() {
        Manage_Admins.delete_icon().click();
    }

}
