const LoginPage = require('../pageobjects/Login.page');
const MainPage = require('../pageobjects/Main.page');
const AccountPage = require('../pageobjects/Account.page');

describe('LOGIN PAGE', () => {

    it('Should login with valid credentials', async () => {
        await MainPage.open();
        await MainPage.loginBtn.click();
        await LoginPage.login('ponomid', 'Smmtool88!');

        await expect(AccountPage.greetingsMssg).toExist();
    });
});


