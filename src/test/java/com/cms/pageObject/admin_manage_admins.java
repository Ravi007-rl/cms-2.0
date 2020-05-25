package com.cms.pageObject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class admin_manage_admins {
	public WebDriver driver;
	public static final String manage_admins = "http://localhost/CMS/admin/Admins.php";
	
	By Username=By.id("username");
	By Name=By.id("Name");
	By Password=By.id("Password");
	By ConfirmPassword=By.id("ConfirmPassword");
	By Back_To_Dashboard=By.linkText(" Back To Dashboard");
	By Submit=By.name("Submit");
	By Admins=By.tagName("tr");
	By validation = By.cssSelector("div.alert.alert-danger");
	By success_verification = By.cssSelector("div.alert.alert-success");
	
	public admin_manage_admins(WebDriver driver) {
		this.driver = driver;
	}
	
	public WebElement Username() {
		return driver.findElement(Username);
	}
	
	public WebElement Name() {
		return driver.findElement(Name);
	}
	
	public WebElement Password() {
		return driver.findElement(Password);
	}
	
	public WebElement ConfirmPassword() {
		return driver.findElement(ConfirmPassword);
	}
	
	
	
	public WebElement Back_To_Dashboard() {
		return driver.findElement(Back_To_Dashboard);
	}
	
	public WebElement Submit() {
		return driver.findElement(Submit);
	}
	
	public WebElement validation() {
		return driver.findElement(validation);
	}
	
	public List<WebElement> Admins() {
		return  driver.findElements(Admins);
	}

	public WebElement success_verification() {
		return driver.findElement(success_verification);
	}
}
