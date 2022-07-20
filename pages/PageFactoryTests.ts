import {WebDriver, WebElement} from "selenium-webdriver";
import {LoginPage} from "./LoginPage";
import {driver} from "../driver/webdriver";

export class PageFactoryTests {
    static runningTheTests(driver: WebDriver, pageName: string) {
        switch (pageName) {
            case "Login":
                return new LoginPage(driver);
        }
    }
}
