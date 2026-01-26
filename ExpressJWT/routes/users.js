const express = require('express');
const controller = require("../controllers/UserController");
const router = express.Router();

router.get('/:name', controller.getUserByName);
router.get('/', controller.getUsers);

module.exports = router;