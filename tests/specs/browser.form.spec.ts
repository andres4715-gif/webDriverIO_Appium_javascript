import FormPage from '../pageobjects/form.page';

describe('auth form', () => {
    it('should deny access with wrong credentials',  async () => {
        await FormPage.open();
        await FormPage.login('foo', 'bar!');
        await FormPage.verifyMessageAfterAddingWrongCredentials('Your username is invalid!');
    });

    it('should allow access with valid credentials',  async () => {
        await FormPage.open();
        await FormPage.login('tomsmith', 'SuperSecretPassword!');
        await FormPage.verifyMessageAfterAddingWrongCredentials('You logged into a secure area!');
    });
});
