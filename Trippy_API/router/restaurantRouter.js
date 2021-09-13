const express = require("express");
const restaurantController = require('../controllers/restaurantControllers');
const restaurantMiddleware = require('../middleware/restaurantMiddleware')

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