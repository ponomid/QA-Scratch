const Page = require('./Page');

class MainPage extends Page {

    get loginBtn() {
        return $("//a[@title='Login/register']");
    }

    open() {
        return super.open('./');
    }
}

module.exports = new MainPage();