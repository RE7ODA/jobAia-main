const jwt = require("jsonwebtoken");
const requireAuth = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({message : "Token not found"});
    }
    try {
        jwt.verify(token, "secret") 
        next();
    }catch (err) {
        return res.status(401).json({status : httpStatusText.ERROR , message : "Invalid Token"})
    }
};

module.exports = requireAuth ;