package PagObject;


import Driver.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;


class BasePage extends Driver {


    public int getSpecificFrameFromPage(WebDriver driver, By by) {

        int i;
        int frame = driver.findElements(By.tagName("iframe")).size();
        System.out.println("We have " + frame + " frames in pag");
        System.out.println(driver.findElement(By.tagName("iframe")).isDisplayed());


        for (i = 0; i < frame; i++) {
            driver.switchTo().frame(i);

            int verifyFrame = driver.findElements(by).size();

            if (verifyFrame > 0) {

                break;

            } else {
                System.out.println("continue loop");
            }
        }
        driver.switchTo().defaultContent();
        return i;
    }

    public void getLinks() {
        int links = getDriver().findElements(By.tagName("a")).size();
        System.out.println("We Have " + links + " in page");

    }

    public void click(By elementBy) {
        getDriver().findElement(elementBy).click();
    }

    public void writeText(By elementBy, String text) {
        getDriver().findElement(elementBy).sendKeys(text);
    }

    public String readText(By elementBy) {
        return getDriver().findElement(elementBy).getText();
    }


    public void assertEquals(By elementBy, String expectedText) {


    }

    public String getTitle() {
        return getDriver().getTitle();
    }

    public String getCurrentUrl() {
        return getDriver().getCurrentUrl();
    }

    public WebDriver getContent() {
        return getDriver().switchTo().defaultContent();
    }

}
