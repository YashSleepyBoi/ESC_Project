import { By, Key, Builder } from "selenium-webdriver";
import "chromedriver";
import '@testing-library/jest-dom';
import useAuth from "../useAuth";

// Before running the test, make sure the app is running

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


describe("selenium Tests", () => {
    // Change the localhost to the correct address before testing
    var login_target = "http://localhost:5173/login";
    var register_target = "http://localhost:5173/register"; // Corrected URL for register
    var profile_target = "http://localhost:5173/profile"; // Corrected URL for profile
    let driver;

    const password = "password123";
    const name1 = "seleniumTest";
    const email1 = "seleniumTest@gmail.com";

    beforeAll(async () => {
        // Set up the driver before running all
        driver = await new Builder().forBrowser("chrome").build();
        jest.setTimeout(30000);
    });

    afterAll(async () => {
        //Tear down and delete the test accounts after
        await driver.quit();
        const user = useAuth();
        await db.collection('Users').doc(user.uid).delete();
        await user.delete();
    });

    test("should create an account", async () => {
        await driver.get(register_target);
        // Create an account called SeleniumTest
        await driver.findElement(By.id("name")).sendKeys(name1);
        await driver.findElement(By.id("email")).sendKeys(email1);
        await driver.findElement(By.id("password")).sendKeys(password);
        await driver.findElement(By.id("confirmPassword")).sendKeys(password);
        await driver.findElement(By.className("RegisterBtn")).click();
        await sleep(2000);
    });


    test("should login to the account", async () => {
        //Login to the account
        await driver.get(login_target);
        await driver.findElement(By.id("email")).sendKeys(email1);
        await driver.findElement(By.id("password")).sendKeys(password);
        await driver.findElement(By.className("LoginBtn")).click();
        await sleep(2000);
        
    });

    test("should move to the profile page and check name and email", async () => {
        // Move to profile page
        await driver.get(profile_target);
        
        await sleep(3000); // Give time for the page to load
        const nameTest1 = await driver.findElement(By.id("name")).getText();
        const emailTest1 = await driver.findElement(By.id("email")).getText();
        console.log(nameTest1);
        console.log(emailTest1);

        expect(nameTest1).toBe(name1);
        expect(emailTest1).toBe(email1);
    });

});
