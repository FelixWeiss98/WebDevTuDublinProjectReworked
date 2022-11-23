const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    let token = req.headers.tokendata;
    console.log(req.headers.tokendata);
    // Check if token exists
    if(!token) {
        return res.status(403).send({
            'message': 'Missing token information'
        });
    }
    try {
        // Return decoded token
        let decoded = jwt.verify(token, process.env.SECRET_TOKEN);
        req.tokendata = decoded;
        next();
    } catch (error) {
        return res.status(401).send({
            'message': 'Invalid token'
        })
    }
};

module.exports = verifyToken;