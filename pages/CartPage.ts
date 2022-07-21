import {By, until, WebDriver, WebElement} from "selenium-webdriver";
import {cartButton, text} from "../locators/locators";
import {driver} from "../driver/webdriver";
import {BasePage} from "./BasePage";

export class CartPage extends BasePage {
    constructor(protected driver: WebDriver) {
        super(driver);
    };

    async findElementInCartPage() {
        const cart: WebElement = await driver.findElement(By.css(cartButton));
        await cart.click();
        await driver.wait(until.elementLocated(By.css(text)));
    }
        async getTextInCartPage() {
        const checkText: WebElement = await driver.findElement(By.css(text));
        return await checkText.getText();

    }
}
