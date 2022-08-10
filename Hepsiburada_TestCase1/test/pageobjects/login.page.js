

const { path } = require('chromedriver');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
    */

    PATH = "C:\Users\baris\OneDrive\Masaüstü\Hepsiburada_WebDriverIO\Hepsiburada_TestCase1\screenshot";
    date = new Date();

    get locationButton (){
        return $('//div[contains(text(),"Konum seç")]');
    }

    get citySelector (){
        return $("//*[@id=\"shippingLocationFormArea\"]/div[3]/div/div[1]/div/div/div[1]");
    }

    get cityName (){
        return $("//div[contains(text(),'İSTANBUL')]");
    }

    get townSelector (){
        return $("//*[@id='shippingLocationFormArea']/div[3]/div/div[2]/div/div/div[1]/div");
    }

    get townName (){
        return $("//div[contains(text(), 'ESENYURT')]");
    }

    get districtSelector(){
        return $("//*[@id='shippingLocationFormArea']/div[3]/div/div[3]/div/div/div");
    }

    get districtName(){
        return $("//*[@id=\"shippingLocationFormArea\"]/div[3]/div/div[3]/div/div/div[2]/div[29]");
    }

    get locationSaveButton(){
        return $("//button[contains(text(),'Kaydet')]");
    }

    get electronicCategory(){
        return $("//span[contains(text(),'Elektronik')]");
    }

    get computerCategory(){
        return $("//a[contains(text(),'Bilgisayar/Tablet')]");
    }

    get firstComputer(){
        return $("//h3[contains(text(),'Lenovo V14 ITL Gen2 Intel Core i5 1135G7 8GB 512GB')]");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async maximizeWindow (){
        browser.maximizeWindow();
    }

    async takeScreenShot (){
        browser.saveScreenshot(this.PATH+this.date+".png");
    }

    async switchWindow () {
        browser.getWindowHandles();
    }

    async clickLocationButton (){
        await this.locationButton.waitForExist({timeout:5000});
        await this.locationButton.click();
    }

    async clickCitySelector (){
        await this.citySelector.waitForExist({timeout:5000});
        await this.citySelector.click();
    }

    async clickCityName (){
        await this.cityName.waitForExist({timeout:5000});
        await this.cityName.click();
    }

    async clickTownSelector (){
        await this.townSelector.waitForExist({timeout:5000});
        await this.townSelector.click();
    }

    async clickTownName (){
        await this.townName.waitForExist({timeout:5000});
        await this.townName.click();
    }

    async clickDistrictSelector (){
        await this.districtSelector.waitForExist({timeout:5000});
        await this.districtSelector.click();
    }

    async clickDistrictName (){
        await this.districtName.waitForExist({timeout:5000});
        await this.districtName.click();
    }

    async clickLocationSaveButton (){
        await this.locationSaveButton.waitForExist({timeout:5000});
        await this.locationSaveButton.click();
    }

    async clickElectronicCategory(){
        await this.electronicCategory.waitForExist({timeout:5000});
        await this.electronicCategory.click();
    }

    async clickComputerCategory(){
        await this.computerCategory.waitForExist({timeout:5000});
        await this.computerCategory.click();
    }

    async clickFirstComputer(){
        await this.firstComputer.waitForExist({timeout:5000});
        await this.firstComputer.click();
    }

    async login () {
        await this.maximizeWindow();
        await this.clickLocationButton();
        await this.clickCitySelector();
        await this.clickCityName();
        await this.clickTownSelector();
        await this.clickTownName();
        await this.clickDistrictSelector();
        await this.clickDistrictName();
        await this.clickLocationSaveButton();
        await this.clickElectronicCategory();
        await this.clickComputerCategory();
        await this.clickFirstComputer();
        await browser.pause(5000);
        await this.switchWindow();
        await browser.pause(5000);
        await this.takeScreenShot();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
