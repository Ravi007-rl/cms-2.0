package com.cms.testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "@target/Failed_test_Cases.txt",
		glue = {"com.cms.stepDefination","com.cms.testRunner"},
		plugin = {"pretty", "html:target/Destination"})

public class ReRunner {

}
