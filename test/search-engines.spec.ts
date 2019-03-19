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

    test('ecosia', async () => {
        await browser.open('https://www.ecosia.org/');

        await browser.element(by.name('q')).setValue('selenium').then(perform.pressEnter);

        await browser.all('.result').should(have.size(11))
            .then(find.first)
            .then(should.match(have.text('Selenium automates browsers')))
            .then(find.element('a'))
            .then(perform.click);

        await browser.should(have.title('Selenium - Web Browser Automation'))
    });

    test('searchencrypt', async () => {
        await browser.open('https://www.searchencrypt.com');

        await browser.element(by.name('q')).setValue('selenium').then(perform.pressEnter);

        await browser.all('.search-result-container').should(have.size(10))
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
