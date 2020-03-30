package com.cms.pageObject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class admin_post {
	public WebDriver driver;
	public static final String post_url = "http://localhost/CMS/Posts.php";

	By logout = By.linkText("Logout");
	By my_profile = By.linkText("My Profile");
	By Dashboard = By.linkText("Dashboard");
	By Posts = By.linkText("Posts");
	By Categories = By.linkText("Categories");
	By Manage_Admins = By.linkText("Manage Admins");
	By Comments = By.linkText("Comments");
	By Live_Blog = By.linkText("Live Blog");
	By Add_New_Post = By.linkText(" Add New Post");
	By Add_New_Category = By.linkText("Add New Category");
	By Add_New_Admin = By.linkText("Add New Admin");
	By Approve_Comments = By.linkText("Approve Comments");
	By Total_post=By.tagName("tr");

	public admin_post(WebDriver driver) {
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
