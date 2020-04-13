import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return browser.getTitle();
  }

  getPageInfoHeader() {
    return element(by.css('.header')).getText();
  }

  getArticles() {
    return element(by.css('.articles')).getText();
  }

  getFooter() {
    return element(by.css('app-root app-footer p')).getText();
  }
}
