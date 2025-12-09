import pkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pgpkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { PrismaClient } = pkg;   // ✅ FIXED IMPORT
const { Pool } = pgpkg;

// Connect to PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // 🔥 Required for Render PostgreSQL
});

// Create Prisma adapter
const adapter = new PrismaPg(pool);

// Export Prisma instance
const prisma = new PrismaClient({
  adapter,
});

export default prisma;
