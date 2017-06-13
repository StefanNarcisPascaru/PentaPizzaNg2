import { NumePage } from './app.po';

describe('nume App', () => {
  let page: NumePage;

  beforeEach(() => {
    page = new NumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('PentaStagione works!');
  });
});
