package com.cms.pageObject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class admin_category {
	public WebDriver driver;
	public static final String post_url = "http://localhost/CMS/admin/Categories.php";
	
	
	By Title = By.name("title");
	By  Back_To_Dashboard = By.linkText(" Back To Dashboard");
	By Submit=By.name("Submit");
	By Categories=By.tagName("tr");

	
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
	
}
