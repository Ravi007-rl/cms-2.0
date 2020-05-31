package com.cms.pageObject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class admin_category {
	public WebDriver driver;
	public static final String Categories_url = "http://localhost/CMS/admin/Categories.php";
	
	
	By Title = By.id("title");
	By  Back_To_Dashboard = By.linkText(" Back To Dashboard");
	By Submit=By.name("Submit");
	By Categories=By.tagName("tr");
	By validation = By.cssSelector("div.alert.alert-danger");
	By success_verification = By.cssSelector("div.alert.alert-success");
	By delete_icon= By.xpath("//tbody[1]//tr[1]//td[5]//a[1]//i[1]");

	
	public admin_category(WebDriver driver) {
		this.driver = driver;
	}
	
	public WebElement Title() {
		return driver.findElement(Title);
	}
	
	public WebElement Back_To_Dashboard() {
		return driver.findElement(Back_To_Dashboard);
	}
	
	public WebElement Submit() {
		return driver.findElement(Submit);
	}
	
	public List<WebElement> Categories() {
		return  driver.findElements(Categories);
	}
	
	public WebElement validation() {
		return driver.findElement(validation);
	}
	
	public WebElement success_verification() {
		return driver.findElement(success_verification);
	}
	
	public WebElement delete_icon() {
		return driver.findElement(delete_icon);
	}
}
