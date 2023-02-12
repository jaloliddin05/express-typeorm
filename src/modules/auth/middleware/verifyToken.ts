import * as jwt from "jsonwebtoken";
import { Request,Response,NextFunction } from "express";

function VerifyToken(req, res:Response, next:NextFunction) {
    
  const { access_token } = req.cookies;

  if (!access_token) {    
    return res.status(401).send("Unauthorized")
  }

  jwt.verify(access_token, process.env.JWT_KEY, (err, decode) => {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).json("Unauthorized")
    }

    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).send("Unauthorized")
    }
    req.userId = decode.id
    next();
  });
};

export default VerifyToken;