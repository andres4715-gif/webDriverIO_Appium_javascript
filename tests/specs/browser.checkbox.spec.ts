import CheckboxPage from '../pageobjects/checkbox.page';

describe('checkboxes', () => {
    it('checkbox 2 should be enabled',  async () => {
        await CheckboxPage.open();
        await CheckboxPage.checkFirstCheckboxNotChecked();
        await CheckboxPage.checkLastCheckboxChecked();
    });

    it('checkbox 1 should be enabled after clicking on it',  async () => {
        await CheckboxPage.open();
        await CheckboxPage.checkFirstCheckboxNotSelected();
        await CheckboxPage.clickOnFirstCheckBox();
        await CheckboxPage.checkFirstCheckboxSelected();
    });
});
