import { Router } from "express";
import * as authController from '../modules/auth/auth.controller'

const router = Router()

router.post("/login",authController.Login)


module.exports = router