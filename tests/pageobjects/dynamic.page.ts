import Page from './page';

class DynamicPage extends Page {
    /**
     * define elements
     */
    get btnStart () {
        return $('button=Start');
    }

    get loadedPage () {
        return $('#finish');
    }

    /**
     * define or overwrite page methods
     */
    async open ():Promise<string> {
        return super.open('dynamic_loading/2');
    }

    async checkLouderNotExisting() {
        await expect(this.loadedPage).not.toBeExisting();
    }

    async clickStartButton() {
        (await this.btnStart).click();
    }

    async checkLouderExisting() {
        (await this.loadedPage).waitForExist();
        await expect(this.loadedPage).toBeExisting();
    }
}

export default new DynamicPage();
