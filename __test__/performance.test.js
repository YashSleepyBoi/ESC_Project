
const { Builder, By, until } = require('selenium-webdriver');
const chromedriver = require('chromedriver');

const driver = new Builder().forBrowser('chrome').build();

async function openWebpage(url) {
    await driver.get(url);
}

async function closeBrowser() {
    await driver.quit();
}

describe('Performance Testing', () => {
    beforeAll(async () => {
        await openWebpage('http://localhost:5173/');
    });

    afterAll(async () => {
        await closeBrowser();
    });

// ==============================================================

    test('Baseline Response Time', async () => {
        const startTime = Date.now();
        await driver.get('http://localhost:5173/register');
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        expect(responseTime).toBeLessThan(3000); // Expected response time in milliseconds
    });


// ==============================================================

    test('Concurrent Users Load Test', async () => {
        // Simulate concurrent users accessing pages
        // Implement your test logic here
        const numUsers = 10; // Number of concurrent users

        // Create an array of promises for concurrent user actions
        const userPromises = Array.from({ length: numUsers }, () => simulateUserAction());

        // Execute user actions concurrently
        await Promise.all(userPromises);
    });

// ==============================================================

    test('Peak Load Test', async () => {
        // Simulate peak load conditions
        // Implement your test logic here
        const peakUsers = 10; // Number of concurrent users during peak load

        // Create an array of promises for concurrent user actions
        const userPromises = Array.from({ length: peakUsers }, () => simulateUserAction());

        // Execute user actions concurrently
        await Promise.all(userPromises);
    },10000); // Set a timeout of 10 seconds

// ==============================================================

    test('Stress Test', async () => {
        // Simulate stress conditions
        // Implement your test logic here
        const numUsers = 10; // Number of concurrent users for stress test

        // Create an array of promises for concurrent user actions
        const userPromises = Array.from({ length: numUsers }, () => simulateUserAction());

        // Execute user actions concurrently
        await Promise.all(userPromises);
    }, 10000); // Set a timeout of 10 seconds

// ==============================================================

    test('Page Load Time', async () => {
        // Measure page load time under different user loads
        // Implement your test logic here
        const urlsToTest = [
            'http://localhost:5173/login',
            'http://localhost:5173/register',
            'http://localhost:5173/findreserve',
            // Add more URLs to test
        ];

        const userLoad = 5; // Number of concurrent users

        for (const url of urlsToTest) {
            await testPageLoadTime(url, userLoad);
        }
    },10000); // Set a timeout of 10 seconds

    async function testPageLoadTime(url, userLoad) {
        // Simulate concurrent users accessing the specified URL
        const userPromises = Array.from({ length: userLoad }, () => simulateUserAction(url));

        // Start a timer to measure page load time
        const startTime = Date.now();

        // Execute user actions concurrently
        await Promise.all(userPromises);

        // Calculate page load time
        const endTime = Date.now();
        const pageLoadTime = endTime - startTime;

        console.log(`Page: ${url}, Users: ${userLoad}, Load Time: ${pageLoadTime} ms`);

        // You can include assertions or logging based on your requirements
    };

// ==============================================================

//     test('Transaction Throughput', async () => {
//         // Simulate transaction throughput
//         // Implement your test logic here
//         const transactionType = 'submitForm'; // Replace with your transaction type
//         const transactionsToExecute = 100; // Number of transactions to execute
//         const timePeriodInSeconds = 60; // Time period for testing in seconds

//         const userLoad = 10; // Number of concurrent users

//         const startTime = Date.now();

//         // Simulate concurrent users executing transactions
//         const userPromises = Array.from({ length: userLoad }, () => simulateUserAction(transactionType, transactionsToExecute / userLoad));

//         await Promise.all(userPromises);

//         const endTime = Date.now();
//         const elapsedTimeInSeconds = (endTime - startTime) / 1000;

//         const transactionThroughput = transactionsToExecute / elapsedTimeInSeconds;

//         console.log(`Transaction Throughput: ${transactionThroughput.toFixed(2)} transactions/sec`);

//     });

//     async function simulateUserAction(transactionType, transactionsPerUser) {
//         // Implement user actions to perform transactions
//         for (let i = 0; i < transactionsPerUser; i++) {
//             await executeTransaction(transactionType);
//         }
//     }

//     async function executeTransaction(transactionType) {
//         // Implement the specific transaction based on the transaction type
//         // For example, fill out a form and submit it, make a purchase, etc.
//         // You can use driver.findElement, driver.click, and other WebDriver methods

//         // Ensure that the test logic properly waits for elements to load and respond
//         // For example:
//         await driver.wait(until.elementLocated(By.id('some-element-id')));

//         // Implement additional assertions or measurements as needed
//     }
// });

// ==============================================================

    // test('Scalability Test', async () => {
    //     // Test application scalability
    //     // Implement your test logic here
    //     const initialServers = 1; // Initial number of servers
    //     const maxServers = 10; // Maximum number of servers to test
    //     const userLoad = 5;
    //     const testScalabilityMock = jest.fn(testScalability);

    //     for (let numServers = initialServers; numServers <= maxServers; numServers++) {
    //         await testScalabilityMock(numServers, userLoad);
    //     };
    //     expect(testScalabilityMock).toHaveBeenCalledTimes(maxServers - initialServers + 1);

    // },10000); // Set a timeout of 10 seconds
    // async function testScalability(numServers) {
    //     // Set up the environment with the specified number of servers
    //     // For example, deploy additional servers, configure load balancers, etc.

    //     const userLoad = 5; // Number of concurrent users

    //     const startTime = Date.now();

    //     // Simulate concurrent users accessing the application
    //     const userPromises = await Array.from({ length: userLoad }, () => simulateUserAction());

    //     await Promise.all(userPromises);

    //     const endTime = Date.now();
    //     const elapsedTimeInSeconds = (endTime - startTime) / 1000;

    //     console.log(`Number of Servers: ${numServers}, Elapsed Time: ${elapsedTimeInSeconds} sec`);

    //     // You can include assertions or logging based on your requirements
    // };

    // ==============================================================

    // test('Database Performance', async () => {
    //     // Evaluate database performance
    //     // Implement your test logic here
        
    // });
 // ==============================================================
    test('User Load Distribution', async () => {
        // Test user load distribution across pages
        // Implement your test logic here
        const numUsers = 10; // Total number of users
        const numServers = 5; // Number of servers or components to distribute load

        // Create an array of promises for user actions
        const userPromises = Array.from({ length: numUsers }, () => simulateUserAction(numServers));

        // Execute user actions concurrently
        await Promise.all(userPromises);

        // Perform load distribution analysis based on your requirements
        // For example, analyze server logs or performance metrics
    },10000); // Set a timeout of 10 seconds
    async function simulateUserAction(numServers) {
        // Calculate the server index for distributing user load
        const serverIndex = Math.floor(Math.random() * numServers);

        // Implement user actions, such as interacting with the application
        await driver.get('http://localhost:5173/login');
        // Perform interactions...

        // Ensure that the test logic properly waits for elements to load and respond
        // For example:
        await driver.wait(until.elementLocated(By.id('email')));

        // Implement additional assertions or measurements as needed
        console.log(`User on Server ${serverIndex}`);
    }
 // ==============================================================
    // test('Real-World Scenarios', async () => {
    //     // Simulate real-world scenarios
    //     // Implement your test logic here
    // });

    async function simulateUserAction() {
        // Implement user actions, such as navigating pages, submitting forms, etc.
        await driver.get('http://localhost:5173/login');
        // Perform other actions...

        // Ensure that the test logic properly waits for elements to load
        // For example:
        await driver.wait(until.elementLocated(By.id('email')));
    };

});














