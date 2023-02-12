import { Request,Response,NextFunction } from "express";

const unless = function(middleware, paths) {
return function(req:Request, res:Response, next:NextFunction) {
    const pathCheck = paths.some(path => path === req.path);
    if(middleware.name == "VerifyRole"){
      return pathCheck || req.method == "GET" ? next() : middleware(req,res,next);
    }else{
      return pathCheck ? next() : middleware(req,res,next);
    }
  };
};

export default unless