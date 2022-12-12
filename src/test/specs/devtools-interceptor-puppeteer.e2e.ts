describe('my test', () => {
    it('can use Puppeteer as automation fallback', async () => {
        // WebDriver command
        await browser.url('https://webdriver.io');

        const response = await browser.call(async () => {
            const puppeteer = await browser.getPuppeteer();

            // use Puppeteer interfaces
            const page = (await puppeteer.pages())[0];
            await page.setRequestInterception(true);
            await page.on('request', interceptedRequest => {
                if (interceptedRequest.url() == "https://webdriver.io/") {
                    console.log(interceptedRequest.url());
                    console.log(interceptedRequest);
                }
                interceptedRequest.continue();
            });

            page.on('response', async response => {
                const interceptedRequest = await response.request();
                if (interceptedRequest.url() == "https://webdriver.io/") {
                    console.log(interceptedRequest.url());
                    // console.log(await response.text());
                }
            });
        });


        await browser.url('https://webdriver.io');

        console.log('Response is ' + JSON.stringify(response));

        /**
         * WebdriverIO logo is no replaced with the Puppeteer logo
         */
    });
});