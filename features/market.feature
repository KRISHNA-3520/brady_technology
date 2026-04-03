Feature: Scrape Market Data

  Scenario: Extract market data and save to CSV
    Given I navigate to EPEX market results page
     When I scrape the first 4 columns
     Then I save the data into CSV file