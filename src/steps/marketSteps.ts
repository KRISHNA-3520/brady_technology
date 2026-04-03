import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { setup, teardown, page } from '../fixtures/testFixture';
import { MarketResultsPage } from '../pages/marketResultsPage';
import { getYesterdayDate } from '../utils/dateUtil';
import { writeToCSV } from '../utils/csvUtil';
import { config } from '../utils/config';

// Declare page object instance
let marketPage: MarketResultsPage;

// Store scraped data across steps
let scrapedData: any[];

// Before hook → runs before each scenario
Before(async () => {
  await setup();
  marketPage = new MarketResultsPage(page);
});

// After hook → runs after each scenario
After(async () => {
  await teardown();
});

// Step: Navigate to EPEX Market Results page
Given('I navigate to EPEX market results page', async () => {
  const date = getYesterdayDate();

  const url = `${config.baseUrl}?market_area=${config.marketArea}&delivery_date=${date}&modality=${config.modality}&data_mode=${config.dataMode}&product=${config.product}`;
  
  await marketPage.navigate(url);
});

// Step: Scrape required table data
When('I scrape the first 4 columns', async () => {
  scrapedData = await marketPage.scrapeTableData();

  if (!scrapedData || scrapedData.length === 0) {
    throw new Error("No data scraped from table");
  }
});

// Step: Save extracted data into CSV
Then('I save the data into CSV file', async () => {
  await writeToCSV(scrapedData);
});