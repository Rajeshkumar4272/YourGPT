const {Builder,By,untill} =require('selenium-webdriver');
require('chromedriver');

(async function login_Page() {
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('https://app.yourgpt.ai/login');
        //Enter email 
        await driver.findElement(By.xpath('//*[@id=":r0:"]')).sendKeys('rohit@yourgpt.ai');
        //Enter password
        await driver.findElement(By.xpath('//*[@id=":r1:"]')).sendKeys('ae3c8ab6354');
        //Enter submit button
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[1]/div/form/button')).click();
        await driver.manage().setTimeouts({implicit: 2000});
        //Access the chatbot 
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div/main/div/div[1]/div[1]/div[2]/a')).click();
    }
    catch(error){
        await driver.sleep(4000);
        console.log(error);
    }

})()

