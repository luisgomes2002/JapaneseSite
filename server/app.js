import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDatabase from "./src/database/db.js";
import router from "./src/routes/index.js";
export * from "colors";

const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());
app.use(router);

export default app;
