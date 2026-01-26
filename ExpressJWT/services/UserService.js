const User = require('../models/User');

async function getUserByName(name) {
    return await User.findOne({
        username: name,
    })
}

async function getUsers() {
    return await User.find();
}

module.exports = {
    getUserByName, getUsers,
}