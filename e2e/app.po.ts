import { browser, element, by } from 'protractor';

export class TechNightIotPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('iot-root h1')).getText();
  }
}
