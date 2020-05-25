package com.cms.testRunner;

import org.junit.runner.RunWith;

import io.cucumber.java.Scenario;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "features",
		glue = {"com.cms.stepDefination","com.cms.testRunner"},
		plugin = {"pretty", "html:target/Destination",
				"json:target/cucumber.json",
				"junit:target/cucumber.xml",
				"rerun:target/Failed_test_Cases.txt"},
		monochrome = true,
		tags = "@Manage_admin")

public class TestRunner {
	
	public static Scenario scenario;
	
}
