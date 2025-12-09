import pkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const { PrismaClient } = pkg;

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg(pg, {
  connectionString,
});

const prisma = new PrismaClient({ adapter });

export default prisma;
