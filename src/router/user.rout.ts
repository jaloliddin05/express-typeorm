import { Router } from "express";
import * as userController from '../modules/user/user.controller'

const router = Router()

router.get('/users',userController.getAll)
.get("/users/:id",userController.getById)
.post("/users",userController.create)
.put("/users/:id",userController.update)
.delete("/users/:id",userController.deleteData)


module.exports = router