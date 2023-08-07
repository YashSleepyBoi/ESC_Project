// // npx jest to run test case

// const { Builder } = require('selenium-webdriver');
// // const chrome = require('selenium-webdriver/chrome');
// // import { By, Key, Builder } from "selenium-webdriver";
// const chromedriver = require('chromedriver')
// // import { Login } from "@mui/icons-material";
// // import '@testing-library/jest-dom';

// // Create a new Chrome browser instance
// const driver = new Builder().forBrowser('chrome').build();

// // Example: Open a webpage
// async function openWebpage(url) {
//     await driver.get(url);
// }

// // Close the browser when done
// async function closeBrowser() {
//     await driver.quit();
// }

// describe('Website Traffic Tests', () => {
//     beforeAll(async () => {
//         // Open the webpage before running tests
//         await openWebpage('http://localhost:5173/');
//     });

//     afterAll(async () => {
//         // Close the browser after tests are done
//         await closeBrowser();
//     });

//     test('Test Page Title', async () => {
//         // Example: Check if the page title matches
//         const pageTitle = await driver.getTitle();
//         expect(pageTitle).toBe('Travel better.');
//     });

//     test('Test Clicking a Link', async () => {
//         // Example: Click a link and assert the resulting URL
//         const linkElement = await driver.findText(Login);
//         await linkElement.click();

//         const currentUrl = await driver.getCurrentUrl();
//         expect(currentUrl).toBe('http://localhost:5173/login');
//     });


//     // var register_target = "http://localhost:5173/register"; // Corrected URL for register

//     // test('Test Form Submission', async () => {
//     //     await driver.get(register_target)
//     //     // Example: Fill out a form and submit it, then verify a success message
//     //     const nameInput = await driver.findElement(/* Locator for name input */);
//     //     await nameInput.sendKeys('John Doe');

//     //     const emailInput = await driver.findElement(/* Locator for email input */);
//     //     await emailInput.sendKeys('johndoe@example.com');

//     //     const submitButton = await driver.findElement(/* Locator for submit button */);
//     //     await submitButton.click();

//     //     const successMessage = await driver.findElement(/* Locator for success message */);
//     //     const messageText = await successMessage.getText();
//     //     expect(messageText).toContain('Form submitted successfully');
//     // });

//     test('Test Page Load Time', async () => {
//         // Example: Measure and assert the page load time
//         const startTime = Date.now();
//         await openWebpage('http://localhost:5173/login');
//         const endTime = Date.now();

//         const loadTime = endTime - startTime;
//         expect(loadTime).toBeLessThan(3000); // Expected load time in milliseconds
//     });

// });

const { Builder, By, until } = require('selenium-webdriver');
const chromedriver = require('chromedriver');

const driver = new Builder().forBrowser('chrome').build();

async function openWebpage(url) {
    await driver.get(url);
}

async function closeBrowser() {
    await driver.quit();
}

describe('Website Traffic Tests', () => {
    beforeAll(async () => {
        await openWebpage('http://localhost:5173/');
    });

    afterAll(async () => {
        await closeBrowser();
    });

    test('Test Page Title', async () => {
        const pageTitle = await driver.getTitle();
        expect(pageTitle).toBe('Ascenda - Hotel Booking Platform');
    });

    test('Test Clicking a Link', async () => {
        const linkText = 'Login';
        console.log('Locating element...');
        await driver.wait(until.elementLocated(By.linkText(linkText)));
        console.log('Element located.');
        const linkElement = await driver.findElement(By.linkText(linkText));
        console.log('Clicking element...');
        await linkElement.click();
    
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe("http://localhost:5173/login");
    });
    

    test('Test Page Load Time', async () => {
        const startTime = Date.now();
        await openWebpage('http://localhost:5173/login');
        const endTime = Date.now();

        const loadTime = endTime - startTime;
        expect(loadTime).toBeLessThan(3000); // Expected load time in milliseconds
    });
});
