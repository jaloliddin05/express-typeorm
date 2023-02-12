import { Router } from "express";
import * as postController from "../modules/post/post.controller";

const router = Router();

router
  .get("/post", postController.getAll)
  .get("/post/:id", postController.getById)
  .post("/post", postController.create)
  .put("/post/:id", postController.update)
  .delete("/post/:id", postController.deleteData);

module.exports = router;
