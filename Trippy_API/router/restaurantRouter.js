const express = require("express");
const hotelControllers = require("Trippy_API/controllers/hotelControllers");
const restaurantController = require('Trippy_API/controllers/restaurantControllers');
const restaurantMiddleware = require('Trippy_API/middleware/restaurantMiddleware')

const router = express.Router();

// ----- GET -----
router.get("/", restaurantController.getRestaurants);
router.get("/:id", restaurantController.getRestaurantById);

// ----- POST -----
router.post("/", restaurantMiddleware.restaurantCheckIn(), restaurantController.checkErrors);

// ----- PUT -----
router.put("/:id", hotelControllers.getHotelNewName);

// ----- DELETE -----
router.delete("/:id", hotelControllers.deleteHotelById);

module.exports = router;