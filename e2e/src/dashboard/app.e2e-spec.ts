import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deve conter dashboard', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Dashboard');
  });
});
