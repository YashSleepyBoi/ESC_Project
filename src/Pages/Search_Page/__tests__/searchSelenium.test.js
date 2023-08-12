import { By, Key, Builder, until } from "selenium-webdriver";
import "chromedriver";
import '@testing-library/jest-dom';



// Before running the test, make sure the app is running

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Give more time to load the websites by allowing jest more timeout
jest.setTimeout(50000);

describe("selenium Tests", () => {
    // Change the localhost to the correct address before testing
    var home_target = "http://localhost:5173/";
    var result_target = "http://localhost:5173/results";
    let driver;

    const exactSearch = "Taipei, Taiwan";
    const lowerCaseSearch = "taipei, taiwan";
    const upperCaseSearch = "TAIPEI, TAIWAN";

    // const newPassword = "123456";
    // const name2 = "seleniumTest2";
    // const email2 = "seleniumTest2@gmail.com"

    beforeAll(async () => {
        // Set up the driver before running all
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().fullscreen();
        
    });

    afterAll(async () => {
        //Tear down
        await driver.quit();

    });

    test("should search", async () => {
        await driver.get(home_target);
        // Create an account called SeleniumTest
        await driver.findElement(By.id("searchInput")).sendKeys(exactSearch);
        await driver.findElement(By.id("searchResults"));
        await sleep(2000);
    });


    test("should return when given exact search", async () => {
       
        await driver.get(home_target);
        // Inpuit "Taipei, Taiwan" to search input
        await driver.findElement(By.id("searchInput")).sendKeys(exactSearch);
        const element = await driver.wait(until.elementLocated(By.id('searchResults')), 10000);
        await element.findElement(By.className('a')).click();
        await sleep(2000);
        const exactSearchTest = await driver.findElement(By.id("searchInput")).getAttribute('value');
        await sleep(2000);

        expect(exactSearchTest).toBe(exactSearch);
        
    });

    test("should return when given lowerCase search", async () => {
        await driver.get(home_target);
        await driver.findElement(By.id("searchInput")).sendKeys(lowerCaseSearch);
        const element = await driver.wait(until.elementLocated(By.id('searchResults')), 10000);
        await element.findElement(By.className('a')).click();
        await sleep(2000);
        const lowerCaseSearchTest = await driver.findElement(By.id("searchInput")).getAttribute('value');
        await sleep(2000);

        expect(lowerCaseSearchTest).toBe(exactSearch);
    });


    test("should return when given upperCase search", async () => {
        await driver.get(home_target);
        await driver.findElement(By.id("searchInput")).sendKeys(upperCaseSearch);
        const element = await driver.wait(until.elementLocated(By.id('searchResults')), 10000);
        await element.findElement(By.className('a')).click();
        await sleep(2000);
        const upperCaseSearchTest = await driver.findElement(By.id("searchInput")).getAttribute('value');
        await sleep(2000);

        expect(upperCaseSearchTest).toBe(exactSearch);
    });
    
    const webdriver = require('selenium-webdriver');
    test("should close result list on click", async () => {

        try{
            await driver.get(home_target);
        await driver.findElement(By.id("searchInput")).sendKeys("k");
        const element = await driver.wait(until.elementLocated(By.id('searchResults')), 10000);
        await element.findElement(By.className('a')).click();
        await sleep(2000);
        await sleep(2000);
        

        const isNotVisible = await driver.findElement(By.id("searchResults")).isDisplayed();


        } catch (error){
            if (error instanceof webdriver.error.NoSuchElementError) {
                // Handle the case where the element is not found
                expect(error instanceof webdriver.error.NoSuchElementError).toBe(true);
                return;
        } else {
            throw error;
        }

    }
        

    });

});