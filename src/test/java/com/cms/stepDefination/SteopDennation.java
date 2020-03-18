package com.cms.stepDefination;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cms.pageObject.admin_dashboard;
import com.cms.pageObject.admin_login;
import com.cms.pageObject.admin_post;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class SteopDennation {

	public static WebDriver driver;
	public admin_login Admin_Loging;
	public admin_dashboard Admin_Dashboard;
	public admin_post Admin_Post;
	
	@Before
	public void before() {
		System.setProperty("webdriver.chrome.driver", "C:\\QA\\RR\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Given("Admin is on Login Page")
	public void admin_is_on_Login_Page() {
		Admin_Loging = new admin_login(driver);
		driver.get(admin_login.login_url);
	}

	@Given("Admin enters {string} and {string}")
	public void admin_enters_and(String string1, String string2) {
		Admin_Loging.admin_username().sendKeys(string1);
		Admin_Loging.admin_password().sendKeys(string2);
		Admin_Loging.admin_login_button().click();
	}

	@Then("Admin redirected to dashboard page")
	public void admin_redirected_to_dashboard_page() {
		Admin_Dashboard = new admin_dashboard(driver);
		String expected = admin_dashboard.dashboard_url;
		String actual = driver.getCurrentUrl();
		Assert.assertEquals(expected, actual);
	}

	@Then("^Admin redirected to login page$")
	public void admin_redirected_to_login_page() throws Throwable {
		String expected = admin_login.login_url;
		String actual = driver.getCurrentUrl();
		Assert.assertEquals(expected, actual);
	}

	@Given("admin enter url {string}")
	public void admin_enter_url(String string) {
		driver.get(string);
	}

	@Then("Admin click on logout")
	public void admin_click_on_logout() {
		Admin_Dashboard.logout().click();
	}

	@Then("Admin press back button")
	public void admin_press_back_button() {
		driver.navigate().back();
	}

	@And("^Admins enters (.+) and (.+)$")
	public void admins_enters_and(String username, String password) throws Throwable {
		Admin_Loging.admin_username().sendKeys(username);
		Admin_Loging.admin_password().sendKeys(password);
		Admin_Loging.admin_login_button().click();
	}

	@Then("^check welcome message has same (.+)$")
	public void check_welcome_message_has_same(String output) throws Throwable {
		String actual = Admin_Dashboard.admin_name_verification().getText();
		System.out.println(actual);
		String expected = output;
		Assert.assertEquals(expected, actual);
	}
	
	@Given("^Admin read total post$")
    public void admin_read_total_post() throws Throwable {
        String total_post_dashboard=Admin_Dashboard.Total_post().getText();
        System.out.println(total_post_dashboard);
    }
	
    @And("^Admin go to post page$")
    public void admin_go_to_post_page() throws Throwable {
        
    	Admin_Dashboard.Posts().click();
    }
    
    @Then("^Admin cross verify the post$")
    public void admin_cross_verify_the_post() throws Throwable {
    	Admin_Post = new admin_post(driver);
        ArrayList<WebElement> total_post=(ArrayList<WebElement>) driver.findElements(By.tagName("tr"));
        System.out.println(total_post);
    }

	@After
	public void after(Scenario scenario) throws IOException {

		if (scenario.isFailed()) {
			TakesScreenshot ss = (TakesScreenshot) driver;
			File source = ss.getScreenshotAs(OutputType.FILE);
			File DestFile = new File("D:\\image\\" + scenario.getName() + ".jpg");
			FileUtils.copyFile(source, DestFile);

			final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png", scenario.getName());
		}
		driver.quit();
	}
}
