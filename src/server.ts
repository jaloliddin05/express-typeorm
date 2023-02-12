import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import * as cookieParser from "cookie-parser";

import { TypeOrmDataSource } from "./config";
import { VerifyToken, VerifyRole } from "./modules/auth/middleware";
import { unless } from "./infra/helper";
import { IGNORE } from "./infra/constanta";

const app: express.Application = express();


TypeOrmDataSource.initialize().then(() => {
  //...
  const { userRouter, authRouter, postRouter } = require("./router");
  //...
  app.use(express.json());
  app.use(cookieParser());
  app.use(unless(VerifyToken, IGNORE.VERIFY_TOKEN));
  app.use(unless(VerifyRole, IGNORE.VERIFY_ROLE));
  app.use(userRouter, authRouter, postRouter);
  //...
  console.log("Database initialized successfully!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
