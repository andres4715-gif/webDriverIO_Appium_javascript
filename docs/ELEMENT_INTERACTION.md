# **Element interaction:** 

## Wait until the element is present: 
```javascript
waitForDisplayed({ timeout: 3000 }

- Example: 

async  checkFirstCheckboxNotChecked() {
    await  this.firstCheckbox.waitForDisplayed({ timeout: 3000 });
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
- Example: 

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
