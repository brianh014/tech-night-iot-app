import { TechNightIotPage } from './app.po';

describe('tech-night-iot App', () => {
  let page: TechNightIotPage;

  beforeEach(() => {
    page = new TechNightIotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('iot works!');
  });
});
