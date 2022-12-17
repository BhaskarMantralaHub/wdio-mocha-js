import {IElement} from "../wdio.conf";

export const COMMANDS = {
    waitThenClick: (element:IElement) => {
        browser.pause(2000);
        element.waitForDisplayed();
        element.click();
    }
}