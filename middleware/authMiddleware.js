const jwt = require("jsonwebtoken")
require('dotenv').config()

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const authMiddleware = (req)=>{
    // console.log(req?.headers?.cookie);
    
    const token = req?.headers?.cookie?.split("=")[1];
    // console.log(token," tokern");
    
    if(!token){
        throw new Error("Not authorized")
    }

    try{
        const decodeToken = jwt.verify(token, SECRET_KEY);
        return decodeToken;
    }
    catch(err){
        throw new Error("invalid or expired");
    }

};

module.exports = authMiddleware;