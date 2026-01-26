const userService = require("../services/AuthService");

async function registerUser(req, res) {
    try {
        let registeredUser = await userService.registerUser(req.body);
        return res.status(201).json(registeredUser)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
        })
    }
}

async function loginUser(req, res) {
    try {
        let user = await userService.loginUser(req.body);
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(401).json({
            error: error.message,
        })
    }
}

module.exports = {
    registerUser, loginUser
}