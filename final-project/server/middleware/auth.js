const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const authentecationToken = async (req, res, next) => {

    const token = req.cookies.jwt;
    const jwtKey = process.env.JWT_KEY;
    if (!token) {
        return res.json({"message" : "Unauthorized"});
    }
    try {
    const decoded = await jwt.verify(token,jwtKey);
    req.user = decoded;
    next();
    }
    catch(err) {
        return res.json({"message" : "Expire or Invalid token"});
    }
};
module.exports = {authentecationToken};