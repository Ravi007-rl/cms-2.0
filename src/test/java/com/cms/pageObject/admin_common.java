package com.cms.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class admin_common {
	
	public WebDriver driver;
	
	By logout = By.linkText("Logout");
	By my_profile = By.linkText("My Profile");
	By Dashboard = By.linkText("Dashboard");
	By Posts = By.linkText("Posts");
	By Categories = By.linkText("Categories");
	By Manage_Admins = By.linkText("Manage Admins");
	By Comments = By.linkText("Comments");
	By Live_Blog = By.linkText("Live Blog");
	
	public admin_common(WebDriver driver) {
		this.driver = driver;
	}
	
	public WebElement my_profile() {
		return driver.findElement(my_profile);
	}

	public WebElement Dashboard() {
		return driver.findElement(Dashboard);
	}

	public WebElement Posts() {
		return driver.findElement(Posts);
	}

	public WebElement Categories() {
		return driver.findElement(Categories);
	}

	public WebElement Manage_Admins() {
		return driver.findElement(Manage_Admins);
	}

	public WebElement Comments() {
		return driver.findElement(Comments);
	}

	public WebElement Live_Blog() {
		return driver.findElement(Live_Blog);
	}

	public WebElement logout() {
		return driver.findElement(logout);
	}

}