// import { By, Key, Builder } from "selenium-webdriver";
// import "chromedriver";
// import '@testing-library/jest-dom';
// import { assertPointerEvents } from "@testing-library/user-event/dist/types/utils";

// // Before running the test, make sure the app is running

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// // Give more time to load the websites by allowing jest more timeout
// jest.setTimeout(50000);

// // ==============================================================================
// describe("fuzzing", () => {
//     // Change the localhost to the correct address before testing
//     var home_target = "http://localhost:5173/"; // Corrected URL for home
//     var register_target = "http://localhost:5173/register"; // Corrected URL for register
//     var login_target = "http://localhost:5173/login"; // Corrected URL for login
//     var results_target = "http://localhost:5173/results" // Corrected URL for results
//     let driver;

//     beforeAll(async () => {
//         // Set up the driver before running all
//         driver = await new Builder().forBrowser("chrome").build();
//         await driver.manage().window().fullscreen();
//     });

//     afterAll(async () => {

//     });

//     // ==============================================================================

//     it("should return  page", async() => {
//         await driver.get(results_target);
//         expect((await (driver).getTitle()).includes('Results')).toBe(true);
//     });

//     it("should return home page", async() => {
//         await driver.get(results_target);
//         expect((await (driver).getTitle()).includes('Home')).toBe(true);
//     })

// })
