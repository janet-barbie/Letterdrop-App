import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config();

console.log("DATABASE_URL:", process.env.DATABASE_URL);

export default defineConfig({
  schema: "./db/schema.ts",         
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});