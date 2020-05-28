package baseDriver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {
	
	public static WebDriver driver;
	
	public static WebDriver getdiver()
	{
		
		System.setProperty("webdriver.chrome.driver", "C:\\QA\\RR\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
		return driver;
	}

}
