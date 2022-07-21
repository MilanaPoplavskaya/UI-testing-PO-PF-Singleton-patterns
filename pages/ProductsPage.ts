import {By, WebDriver, WebElement} from "selenium-webdriver";
import {linkToTheProduct, checkText} from "../locators/locators";
import {driver} from "../driver/webdriver";
import {BasePage} from "./BasePage";

export class ProductsPage extends BasePage {
    constructor(protected driver: WebDriver) {
        super(driver);
    };

    async findLinkInProductPage() {
        const productLink: WebElement = await driver.findElement(By.xpath(linkToTheProduct));
        await productLink.click()
    }

    async getText() {
        const productName: WebElement = await driver.findElement(By.className(checkText));
        return await productName.getText();
    }

}
