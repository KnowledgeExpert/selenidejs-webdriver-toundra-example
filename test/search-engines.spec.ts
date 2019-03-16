import { suite, test } from 'toundra';
import { by, find, have, perform, should } from 'selenidejs';
import { browser } from './base';

suite('search engines should search', () => {
    test('google', async () => {
        await browser.open('https:google.com/ncr');

        await browser.element(by.name('q')).setValue('selenium').then(perform.pressEnter);

        await browser.all('#search .g').should(have.size(11))
        .then(find.first)
        .then(should.match(have.text('Selenium automates browsers')))
        .then(find.element('.r>a'))
        .then(perform.click);

        await browser.should(have.title('Selenium - Web Browser Automation'))
});

    test('yahoo', async () => {
        await browser.open('http:us.yahoo.com/');

        await browser.element(by.name('p')).setValue('selenium').then(perform.pressEnter);

        await browser.all('.algo-sr').should(have.size(10))
            .then(find.elementAt(0))
            .then(should.match(have.text('Selenium automates browsers')))
            .then(find.element('a'))
            .then(perform.click);

        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(3000);
        await browser.goToNextTab();
        await browser.should(have.title('Selenium - Web Browser Automation'))
    });

    test('bing', async () => {
        await browser.open('https:www.bing.com/');

        await browser.element(by.name('q')).setValue('selenium');
        await browser.all('.sa_sg').elementAt(0).click();

        await browser.all('.b_algo').should(have.size(10))
        .then(find.first)
        .then(should.match(have.text('Selenium automates browsers')))
        .then(find.element('a'))
        .then(perform.click);

        await browser.should(have.title('Selenium - Web Browser Automation'))
    });

    test('duckduckgo', async () => {
        await browser.open('https:duckduckgo.com/');

        await browser.element(by.name('q')).setValue('selenium').then(perform.pressEnter);

        await browser.all('.results_links_deep').should(have.size(10))
        .then(find.first)
        .then(should.match(have.text('Selenium automates browsers')))
        .then(find.element('a'))
        .then(perform.click);

        await browser.should(have.title('Selenium - Web Browser Automation'))
    });
});
