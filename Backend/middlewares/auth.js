const jwt = require("jsonwebtoken");

module.exports = async(req,res,next)=>{
    try{
        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token,"Blitz",(err,decoded)=>{
            if(err) {
                return res.status(401).send({
                    message:"auth failed :v hna yal 7mar",
                    success: false,
                });
            } else {
                req.body.firstName = decoded.firstName;
                req.body.lastName = decoded.lastName;
                next();
            }
        });
    } catch (error) {
        return res.status(401).send({
            message:"auth failed :v v2",
            success: false,
        });
    }
}