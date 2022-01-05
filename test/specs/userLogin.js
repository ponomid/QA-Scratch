const LoginPage = require('../pageobjects/Login.page');
const MainPage = require('../pageobjects/Main.page');

describe('LOGIN PAGE', () => {

    it('Should login with valid credentials', async () => {
        await MainPage.loginBtn.click();
        await LoginPage.login('ponomid@ya.ru', 'Smmtool88!');
    });
});


