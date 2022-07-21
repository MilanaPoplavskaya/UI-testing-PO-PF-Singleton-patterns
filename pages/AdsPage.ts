import {By, until, WebDriver, WebElement} from "selenium-webdriver";
import {searchLink, searchButton} from "../locators/locators";
import {driver} from "../driver/webdriver";
import {BasePage} from "./BasePage";

export class AdsPage extends BasePage {
    constructor(protected driver: WebDriver) {
        super(driver);
    };

    async checkButtonIsEnabled() {
        const newsLink: WebElement = await driver.findElement(By.xpath(searchLink));
        await newsLink.click();
        await driver.wait(until.elementLocated(By.xpath(searchButton)));
        const checkButton: WebElement = await driver.findElement(By.xpath(searchButton));
        return await checkButton.isEnabled();
    }

}

