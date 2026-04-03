import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs';

export const writeToCSV = async (data: any[]) => {
  const csvWriter = createObjectCsvWriter({
    path: 'reports/market-data.csv',
    header: [
      { id: 'low', title: 'Low' },
      { id: 'high', title: 'High' },
      { id: 'last', title: 'Last' },
      { id: 'weightedAvg', title: 'Weighted Avg' }
    ]
  });

  await csvWriter.writeRecords(data);
};

// Ensure reports folder exists
if (!fs.existsSync('reports')) {
  fs.mkdirSync('reports');
}