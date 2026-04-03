📊 EPEX Market Data Scraper (Playwright + Cucumber BDD)


🚀 Overview

This project automates the following workflow:

	1.	Navigate to EPEX SPOT Market Results
	2.	Scrape the first 4 columns:
	•	Low
	•	High
	•	Last
	•	Weighted Avg.
	3.	Export the extracted data into a CSV file

⸻

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

⸻


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

	git clone https://github.com/KRISHNA-3520/brady_technology.git
	cd brady_technology
	npm init -y
	npx playwright install
	npm install -D @playwright/test
	npm install -D @cucumber/cucumber ts-node typescript
	npm install csv-writer
	npm install dayjs
	npm install -D cucumber-html-reporter
	npm install -D @types/node

🔐 Environment Configuration

	Create a .env file in root:
	BASE_URL=https://www.epexspot.com/en/market-results

▶️ Running Tests

	npm run test

📊 Generate HTML Report

	npm run report

📄 Output

	•	CSV → reports/market-data.csv
	•	HTML Report → reports/cucumber-report.html

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

🔹 URL Construction

	${BASE_URL}?market_area=GB&delivery_date=YYYY-MM-DD&modality=Continuous&data_mode=table&product=30

🔹 Data Extraction Logic
	
	•	Selector: tbody tr.lvl-1.active

	•	Columns extracted:
	•	Low
	•	High
	•	Last
	•	Weighted Avg

⚠️ Known Challenges & Solutions

	🚫 Bot Protection

	Handled via:
	•	Headed mode
	•	Disabled automation flags

⏳ Dynamic Loading

	Handled via:
	•	networkidle
	•	Waiting for table rows

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
	Senior QA Engineer
