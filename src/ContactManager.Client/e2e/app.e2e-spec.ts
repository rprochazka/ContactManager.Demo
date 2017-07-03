import { ContactManager.ClientPage } from './app.po';

describe('contact-manager.client App', () => {
  let page: ContactManager.ClientPage;

  beforeEach(() => {
    page = new ContactManager.ClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
