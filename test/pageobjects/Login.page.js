const Page = require('./Page');
class LoginPage extends Page {

    get inputEmail() {
        return $('#okta-signin-username');
    }

    get inputPassword() {
        return $('#okta-signin-password');
    }

    get btnSignin() {
        return $('#okta-signin-submit');
    }

    async login (email, password) {
        await this.open();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignin.click();
    }

    async open() {
        return await browser.url('https://www.bio-rad.com')
    }
}

module.exports = new LoginPage();
