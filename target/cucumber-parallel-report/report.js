$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/ParaBankRegistery.feature");
formatter.feature({
  "name": "This feature will handle the completion of registry form",
  "description": "  As an user\n  I want to fill the registry form\n  So that i can have an active account",
  "keyword": "Feature"
});
formatter.background({
  "name": "User is on the main Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Main page has loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.main_page_has_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click on Register",
  "keyword": "And "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.user_will_click_on()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees the registering form and \"Signing up is easy!\" is displayed as well",
  "keyword": "And "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.user_sees_the_registering_form_and_something_is_displayed_as_well(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User will insert the values in the boxes",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestDeLaTataLor"
    }
  ]
});
formatter.step({
  "name": "User will add the values",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "Address",
        "City",
        "State",
        "Zip Code",
        "Phone",
        "SSN",
        "User Name",
        "Password",
        "Confirm"
      ]
    },
    {
      "cells": [
        "ksdfh",
        "dfkjgh",
        "slkdfj",
        "fhdfhd",
        "hjjh",
        "ryu",
        "rutru",
        "hgjghj",
        "jkiu",
        "fdgh",
        "sdfshj"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.user_will_add_the_values(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027customer.firstName\u0027]\"}\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SVROLP00289\u0027, ip: \u0027172.17.9.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\MIHAI~1.CON\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60447}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: a7b7e750fe32a5797f72677eb36b5f7a\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027customer.firstName\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy12.sendKeys(Unknown Source)\r\n\tat stepDefinitions.ParaBankRegistryPageStepDefinition.user_will_add_the_values(ParaBankRegistryPageStepDefinition.java:82)\r\n\tat ✽.User will add the values(src/test/java/Features/ParaBankRegistery.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The response should be displayed as invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.the_response_should_be_displayed_as_invalid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is on the main Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Main page has loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.main_page_has_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click on Register",
  "keyword": "And "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.user_will_click_on()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SVROLP00289\u0027, ip: \u0027172.17.9.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\MIHAI~1.CON\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60446}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: 7740b0fd3ec5396ae43e27a8f93eb455\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy12.click(Unknown Source)\r\n\tat PagObject.ParaBankRegisteryPageOBJ.registerButtonFromMainPage(ParaBankRegisteryPageOBJ.java:66)\r\n\tat stepDefinitions.ParaBankRegistryPageStepDefinition.user_will_click_on(ParaBankRegistryPageStepDefinition.java:41)\r\n\tat ✽.User will click on Register(src/test/java/Features/ParaBankRegistery.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User sees the registering form and \"Signing up is easy!\" is displayed as well",
  "keyword": "And "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.user_sees_the_registering_form_and_something_is_displayed_as_well(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The user will not add any value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestDeLaMamaLor"
    }
  ]
});
formatter.step({
  "name": "User does not add anything",
  "keyword": "Given "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.user_does_not_add_anything()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on submit",
  "keyword": "And "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.clicks_on_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Error should be displayed for the required fields",
  "keyword": "Then "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.error_should_be_displayed_for_the_required_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is on the main Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Main page has loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.main_page_has_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click on Register",
  "keyword": "And "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.user_will_click_on()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees the registering form and \"Signing up is easy!\" is displayed as well",
  "keyword": "And "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.user_sees_the_registering_form_and_something_is_displayed_as_well(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User is going to check a null value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestDeLaBunicaLor"
    }
  ]
});
formatter.step({
  "name": "We have null value",
  "keyword": "Given "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.we_have_null_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will input the value",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "Address",
        "City",
        "State",
        "Zip Code",
        "Phone",
        "SSN",
        "User Name",
        "Password",
        "Confirm"
      ]
    },
    {
      "cells": [
        "null",
        "null",
        "null",
        "null",
        "null",
        "null",
        "null",
        "",
        "null",
        "null",
        "null"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.user_will_input_the_value(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027customer.firstName\u0027]\"}\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SVROLP00289\u0027, ip: \u0027172.17.9.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\MIHAI~1.CON\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60445}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: 4796ae86b0a775ecc30b48c163d7e4fe\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027customer.firstName\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy12.sendKeys(Unknown Source)\r\n\tat stepDefinitions.ParaBankRegistryPageStepDefinition.user_will_input_the_value(ParaBankRegistryPageStepDefinition.java:131)\r\n\tat ✽.User will input the value(src/test/java/Features/ParaBankRegistery.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Account should not be created",
  "keyword": "Then "
});
formatter.match({
  "location": "ParaBankRegistryPageStepDefinition.account_should_not_be_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});