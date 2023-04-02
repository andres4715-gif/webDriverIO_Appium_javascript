# **Element interaction:** 

## **Waits**

### Wait until the element is present: 
```javascript
waitForDisplayed({ timeout: 3000 }

- Example: 

async  checkFirstCheckboxNotChecked() {
    await  this.firstCheckbox.waitForDisplayed({ timeout: 3000 });
}
```

### waitForDisplayed

```javascript
    get flash () {
        return $('#flash');
    }
```
- waitForDisplayed
```javascript
   async verifyMessageAfterAddingWrongCredentials() {
        await this.flash.waitForDisplayed({ timeout: 3000 });
    }
```

___
## **Checkbox:** 
How can check it the checkbox is not checked:  .not.toBeChecked();

```javascript
- Example: 

async  checkFirstCheckboxNotChecked() {
    await  expect (await  this.firstCheckbox).not.toBeChecked();
}
```
How can check it the checkbox is checked:  .toBeChecked();

```javascript
- Example: 

async  checkFirstCheckboxNotChecked() {
    await expect (await this.lastCheckbox).toBeChecked();
}
```

How can check it the checkbox is not selected:  .toBeChecked();

```javascript
- Example: 

async checkFirstCheckboxNotSelected() {
    await expect (await this.firstCheckbox).not.toBeSelected();
}
```

How can check it the checkbox is not selected:  .toBeChecked();

```javascript
- Example: 

async checkFirstCheckboxSelected() {
    await this.firstCheckbox.waitForDisplayed({ timeout: 3000 });
    await expect (await this.firstCheckbox).toBeSelected();
}


```

How can do a click to check or uncheck a checkbox:  .click();

```javascript
- Example: 

async clickOnFirstCheckBox() {
    (await this.firstCheckbox).click();
}
```
___

## **Click:**

How can do a click to check or uncheck a button:  .click();

```javascript
- Example 1: 

    private get loginContainerButton () {
        return $('~button-login-container');}

    async tapOnLoginContainerButton() {
        await this.loginContainerButton.click();
    }
```


```javascript
- Example 2: 

    get btnRegister () {
        return $('#register');
    }

async clickOnFirstCheckBox() {
    (await this.btnRegister).click();
}
```
___

## **General element:**

How can check if element exist or not: 
```javascript
.not.toBeExisting()
.toBeExisting()
```
```javascript
- Example: 

    get btnStart () {
        return $('button=Start');
    }

    get loadedPage () {
        return $('#finish');
    }
```

EXAMPLE .not.toBeExisting();

```javascript
async checkLouderNotExisting() {
    await expect(this.loadedPage).not.toBeExisting();
}
```

EXAMPLE .toBeExisting();

```javascript
async checkLouderExisting() {
    (await this.loadedPage).waitForExist();
    await expect(this.loadedPage).toBeExisting();
}
```
___

## **Text Validation:**

toHaveTextContaining()

```javascript
    get flash () {
        return $('#flash');
    }
```
- Check if the obtained text contains expected text

```javascript
   async verifyMessageAfterAddingWrongCredentials() {
        await expect(this.flash).toHaveTextContaining('Your username is invalid!');
    }
```
___

## **setValue:**

setValue()

```javascript
    get username () {
        return $('#username');
    }

    get password () {
        return $('#password');
    }
```

- **EXAMPLE 1:** 

```javascript
   async login (username:string, password:string) {
        await this.username.setValue(username);
        await this.password.setValue(password);
    }
```
- Call this method from the test: 

```javascript
describe('auth form', () => {
    it('should deny access with wrong credentials',  async () => {
        await FormPage.login('foo', 'bar!');
    });
```
- **EXAMPLE 2:** 

```javascript
   async login ({ username, password }: {username:string; password: string;}) {
        await this.username.setValue(username);
        await this.password.setValue(password);
    }
```
- Call this method from the test: 

```javascript
describe('auth form', () => {
    it('should deny access with wrong credentials',  async () => {
        await FormPage.login({ username:'tomsmith', password: 'SuperSecretPassword!' });
    });
```
___
