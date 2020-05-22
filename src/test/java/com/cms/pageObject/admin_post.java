package com.cms.pageObject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class admin_post {
	public WebDriver driver;
	public static final String post_url = "http://localhost/CMS/Posts.php";

	By Add_New_Post = By.linkText(" Add New Post");
	By Add_New_Category = By.linkText("Add New Category");
	By Add_New_Admin = By.linkText("Add New Admin");
	By Approve_Comments = By.linkText("Approve Comments");
	By Total_post=By.tagName("tr");

	public admin_post(WebDriver driver) {
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
	
	public List<WebElement> Total_post() {
		return  driver.findElements(Total_post);
	}

}
