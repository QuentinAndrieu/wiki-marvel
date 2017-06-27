import { WikiMarvelPage } from './app.po';

describe('wiki-marvel App', () => {
  let page: WikiMarvelPage;

  beforeEach(() => {
    page = new WikiMarvelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
