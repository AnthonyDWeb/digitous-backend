const express = require('express');
const userControllers = require('../controllers/user');
const userMiddlewares = require('../middlewares/register')

const router = express.Router();

// ----- GET -----
router.get("/admin", userControllers.admin);
// ----- POST -----
router.post("/register", userMiddlewares.registerCheckIn(), userControllers.register);
router.post("/login", userControllers.login);

module.exports = router