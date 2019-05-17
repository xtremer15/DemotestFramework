package stepDefinitions;


import Driver.Driver;

import PagObject.Constants;
import PagObject.ParaBankRegisteryPageOBJ;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;


import cucumber.api.java.it.Ma;
import io.cucumber.datatable.DataTable;
import org.testng.Assert;

import javax.xml.crypto.Data;
import java.util.List;
import java.util.Map;


public class ParaBankRegistryPageStepDefinition extends Driver {
    ParaBankRegisteryPageOBJ registeryPageOBJ = new ParaBankRegisteryPageOBJ();


    //Background Pre-Definition Steps
    @Given("^Main page has loaded$")
    public void main_page_has_loaded() throws Throwable {
        getDriver().navigate().to(Constants.url);
        getDriver().manage().window().maximize();
        String url = getDriver().getCurrentUrl();
        Assert.assertEquals("http://parabank.parasoft.com/parabank/index.htm", Constants.url);
        System.out.println("Title is" + registeryPageOBJ.getTitle());
        System.out.println("url is " + url);


    }

    @And("^User will click on Register$")
    public void user_will_click_on() throws Throwable {
        registeryPageOBJ.registerButtonFromMainPage();
    }

    @And("^User sees the registering form and \"([^\"]*)\" is displayed as well$")
    public void user_sees_the_registering_form_and_something_is_displayed_as_well(String strArg1) throws Throwable {

        //Assert.assertNotNull(strArg1);

    }


    @Given("^User sees the main page$")
    public void user_sees_the_main_page() throws Throwable {
        System.out.println("Title is " + registeryPageOBJ.getTitle());
        Assert.assertNotNull(registeryPageOBJ.getTitle());

    }

    @And("^User will click on  Register$")
    public void user_will_click_on_register() throws Throwable {
        registeryPageOBJ.registerButtonFromMainPage();
        getDriver().navigate().forward();

        Assert.assertNotNull(registeryPageOBJ.getCurrentUrl());


    }

    @Then("^User will see the registering form$")
    public void user_will_see_the_registering_form() throws Throwable {
        getDriver().switchTo().defaultContent();
        Thread.sleep(2000);
    }


    @Given("^User will add the values$")
    public void user_will_add_the_values(DataTable arg1) throws Throwable {

        Thread.sleep(2000);
        List<Map<String, String>> list = arg1.asMaps(String.class, String.class);
        for (int i = 0; i < list.size(); i++) {
            registeryPageOBJ.getFirstName().sendKeys(list.get(i).get("First Name"));
            registeryPageOBJ.getLastName().sendKeys(list.get(i).get("Last Name"));
            registeryPageOBJ.getCustomerAddress().sendKeys(list.get(i).get("Address"));
            registeryPageOBJ.getCustomerState().sendKeys(list.get(i).get("State"));
            registeryPageOBJ.getCustomerCity().sendKeys(list.get(i).get("City"));
            registeryPageOBJ.getCustomerZipCode().sendKeys(list.get(i).get("Zip Code"));
            registeryPageOBJ.getCustomerPhoneNumber().sendKeys(list.get(i).get("Phone"));
            registeryPageOBJ.getCustomerSSN().sendKeys(list.get(i).get("SSN"));
            registeryPageOBJ.getCustomerUserName().sendKeys(list.get(i).get("User Name"));
            registeryPageOBJ.getCustomerUserPass().sendKeys(list.get(i).get("Password"));
            registeryPageOBJ.getCustomerRepeatedPassword().sendKeys(list.get(i).get("Confirm"));
        }

    }

    @Then("^The response should be displayed as invalid$")
    public void the_response_should_be_displayed_as_invalid() throws Throwable {
        //To implement
    }

    @Given("^User does not add anything$")
    public void user_does_not_add_anything() throws Throwable {
        System.out.println("Nothing Added");
    }

    @And("^clicks on submit$")
    public void clicks_on_submit() throws Throwable {
        Thread.sleep(2000);
        registeryPageOBJ.clickOnRegisterFromRegisteringPage();
    }

    @Then("^Error should be displayed for the required fields$")
    public void error_should_be_displayed_for_the_required_fields() throws Throwable {
        Assert.assertNotNull(registeryPageOBJ.getInvalidMessageFirstName());
        Assert.assertNotNull(registeryPageOBJ.getInvalidMessageLastName());
    }


    @Given("^We have null value$")
    public void we_have_null_value() throws Throwable {
        System.out.println("Using null as value");
    }


    @And("^User will input the value$")
    public void user_will_input_the_value(DataTable arg1) throws Throwable {

        List<Map<String, String>> list = arg1.asMaps(String.class, String.class);
        for (int i = 0; i < list.size(); i++) {
            registeryPageOBJ.getFirstName().sendKeys(list.get(i).get("First Name"));
            registeryPageOBJ.getLastName().sendKeys(list.get(i).get("Last Name"));
            registeryPageOBJ.getCustomerAddress().sendKeys(list.get(i).get("Address"));
            registeryPageOBJ.getCustomerState().sendKeys(list.get(i).get("State"));
            registeryPageOBJ.getCustomerCity().sendKeys(list.get(i).get("City"));
            registeryPageOBJ.getCustomerZipCode().sendKeys(list.get(i).get("Zip Code"));
            registeryPageOBJ.getCustomerPhoneNumber().sendKeys(list.get(i).get("Phone"));
            registeryPageOBJ.getCustomerSSN().sendKeys(list.get(i).get("SSN"));
            registeryPageOBJ.getCustomerUserName().sendKeys(list.get(i).get("User Name"));
            registeryPageOBJ.getCustomerUserPass().sendKeys(list.get(i).get("Password"));
            registeryPageOBJ.getCustomerRepeatedPassword().sendKeys(list.get(i).get("Confirm"));
        }


    }

    @Then("^Account should not be created$")
    public void account_should_not_be_created() throws Throwable {
        Assert.assertNotNull(registeryPageOBJ.getInvalidMessageLastName());
        Assert.assertNotNull(registeryPageOBJ.getInvalidMessageFirstName());
    }


}