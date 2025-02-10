const isValidToken = (req,res,next)=>{
    if(req.query.token=="" || req.query.token== undefined){
      return res.send({
        status:0,
        message:"you have to pass the token"
      })
    }
    if(req.query.token != process.env.MyToken){
      return res.send({
        status:1,
        message: "you have to pass original token to the query"
      })
    }
    next();
  }
module.exports ={isValidToken}