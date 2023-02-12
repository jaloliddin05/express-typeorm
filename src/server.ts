import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import { TypeOrmDataSource } from "./config";

const app: express.Application = express();

TypeOrmDataSource.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });

  console.log("Database initialized successfully!");
});
