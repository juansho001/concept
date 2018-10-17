import { DemoprimengPage } from './app.po';

describe('demoprimeng App', () => {
  let page: DemoprimengPage;

  beforeEach(() => {
    page = new DemoprimengPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
