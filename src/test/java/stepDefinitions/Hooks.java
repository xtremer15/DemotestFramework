package stepDefinitions;

import Driver.Driver;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Date;

import static java.nio.file.Files.copy;


public class Hooks extends Driver {

    @Before
    public void initializeTest() {
        if (getDriver() == null) {
            WebDriverManager.chromedriver().setup();
            addDriver(new ChromeDriver());
        }
    }

    @After
    public void tearDownTestChrome(Scenario scenario) {
        if (scenario.isFailed()) {
            try {
                File screenshoot = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.FILE);
                String timestamp = new SimpleDateFormat("yyyy_MM_dd__hh_mm_ss").format(new Date());
                String testName = scenario.getName();
                copy(screenshoot.toPath(),
                        new File("F:\\repo\\FileUploadExercises\\target\\Report " + testName +
                                " " + timestamp + " screenshot.png").toPath());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        if (getDriver() != null) {
            getDriver().close();


        }
    }
}
