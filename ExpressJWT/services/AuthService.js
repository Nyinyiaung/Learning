const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/Config');

async function registerUser(user) {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(user.password, salt);
    let newUser = new User({
        username: user.username,
        password: hashedPassword,
        role: user.role,
    })

    let registeredUser = await newUser.save();

    let payload = {
        username: registeredUser.username,
        role: registeredUser.role,
    }

    let token = await jwt.sign(payload, config.TOKEN_SECRET);
    return {
        token: token
    };
}

async function loginUser(user) {
    let existingUser = await User.findOne({
        username: user.username
    });

    if (!existingUser) {
        throw new Error('User Not Found!');
    }

    let valid = await bcrypt.compare(user.password, existingUser.password)
    if (!valid) {
        throw new Error('Passwords do not match!');
    }

    let payload = {
        username: existingUser.username,
        role: existingUser.role,
    }

    let token = await jwt.sign(payload, config.TOKEN_SECRET);
    return {
        token: token
    };
}

module.exports = {
    registerUser, loginUser
}