const express = require('express');
const usersController = require('../controllers/usersController');
const usersMiddleware = require('../middleware/usersMiddleware')

const router = express.Router();

// ----- GET -----
router.get("/", usersController.getAllUsers);
router.get("/:username", usersController.getUserSearched);
router.get("/id/:id", usersController.getUserIDSearched);
router.get("/email/:email", usersController.getUserEmailSearched);

// ----- POST -----
router.post("/", usersMiddleware.emailValidation, usersMiddleware.usernameValidation, usersMiddleware.ageValidation,usersMiddleware.cityValidation,usersController.checkErrors);

module.exports = router;