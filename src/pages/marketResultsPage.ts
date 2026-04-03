// Import Playwright Page type for strong typing
import { Page } from 'playwright';

// Page Object Model class for EPEX Market Results page
export class MarketResultsPage {

  // Constructor receives Playwright page instance
  // This allows all methods in this class to interact with the browser page
  constructor(private page: Page) {}

  // Method to navigate to a given URL
  async navigate(url: string) {

    // Navigate to the provided URL
    // 'domcontentloaded' ensures HTML is loaded (faster than full load)
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  
    // Wait until all network requests (API calls, AJAX) are completed
    await this.page.waitForLoadState('networkidle');
  }

  // Method to scrape table data and return structured result
  async scrapeTableData(): Promise<any[]> {
    try {

      // Wait for actual data rows to appear in the table
      // 'lvl-1 active' ensures we only capture valid rows (skip '-' rows)
      // Timeout increased to 60s due to slow API/data loading
      await this.page.waitForSelector('tbody tr.lvl-1.active', {
        timeout: 60000
      });
  
      // $$eval runs inside browser context
      // Select all valid rows and extract required data
      const data = await this.page.$$eval(
        'tbody tr.lvl-1.active',

        // This function runs in the browser (not Node.js)
        (rows) => {

          // Map each row into a structured object
          return rows.map(row => {

            // Get all cells (columns) in the current row
            const cells = row.querySelectorAll('td');
  
            // Extract required columns based on index
            // Index mapping based on table structure:
            // 0 → Low, 1 → High, 2 → Last, 3 → Weighted Avg
            const low = cells[0]?.textContent?.trim();
            const high = cells[1]?.textContent?.trim();
            const last = cells[2]?.textContent?.trim();
            const weightedAvg = cells[3]?.textContent?.trim();
  
            // Return structured data object
            return { low, high, last, weightedAvg };
          });
        }
      );
  
      // Validate if data was extracted
      // Fail fast if no valid rows found (prevents silent failures)
      if (!data.length) {
        throw new Error("No valid data rows found");
      }
  
      // Return extracted data to calling function
      return data;
  
    } catch (error) {

      // Log error for debugging purposes
      console.error("Error scraping table:", error);

      // Re-throw error so test fails properly
      throw error;
    }
  }
}