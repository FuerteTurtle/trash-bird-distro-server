import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/quotes", async (req: Request, res: Response) => {
  const quotes = await prisma.quote.findMany();
  res.json(quotes);
});

app.post("/quotes", async (req: Request, res: Response) => {});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
