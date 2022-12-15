export const COMMANDS = {
    waitThenClick: (element:WebdriverIO.Element) => {
        browser.pause(2000);
        element.waitForDisplayed();
        element.click();
    }
}