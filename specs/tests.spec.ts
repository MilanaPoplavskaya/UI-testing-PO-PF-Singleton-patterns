import {driver} from "../driver/webdriver";
import assert from "assert";
import {URLOfMainPage} from "./URL";
import {PageFactoryTests} from "../pages/PageFactoryTests";
import {BasePage} from "../pages/BasePage";
import {expect} from "chai";
import {LoginPage} from "../pages/LoginPage";
import {CartPage} from "../pages/CartPage";
import {InputPage} from "../pages/InputPage";
import {ProductsPage} from "../pages/ProductsPage";
import {AdsPage} from "../pages/AdsPage";

describe("onliner.by testing", () => {


    beforeEach(async () => {
        const basePage = new BasePage(driver);
        await basePage.visitPage(URLOfMainPage);
    });
    afterEach(async () => {
        const basePage = new BasePage(driver);
        await basePage.closeBrowser();
    });

    it("Check login page", async () => {
        const findElement = await PageFactoryTests.runningTheTests(driver, "Login") as LoginPage;
        await findElement.findElementInLoginPage();
        assert(findElement.findElementInLoginPage(), "Error: login page is not opened");
    });
    it("Check shopping cart", async () => {
        const findCart = await PageFactoryTests.runningTheTests(driver, "Cart") as CartPage;
        await findCart.findElementInCartPage();
        expect(await findCart.getTextInCartPage()).to.equal("Корзина");
    });
    it("Check input field", async () => {
        const checkImageAfterSendKeys = await PageFactoryTests.runningTheTests(driver, "Input") as InputPage;
        await checkImageAfterSendKeys.findInputField();
        assert(checkImageAfterSendKeys.findInputField(), "Error: image is not displayed")
    });
    it("Check products link", async () => {
        const findLinkOfProduct = await PageFactoryTests.runningTheTests(driver, "Product") as ProductsPage;
        await findLinkOfProduct.findLinkInProductPage();
        expect(await findLinkOfProduct.getText()).to.equal("Триммеры");
    });
    it("Check is the button enabled", async () => {
        const findAds = await PageFactoryTests.runningTheTests(driver, "Ads") as AdsPage;
        await findAds.checkButtonIsEnabled();
        assert(findAds.checkButtonIsEnabled(), "Error: image is not displayed")
    });
});



