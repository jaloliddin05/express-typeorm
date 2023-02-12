import { Request,Response } from "express";
import { AuthService } from "./auth.service";
import { userService } from "../user";
const ACCESS_TOKEN = 'access_token';

const authService = new AuthService(userService)

export const Login = async (req:Request, res:Response) => {
    const {email,password} = req.body
    const {user,access_token} = await authService.verifyUser(email, password)
    res.cookie(ACCESS_TOKEN,access_token)
    res.send(user)
};
