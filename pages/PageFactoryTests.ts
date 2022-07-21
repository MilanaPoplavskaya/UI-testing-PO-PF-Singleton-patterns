import {WebDriver} from "selenium-webdriver";
import {LoginPage} from "./LoginPage";
import {CartPage} from "./CartPage";
import {InputPage} from "./InputPage";
import {ProductsPage} from "./ProductsPage";
import {AdsPage} from "./AdsPage";
import {BasePage} from "./BasePage";

export class PageFactoryTests {
    static runningTheTests(driver: WebDriver, pageName: string) {
        switch (pageName) {
            case "BasePage":
                return new BasePage(driver);
            case "Login":
                return new LoginPage(driver);
             case "Cart":
                return new CartPage(driver)
            case "Input":
                return new InputPage(driver);
            case "Product":
                return new ProductsPage(driver)
            case "Ads":
                return new AdsPage(driver)
            default:
                return new BasePage(driver);
        }
    }
}
