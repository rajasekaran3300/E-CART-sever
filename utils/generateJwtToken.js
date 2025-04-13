const jwt = require("jsonwebtoken")

const generateToken=(data)=>{
    const token = jwt.sign({id:data.id , role:data.role } , process.env.JWT_SECRET_KEY,{
        expiresIn:'3d'
    })
    return token
}

module.exports=generateToken