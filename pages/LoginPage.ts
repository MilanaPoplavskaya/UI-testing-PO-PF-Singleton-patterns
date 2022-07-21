import {By, until, WebDriver, WebElement} from "selenium-webdriver";
import {loginButton, loginLink} from "../locators/locators";
import {driver} from "../driver/webdriver";
import {BasePage} from "./BasePage";

export class LoginPage extends BasePage {
    constructor(protected driver: WebDriver) {
        super(driver);
    };

    async findElementInLoginPage() {
        const element: WebElement = await driver.findElement((By.xpath(loginButton)));
        await element.click();
        await driver.wait(until.elementLocated(By.css(loginLink)));
        const link: WebElement = await driver.findElement(By.css(loginLink));
        return await link.isDisplayed();
    }
}
