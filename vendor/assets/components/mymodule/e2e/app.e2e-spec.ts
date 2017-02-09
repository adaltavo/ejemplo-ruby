import { MymodulePage } from './app.po';

describe('mymodule App', function() {
  let page: MymodulePage;

  beforeEach(() => {
    page = new MymodulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
