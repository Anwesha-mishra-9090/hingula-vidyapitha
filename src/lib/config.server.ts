import process from "node:process";

// Server-only config. The .server.ts suffix prevents Vite from bundling
// this file into the client — values here never reach the browser.

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === "production",
    isDevelopment: process.env.NODE_ENV === "development",
    // Add server-only values here, e.g.:
    // databaseUrl: process.env.DATABASE_URL,
    // apiSecret: process.env.API_SECRET,
  };
}
