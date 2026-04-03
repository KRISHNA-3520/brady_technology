// Import dotenv library to load environment variables from .env file
import * as dotenv from 'dotenv';

// Load environment variables into process.env
// This reads values from .env file at runtime
dotenv.config();

// Export a centralized configuration object
// This helps avoid hardcoding values across the framework
export const config = {

  // Base URL of the application under test
  // Falls back to empty string if not defined in .env
  baseUrl: process.env.BASE_URL || '',

  // Market area parameter (default = 'GB' if not provided)
  // Allows flexibility for different regions without code change
  marketArea: process.env.MARKET_AREA || 'GB',

  // Modality type (default = 'Continuous')
  // Useful when testing different trading modalities
  modality: process.env.MODALITY || 'Continuous',

  // Data mode (default = 'table')
  // Ensures correct format is loaded on UI
  dataMode: process.env.DATA_MODE || 'table',

  // Product type (default = '30')
  // Represents specific market product configuration
  product: process.env.PRODUCT || '30'
};