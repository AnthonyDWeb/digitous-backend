const express = require("express");
const restaurantController = require('../controllers/restaurantControllers');

const router = express.Router();

// ----- GET -----
router.get("/", restaurantController.getRestaurants);
router.get("/:id", restaurantController.getRestaurantById);

// ----- POST -----

module.exports = router;