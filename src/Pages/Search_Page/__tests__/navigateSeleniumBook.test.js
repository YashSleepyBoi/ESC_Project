import { By, Key, Builder } from "selenium-webdriver";
import "chromedriver";
import '@testing-library/jest-dom';

// Give more time to load the websites by allowing jest more timeout
jest.setTimeout(50000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe("selenium SearchBar Tests", () => {

    const homepage = "http://localhost:5174/";
    const destination = "Singapore";
    let driver;



    beforeAll(async () => {
        // Set up the driver before running all
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        
        //switch to the window
        let allWindows = await driver.getAllWindowHandles();
        await driver.switchTo().window(allWindows[0]);
        
    });

    afterAll(async () => {
        //Tear down 
        await sleep(10000);
        await driver.quit();

    });

    test("Should navigate to the search results", async()=>{
        await driver.get(homepage)
        await driver.findElement(By.className("dest-input")).sendKeys("Singapore");
        await sleep(2000);
        await driver.findElement(By.xpath('//*[@id="navbar"]/div[2]/div/div[6]/div/div[2]/div[1]')).click();
        await sleep(2000);
        //Click twice to be safe
        await driver.findElement(By.xpath('//*[@id="navbar"]/div[2]/div/div[11]/a/button')).click();
        await sleep(500);
        await driver.findElement(By.xpath('//*[@id="navbar"]/div[2]/div/div[11]/a/button')).click();
        await sleep(2000);
        // Find the button with M hotel
        let bookNowButton = await driver.findElement(By.xpath("//*[contains(@class, 'hotel-title') and contains(text(), 'M Hotel')]/ancestor::div[contains(@class, 'hotel-container')]//button[contains(@class, 'book-button')]"));
        await bookNowButton.click();
        await sleep(8000);


        async function scrollDown() {
            return driver.executeScript('window.scrollBy(0, 100)');
        }

        for(let i = 0; i < 10; i++) {
            await new Promise(resolve => setTimeout(resolve, 200));
            await scrollDown();
        }
    })

})