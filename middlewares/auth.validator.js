const db  = require('../models/index')

const validateToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({ message: "no token provided" });
    }
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "unauthorized" })
        }
        req.userId = decoded.id;
        next();
    })
};




module.exports = { validateToken}