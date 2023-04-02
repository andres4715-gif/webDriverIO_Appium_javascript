import Page from './page';

class CheckboxPage extends Page {
    /**
     * define elements
     */
    get firstCheckbox () {
        return $('#checkboxes input:first-Child');
    }

    get lastCheckbox () {
        return $('#checkboxes input:last-Child');
    }

    /**
     * overwrite specific options to adapt into page object
     */
    async open(): Promise<string> {
        return super.open('checkboxes');
    }

    async checkFirstCheckboxNotChecked() {
        await this.firstCheckbox.waitForDisplayed({ timeout: 3000 });
        await expect (await this.firstCheckbox).not.toBeChecked();
    }

    async checkLastCheckboxChecked() {
        await this.lastCheckbox.waitForDisplayed({ timeout: 3000 });
        await expect (await this.lastCheckbox).toBeChecked();
    }

    async checkFirstCheckboxNotSelected() {
        await this.firstCheckbox.waitForDisplayed({ timeout: 3000 });
        await expect (await this.firstCheckbox).not.toBeSelected();
    }

    async checkFirstCheckboxSelected() {
        await this.firstCheckbox.waitForDisplayed({ timeout: 3000 });
        await expect (await this.firstCheckbox).toBeSelected();
    }

    async clickOnFirstCheckBox() {
        (await this.firstCheckbox).click();
    }
}

export default new CheckboxPage();
