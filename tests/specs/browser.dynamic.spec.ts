import DynamicPage from '../pageobjects/dynamic.page';

describe('dynamic loading', () => {
    it('should be an button on the page',  async () => {
        await DynamicPage.open();
        await DynamicPage.checkLouderNotExisting();
        await DynamicPage.clickStartButton();
        await DynamicPage.checkLouderExisting();
    });
});
