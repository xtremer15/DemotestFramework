package PagObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ParaBankRegisteryPageOBJ extends BasePage {
    @FindBy(xpath = "//a[contains(text(),'Register')]")
    private static WebElement registerButtonFromMainPage;
    @FindBy(xpath = "//h1[contains(text(),'Signing up is easy!')]")
    private WebElement messageDisplayed;
    @FindBy(xpath = "//input[@id='customer.firstName']")
    private WebElement firstName;
    @FindBy(xpath = "//input[@id='customer.lastName']")
    private WebElement lastName;
    @FindBy(xpath = "//input[@id='customer.address.street']")
    private WebElement customerAddress;
    @FindBy(xpath = "//input[@id='customer.address.city']")
    private WebElement customerCity;
    @FindBy(xpath = "//input[@id='customer.address.state']")
    private WebElement customerState;
    @FindBy(xpath = "//input[@id='customer.address.zipCode']")
    private WebElement customerZipCode;
    @FindBy(xpath = "//input[@id='customer.phoneNumber']")
    private WebElement customerPhoneNumber;
    @FindBy(xpath = "//input[@id='customer.ssn']")
    private WebElement customerSSN;
    @FindBy(xpath = "//input[@id='customer.username']")
    private WebElement customerUserName;
    @FindBy(xpath = "//input[@id='customer.password']")
    private WebElement customerUserPass;
    @FindBy(xpath = "//input[@id='repeatedPassword']")
    private WebElement customerRepeatedPassword;
    @FindBy(xpath = "//input[@value='Register']")
    private WebElement registeringButtonFromRegistringPage;
    @FindBy(xpath = "//span[contains(text(),'First name is required')]")
    private WebElement invalidMessageFirstName;
    @FindBy(xpath = "//span[contains(text(),'Last name is required')]")
    private WebElement invalidMessageLastName;

    public ParaBankRegisteryPageOBJ() {
        PageFactory.initElements(getDriver(), this);
    }

    public static WebElement getRegisterButton() {
        return registerButtonFromMainPage;
    }

    public void clickOnRegisterFromRegisteringPage() {
        registeringButtonFromRegistringPage.click();
    }

    public WebElement getInvalidMessageFirstName() {
        return invalidMessageFirstName;
    }

    public WebElement getInvalidMessageLastName() {
        return invalidMessageLastName;
    }

    public WebElement getRegisteringButtonFromRegistringPage() {
        return registeringButtonFromRegistringPage;
    }

    public void registerButtonFromMainPage() {
        registerButtonFromMainPage.click();
    }

    public WebElement getMessageDisplayed() {
        return messageDisplayed;
    }

    public WebElement getFirstName() {
        return firstName;
    }

    public WebElement getLastName() {
        return lastName;
    }

    public WebElement getCustomerAddress() {
        return customerAddress;
    }

    public WebElement getCustomerCity() {
        return customerCity;
    }

    public WebElement getCustomerState() {
        return customerState;
    }

    public WebElement getCustomerZipCode() {
        return customerZipCode;
    }

    public WebElement getCustomerPhoneNumber() {
        return customerPhoneNumber;
    }

    public WebElement getCustomerSSN() {
        return customerSSN;
    }

    public WebElement getCustomerUserName() {
        return customerUserName;
    }

    public WebElement getCustomerUserPass() {
        return customerUserPass;
    }

    public WebElement getCustomerRepeatedPassword() {
        return customerRepeatedPassword;
    }


}

