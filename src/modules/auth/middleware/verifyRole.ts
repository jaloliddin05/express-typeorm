import { Response,NextFunction } from "express";
import { userService } from "../../user";

async function VerifyRole(req, res:Response, next:NextFunction) {
    const id = req.userId
    const user = await userService.getById(id)
    if(user.role != 2){
      return res.status(401).send("Authorization failed")
    }
    next()
};

export default VerifyRole