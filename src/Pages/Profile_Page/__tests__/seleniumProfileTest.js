import { By, Key, Builder } from "selenium-webdriver";
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
    var login_target = "http://localhost:5173/login";
    var register_target = "http://localhost:5173/register"; // Corrected URL for register
    var profile_target = "http://localhost:5173/profile"; // Corrected URL for profile
    var editProfTarget = "http://localhost:5173/editprofile"
    let driver;

    const password = "password123";
    const name1 = "seleniumTest";
    const email1 = "seleniumTest@gmail.com";

    const newPassword = "123456";
    const name2 = "seleniumTest2";
    const email2 = "seleniumTest2@gmail.com"

    beforeAll(async () => {
        // Set up the driver before running all
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().fullscreen();
        
    });

    afterAll(async () => {
        //Tear down
        await driver.quit();

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
        console.log("button has been clicked");
        await sleep(3000);
        
    });

    test("should move to the profile page and check name and email", async () => {
        // Move to profile page
        await driver.get(profile_target);
        
        await sleep(5000); // Give time for the page to load
        const nameTest1 = await driver.findElement(By.id("name")).getText();
        const emailTest1 = await driver.findElement(By.id("email")).getText();
        console.log(nameTest1);
        console.log(emailTest1);

        expect(nameTest1).toBe(name1);
        expect(emailTest1).toBe(email1);
    });


    test("move to the editprofile page and change the account details", async() =>{
        await sleep(2000);
        await driver.get(editProfTarget);
        

        await driver.findElement(By.id("nameIn")).sendKeys(name2);
        await sleep(500);
        await driver.findElement(By.id("emailIn")).sendKeys(email2);
        await sleep(500);
        await driver.findElement(By.id("oldPwdIn")).sendKeys(password);
        await sleep(500);

  
        await driver.findElement(By.id("saveBtn")).click();
        await sleep(2000);
    })

    // Selenium doesnt let us change password 

    // test("Should change the password", async()=>{
        
    //     await sleep(2000);
    //     await driver.get(editProfTarget);

    //     await driver.findElement(By.id("oldPwdIn")).sendKeys(password);
    //     await sleep(500);
    //     await driver.findElement(By.id("newPwdIn")).sendKeys(newPassword);
    //     await sleep(500);
    //     await driver.findElement(By.id("newPwdInCfm")).sendKeys(newPassword);
    //     await sleep(500);
    //     await driver.findElement(By.id("saveBtn")).click();
    //     await driver.wait();
    // })

    
    test("should move to the profile page again and check new name and email", async () => {
        // Move to profile page again
        await sleep(2000);
        await driver.get(profile_target);
        
        await sleep(3000); // Give time for the page to load
        const nameTest2 = await driver.findElement(By.id("name")).getText();
        const emailTest2 = await driver.findElement(By.id("email")).getText();
        console.log(nameTest2);
        console.log(emailTest2);

        expect(nameTest2).toBe(name2);
        expect(emailTest2).toBe(email2);
    });

    test("Delete the account", async ()=>{
        //move to edit profile and delete the account
        await driver.get(editProfTarget);
        await sleep(2000);
        
        await driver.findElement(By.id("oldPwdIn")).sendKeys(password);
        await driver.findElement(By.id("deleteBtn")).click();
        sleep(2000);
        await driver.switchTo().alert().accept();
        sleep(10000);
    })

});
