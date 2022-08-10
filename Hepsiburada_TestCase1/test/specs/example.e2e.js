const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Hepsiburada Save Location', () => {
    it('should select city, town, district and save location', async () => {
        await LoginPage.open();

        await LoginPage.login();

    });
});


