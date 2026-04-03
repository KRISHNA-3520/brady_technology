// Import Playwright browser types and chromium engine
import { chromium, Browser, Page } from 'playwright';

// Declare global variables for browser and page
// These will be reused across test steps (shared context)
export let browser: Browser;
export let page: Page;

// Setup function - responsible for launching browser and creating page
export const setup = async () => {

  // Launch Chromium browser instance
  browser = await chromium.launch({

    // Run browser in headed mode (UI visible)
    // Useful for debugging and helps bypass bot detection mechanisms
    headless: false,

    // Disable automation detection flag used by websites (like Cloudflare)
    // Helps avoid "Let's confirm you are human" page
    args: ['--disable-blink-features=AutomationControlled']
  });

  // Create a new browser context (isolated session like incognito)
  // Prevents sharing cookies/cache between tests
  const context = await browser.newContext();

  // Open a new page (tab) inside the browser context
  // This is where all UI interactions will happen
  page = await context.newPage();
};

// Teardown function - responsible for cleanup after test execution
export const teardown = async () => {

  // Close the browser completely
  // Important to release resources and avoid memory leaks
  await browser.close();
};