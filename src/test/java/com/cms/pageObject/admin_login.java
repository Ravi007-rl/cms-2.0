package com.cms.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class admin_login {
	public static final String login_url = "http://localhost/CMS/Login.php";

	WebDriver driver;
	By admin_username = By.id("username");
	By admin_password = By.id("password");
	By admin_login_button = By.xpath("//input[@name='Submit']");

	public admin_login(WebDriver driver) {
		this.driver = driver;
	}

	public WebElement admin_username() {
		return driver.findElement(admin_username);
	}

	public WebElement admin_password() {
		return driver.findElement(admin_password);
	}

	public WebElement admin_login_button() {
		return driver.findElement(admin_login_button);
	}

}
