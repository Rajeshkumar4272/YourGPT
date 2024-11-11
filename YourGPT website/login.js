const {Builder,By,untill} =require('selenium-webdriver');
require('chromedriver');

(async function login_Page() {
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('https://app.yourgpt.ai/login');
        

    }
    catch(error){
        await driver.sleep(4000);
        console.log(error);
    }

})()