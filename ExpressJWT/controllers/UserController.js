const userService = require('../services/userService');

async function getUserByName(req, res) {
    try {
        return res.status(200).json(await userService.getUserByName(req.params.name));
    } catch (error) {
        res.status(500).send({
            error: error.message,
        });
    }
}

async function getUsers(req, res) {
    try {
        return res.status(200).json(await userService.getUsers());
    } catch (error) {
        res.status(500).send({
            error: error.message,
        });
    }
}

module.exports = {
    getUserByName, getUsers,
}