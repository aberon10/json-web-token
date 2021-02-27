const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    if (req.headers.hasOwnProperty('authorization')) {
        const token = req.headers['authorization'].split(' ')[1];
        const isValidToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (isValidToken) next();
        else res.status(401).json({ message: "Token is invalid" });
    } else {
        res.status(401).json({message: "No token provided"});
    }
};

module.exports = verifyToken;