import { KontakBandungRc2Page } from './app.po';

describe('kontak-bandung-rc2 App', () => {
  let page: KontakBandungRc2Page;

  beforeEach(() => {
    page = new KontakBandungRc2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
