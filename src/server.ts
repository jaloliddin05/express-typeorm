import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";

import { TypeOrmDataSource } from "./config";
import { VerifyToken, VerifyRole } from "./modules/auth/middleware";
import { unless } from "./infra/helper";
import { IGNORE } from "./infra/constanta";

const app: express.Application = express();

app.use(express.json());

TypeOrmDataSource.initialize().then(() => {
  //...
  const { userRouter, authRouter } = require("./router");
  //...
  app.use(unless(VerifyToken, IGNORE.VERIFY_TOKEN));
  app.use(unless(VerifyRole, IGNORE.VERIFY_ROLE));
  app.use(userRouter, authRouter);
  //...
  console.log("Database initialized successfully!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
