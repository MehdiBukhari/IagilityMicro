import jwt from "jsonwebtoken";
import express from "express";
export class JWTAUTH{
    constructor(){

    }
     // Verify Token
 public async verifyToken(req:express.Request, res:express.Response,next:express.NextFunction) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      let token = bearerToken;
      // Next middleware
      jwt.verify(token, 'secretkey', (err, authData) => {
        if(err) {
          res.status(403).send(err);
         // res.sendStatus(403);
        } else {
          
            req.authData=authData;
            next();
        }
      });
     
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  
  }
}
export default new JWTAUTH()