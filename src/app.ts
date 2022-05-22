import "dotenv/config";
import express from "express";
import "express-async-errors";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Data source was initialized");
  })
  .catch((error) => {
    console.log("Error occurred during data source initialization", error);
  });

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server Running on port ", PORT);
});