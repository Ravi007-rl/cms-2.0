$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Admin_dashboard.feature");
formatter.feature({
  "name": "Dashboaed feature",
  "description": "  I want to use this template for my deashboard testing",
  "keyword": "Feature"
});
formatter.background({
  "name": "Admin must be login to run the test on dashboard",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters \"ravi\" and \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAVI-PC\u0027, ip: \u0027192.168.225.188\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Windows\\TEMP\\scoped_dir8...}, goog:chromeOptions: {debuggerAddress: localhost:7010}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: da3169bd12132d81ef0c4e9db377872c\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cms.pageObject.admin_login.admin_username(admin_login.java:20)\r\n\tat com.cms.stepDefination.StepDefination.admin_enters_and(StepDefination.java:52)\r\n\tat ✽.Admin enters \"ravi\" and \"12345678\"(file:///C:/QA/cms2/features/Admin_dashboard.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin redirected to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "verify total post on dashnoard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@total_post"
    }
  ]
});
formatter.step({
  "name": "Admin read total post",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_read_total_post()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin go to post page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_go_to_post_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin cross verify the post",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_cross_verify_the_post()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAVI-PC\u0027, ip: \u0027192.168.225.188\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Windows\\TEMP\\scoped_dir8...}, goog:chromeOptions: {debuggerAddress: localhost:7010}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: da3169bd12132d81ef0c4e9db377872c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.cms.stepDefination.StepDefination.after(StepDefination.java:127)\r\n",
  "status": "failed"
});
});