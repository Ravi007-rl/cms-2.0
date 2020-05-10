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
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_dashboard_page()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "Admin go to post page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_go_to_post_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin cross verify the post",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_cross_verify_the_post()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:features/Admin_login.feature");
formatter.feature({
  "name": "Admin Login Action",
  "description": "  I want to use this template for my login page testing",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "Admin enters \"jazeb\" and \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Unsuccessful Login with Invalid Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "Admin enters \"jazeb\" and \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Unsuccessful Login with Invalid Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "Admin enters \"jazeb\" and \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_login_page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...localhost/CMS/admin/[index].php\u003e but was:\u003c...localhost/CMS/admin/[Dashboard].php\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.cms.stepDefination.StepDefination.admin_redirected_to_login_page(StepDefination.java:69)\r\n\tat ✽.Admin redirected to login page(file:///C:/QA/cms2/features/Admin_login.feature:20)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "Unsuccessful Login with Invalid Credentials");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify trim is working in username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "Admin enters \"                       ravi              \" and \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_dashboard_page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...localhost/CMS/admin/[Dashboard].php\u003e but was:\u003c...localhost/CMS/admin/[index].php\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.cms.stepDefination.StepDefination.admin_redirected_to_dashboard_page(StepDefination.java:62)\r\n\tat ✽.Admin redirected to dashboard page(file:///C:/QA/cms2/features/Admin_login.feature:26)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "verify trim is working in username");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify not enter any detail and click on login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "Admin enters \"\" and \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify admin enter username and not enter password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "Admin enters \"ravi\" and \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify admin enter invalid username and enter password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "Admin enters \"rav\" and \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify admin enter directly url and try to login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "admin enter url \"http://localhost/CMS/admin/Dashboard.php\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_enter_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify admin login and click on logout and click on back button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "Admin enters \"jazeb\" and \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_click_on_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin press back button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_press_back_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Admin welcome message with his name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "Admin is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Admins enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Admin redirected to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "check welcome message has same \u003coutput\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "output"
      ]
    },
    {
      "cells": [
        "Ravi",
        "12345678",
        "Wellcome Lalwani Ravi!"
      ]
    },
    {
      "cells": [
        "Shubham",
        "12345678",
        "Wellcome shubham!"
      ]
    },
    {
      "cells": [
        "Ravi",
        "12345678",
        "Wellcome Lalwani Ravi!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Admin welcome message with his name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "Admins enters Ravi and 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admins_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check welcome message has same Wellcome Lalwani Ravi!",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.check_welcome_message_has_same(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Admin welcome message with his name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "Admins enters Shubham and 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admins_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check welcome message has same Wellcome shubham!",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.check_welcome_message_has_same(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWellcome [shubham]!\u003e but was:\u003cWellcome []!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.cms.stepDefination.StepDefination.check_welcome_message_has_same(StepDefination.java:99)\r\n\tat ✽.check welcome message has same Wellcome shubham!(file:///C:/QA/cms2/features/Admin_login.feature:66)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", "Verify Admin welcome message with his name");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Admin welcome message with his name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "name": "Admins enters Ravi and 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admins_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check welcome message has same Wellcome Lalwani Ravi!",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.check_welcome_message_has_same(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:features/admin_logout.feature");
formatter.feature({
  "name": "Admin Logout Action",
  "description": "  I want to use this template for my logout page testing",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify logout fuctionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@logout"
    }
  ]
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
  "name": "Admin enters \"Ravi\" and \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_click_on_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin redirected to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cms.stepDefination.StepDefination.admin_redirected_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});