import { browser, element, by } from 'protractor';

export class NumePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('PentaStagione-root h1')).getText();
  }
}
