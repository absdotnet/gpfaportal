export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'GPFA Portal';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'GPFA Portal for Brokers';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
  export const LATEST_PRODUCTION_LIMIT = Number(process.env.LATEST_PRODUCTION_LIMIT) || 10;