const {Builder, By, until} = require ('selenium-webdriver');
const { titleIs } = require('selenium-webdriver/lib/until');
require('chromedriver');

(
    async function testYourGpt(){
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            //open the website
            await driver.get('https://yourgpt.ai/');
            // title
             await driver.wait(titleIs('YourGPT - Next-Gen AI and GPT Suite for Your Needs'),2000);
            //Scroll top to bottom
            await driver.executeScript('window.scroll(0, document.body.scrollHeight);');
            await driver.sleep(2000);
            
            //Scroll bottom to up
            await driver.executeScript('window.scroll(document.body.scrollBottom,0);');
            await driver.sleep(2000);
            //Click the Get start button
            await driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div[3]/div/div/a[1]')).click();
            
            // form filling 
            await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[1]/div/div[1]/p/a')).click();
            



        } catch (error) {
            console.log(error)
        }
        finally{
            await driver.sleep(2000)
            await driver.quit();
        }

    }

)()