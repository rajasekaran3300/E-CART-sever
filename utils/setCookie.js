const setCookie = (token, res)=>{
    
    res.cookie("jwt",token,{
        httpOnly:true,
        maxAge:24*3*60*60*1000
    })

}

module.exports = setCookie