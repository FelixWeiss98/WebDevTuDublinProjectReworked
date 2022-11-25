const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    let token = req.headers.token;
    console.log(req.headers.token);
    // Check if token exists
    if(!token) {
        return res.status(400).send({
            'message': 'Missing token information'
        });
    }
    try {
        // Return decoded token
        jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
            if(err) {
                return res.status(401).send({
                    'message': 'Token expired'
                });
            }
            req.tokendata = decoded;
            next();
        });
        //req.tokendata = decoded;
        //next();
    } catch (error) {
        return res.status(401).send({
            'message': 'Invalid token'
        })
    }
};

module.exports = verifyToken;