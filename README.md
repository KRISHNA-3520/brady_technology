🚀 Overview

This project automates the following workflow:
	1.	Navigate to EPEX SPOT Market Results
	2.	Scrape the first 4 columns:
	•	Low
	•	High
	•	Last
	•	Weighted Avg.
	3.	Export the extracted data into a CSV file

  🧠 Key Features
	•	✅ Playwright (UI Automation)
	•	✅ Cucumber BDD (Readable tests)
	•	✅ TypeScript (Strong typing)
	•	✅ Page Object Model (Maintainable)
	•	✅ Fixtures & Hooks (Reusable setup)
	•	✅ Environment Config (.env)
	•	✅ CSV Export
	•	✅ HTML Report
	•	✅ Handles dynamic data loading
	•	✅ Handles yesterday date automatically

  📁 Project Structure
 
  project-root/
│
├── src/
│   ├── pages/
│   │   └── marketResultsPage.ts
│   │
│   ├── utils/
│   │   ├── csvUtil.ts
│   │   ├── dateUtil.ts
│   │   └── config.ts
│   │
│   ├── fixtures/
│   │   └── testFixture.ts
│   │
│   └── steps/
│       └── marketSteps.ts
│
├── features/
│   └── market.feature
│
├── reports/
├── cucumber.js
├── report.js
├── tsconfig.json
├── package.json
├── .env

⚙️ Prerequisites
	•	Node.js ≥ 16
	•	npm ≥ 8

📦 Installation
1. Clone repository
git clone <repo-url>

2. Install dependencies
npm install

3. Install Playwright browsers
npx playwright install

🔐 Environment Configuration

Create .env file in root:
BASE_URL=https://www.epexspot.com/en/market-results

▶️ Running Tests
✅ Default (headed mode for debugging)
npm run test

✅ Optional: Headless mode
HEADLESS=true npm run test

📊 Output

📄 CSV File
	•	Path: reports/market-data.csv
	•	Contains:
	•	Low
	•	High
	•	Last
	•	Weighted Avg.


📊 HTML Report

Generate after test run: npm run report
	•	Path: reports/cucumber-report.html
  
📊 CSV Report

CSV file report will be automatically get generated where all 4 columns with data will be present
	•	Path: reports/market-data.csv

🔍 Test Scenario
Feature: Scrape Market Data

  Scenario: Extract market data and save to CSV
    Given I navigate to EPEX market results page
    When I scrape the first 4 columns
    Then I save the data into CSV file

🧠 How It Works

🔹 Dynamic Date Handling
	•	Automatically uses yesterday’s date
	•	Format: YYYY-MM-DD
	•	Prevents empty data issues

🔹 URL Construction
${BASE_URL}?market_area=GB&delivery_date=YYYY-MM-DD&modality=Continuous&data_mode=table&product=30

🔹 Data Extraction Logic
	•	Targets only valid rows: tbody tr.lvl-1.active
  •	Extracts:
      cells[0] → Low
      cells[1] → High
      cells[2] → Last
      cells[3] → Weighted Avg

⚠️ Known Challenges & Solutions

🚫 Bot Protection (“Let’s confirm you are human”)

Handled via:
	•	Disabled automation flags

⏳ Dynamic Loading Issue

Handled via:
	•	networkidle
	•	Waiting for: tbody tr.lvl-1.active

🧪 Scripts
"scripts": {
  "test": "cucumber-js",
  "report": "node report.js"
}

💡 Best Practices Implemented
	•	✔ Page Object Model
	•	✔ Config-driven approach (.env)
	•	✔ Fail-fast validation
	•	✔ Reusable utilities
	•	✔ Clean separation of concerns


👨‍💻 Author
Krishna Jamadar
Senior QA Engineerß

  

