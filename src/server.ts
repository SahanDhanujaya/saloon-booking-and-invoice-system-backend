import express = require("express");
import dotenv = require("dotenv");
import cors = require("cors");
import type { Request, Response } from "express";

dotenv.config();

const { connectDB } = require("./config/db");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
};

startServer();