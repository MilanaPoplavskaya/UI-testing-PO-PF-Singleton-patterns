import {WebDriver} from "selenium-webdriver";
import {BasePage} from "./BasePage";

export class PageFactory {
    static getPage(driver: WebDriver) {
        return new BasePage(driver);
    };

    static closingTheBrowser(driver: WebDriver) {
        return new BasePage(driver);
    };
}
