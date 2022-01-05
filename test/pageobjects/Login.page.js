class LoginPage {
    url = 'https://commerce.bio-rad.com/en-us/login-registration';

    get inputUsername() {
        return $('#okta-signin-username');
    }

    get inputPassword() {
        return $('#okta-signin-password');
    }

    get btnSignin() {
        return $('#okta-signin-submit');
    }

    async login (username, password) {
        await this.open();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSignin.click();
    }

    open() {
        return browser.url(this.url);
    }
}

module.exports = new LoginPage();
