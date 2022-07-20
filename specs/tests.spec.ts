import {driver} from "../driver/webdriver";
import assert from "assert";
import * as Assert from "assert";
import {URLOfMainPage} from "./URL";
import {PageFactory} from "../pages/PageFactory";
import {PageFactoryTests} from "../pages/PageFactoryTests";
import {LoginPage} from "../pages/LoginPage";

describe("onliner.by testing", () => {


    beforeEach(async () => {
        await PageFactory.getPage(driver).visitPage(URLOfMainPage);
    });
    afterEach(async () => {
        await PageFactory.closingTheBrowser(driver).closeBrowser();
    });

    it("Check login page", async () => {
        await PageFactoryTests.runningTheTests(driver, "Login").findElementInLoginPage();
        await P

        // const loginPage = new LoginPage(driver);
        // await loginPage.findElementInLoginPage();
        // await loginPage.findLinkInLoginPAge();
        // assert(loginPage.findLinkInLoginPAge(), "Error: login page is not opened");

    });
});