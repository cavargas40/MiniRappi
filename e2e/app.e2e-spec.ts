import { MiniRappiPage } from './app.po';

describe('mini-rappi App', function() {
  let page: MiniRappiPage;

  beforeEach(() => {
    page = new MiniRappiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
