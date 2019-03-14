import { Browser } from 'selenidejs';
import { Builder, Capabilities } from 'selenium-webdriver';
import { afterEach, beforeEach } from 'toundra';

export let browser: Browser;

beforeEach(async () => {
    const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

    browser = Browser
        .drivedBy(driver)
        .timeout(2000)
        .build();
});

afterEach(async () => {
    await browser.quit();
});