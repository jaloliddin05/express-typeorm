import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import { TypeOrmDataSource } from "./config";

const app: express.Application = express();

app.use(express.json());

TypeOrmDataSource.initialize().then(() => {
  const { userRouter } = require("./router");
  app.use(userRouter);
  console.log("Database initialized successfully!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
