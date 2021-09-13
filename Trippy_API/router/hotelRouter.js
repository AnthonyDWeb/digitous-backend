const express = require('express');
const hotelController = require('../controllers/hotelControllers');
const hotelMiddleware = require('../middleware/hotelMiddleware')

const router = express.Router()

// ----- GET -----
router.get("/", hotelController.getHotels);
router.get("/:id", hotelController.getHotelById);

// ----- POST -----
router.post("/", hotelMiddleware.hotelCheckIn(), hotelController.checkErrors);

// ----- PUT -----
router.put("/:id", hotelController.getHotelNewName);

// ----- DELETE -----
router.delete("/:id", hotelController.deleteHotelById);



module.exports = router;