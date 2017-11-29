import { NgCoreComponentsPage } from './app.po';

describe('ng-core-components App', () => {
  let page: NgCoreComponentsPage;

  beforeEach(() => {
    page = new NgCoreComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
