import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able login successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await NativeAlert.checkSuccessLoginMessage('Success\nYou are logged in!');

        // Close the alert
        await NativeAlert.tapOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });

    it('should be able sign up successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
        await LoginScreen.submitSignUpForm({ username: 'test@webdriver.io', password: 'Test1234!' });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await NativeAlert.checkSuccessLoginMessage('Signed Up!\nYou successfully signed up!');

        // Close the alert
        await NativeAlert.tapOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });
});
