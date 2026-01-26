function validateToken(req, res, next) {
    if (req.headers.authorization && req.headers.authorization.indexOf('Bearer ') > -1) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

exports.token = validateToken;