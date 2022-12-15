import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'
import {USER_NAME} from "../../config/config-helper";

describe("Test Case 2", () => {
    it('should login with valid credentials', async () => {
        console.log("Inside it block #1");
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();
        console.log({});

        await LoginPage.login(USER_NAME, process.env.PASSWORD || '')
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toBeDisplayed();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        // @ts-ignore

    })
})


