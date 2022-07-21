import {By, WebDriver, WebElement} from "selenium-webdriver";
import {searchInputField, frame, searchImage } from "../locators/locators";
import {driver} from "../driver/webdriver";
import {BasePage} from "./BasePage";

export class InputPage extends BasePage {
    constructor(protected driver: WebDriver) {
        super(driver);
    };

    async findInputField() {
        const inputField: WebElement = await driver.findElement(By.className(searchInputField));
        await inputField.sendKeys("Lenovo");
        await driver.switchTo().frame(driver.findElement(By.xpath(frame)));
        const image: WebElement = await driver.findElement(By.css(searchImage));
        return await image.isDisplayed();

    }
}
