const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Factory function that accepts allowed roles
const authorize = (allowedRoles) => {
    return (req, res, next) => {
        const authorization = req.headers.authorization;

        if (!authorization || !authorization.startsWith("Bearer ")) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const token = authorization.split(" ")[1];

        try {
            const verifiedUser = jwt.verify(token, config.TOKEN_SECRET);

            // 1. Check if the user's role is in the list of allowed roles
            // allowedRoles can be a string like "admin" or an array ["admin", "editor"]
            const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

            if (!roles.includes(verifiedUser.role)) {
                return res.status(403).json({ error: 'Unauthorized: Insufficient permissions' });
            }

            // 2. Attach user to request for later use
            req.user = verifiedUser;
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Invalid or expired token' });
        }
    };
};

module.exports = {
    authorize,
};