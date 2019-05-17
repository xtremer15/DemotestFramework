package TestRunner;


import cucumber.api.cli.Main;


public class TestRunner {

    public static void main(String[] args) {

        Main.main(new String[]
                {"--threads", "3",
                        "-p", "html:target/cucumber-parallel-report",
                        "-p", "json:target/cucumber-parallel-report/raportJmecher.json",
                        "-t", "@TestDeLaTataLor,@TestDeLaMamaLor,@TestDeLaBunicaLor",
                        "-g", "stepDefinitions", "src/test/java/Features/"}
        );
    }
}