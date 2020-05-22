package com.cms.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class admin_dashboard {

	public WebDriver driver;
	public static final String dashboard_url = "http://localhost/CMS/admin/Dashboard.php";

	By Add_New_Post = By.linkText(" Add New Post");
	By Add_New_Category = By.linkText("Add New Category");
	By Add_New_Admin = By.linkText("Add New Admin");
	By Approve_Comments = By.linkText("Approve Comments");
	By Total_post = By.cssSelector("div.col-lg-2.d-none.d-md-block > div:nth-child(1) > div > h4");
	By Total_Categories = By.cssSelector("div.col-lg-2.d-none.d-md-block > div:nth-child(2) > div > h4");
	By Total_Admins = By.cssSelector("div.col-lg-2.d-none.d-md-block > div:nth-child(3) > div > h4");
	By Total_Comments = By.cssSelector("div.col-lg-2.d-none.d-md-block > div:nth-child(4) > div > h4");
	By admin_name_verification = By.cssSelector("div.alert.alert-success");

	public admin_dashboard(WebDriver driver) {
		this.driver = driver;
	}

	public WebElement Add_New_Post() {
		return driver.findElement(Add_New_Post);
	}

	public WebElement Add_New_Category() {
		return driver.findElement(Add_New_Category);
	}

	public WebElement Add_New_Admin() {
		return driver.findElement(Add_New_Admin);
	}

	public WebElement Approve_Comments() {
		return driver.findElement(Approve_Comments);
	}

	public WebElement Total_post() {
		return driver.findElement(Total_post);
	}

	public WebElement Total_Categories() {
		return driver.findElement(Total_Categories);
	}

	public WebElement Total_Admins() {
		return driver.findElement(Total_Admins);
	}

	public WebElement Total_Comments() {
		return driver.findElement(Total_Comments);
	}

	public WebElement admin_name_verification() {
		return driver.findElement(admin_name_verification);
	}
}
