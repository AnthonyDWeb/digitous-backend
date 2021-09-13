const express = require('express');
const hotelController = require('Trippy_API/controllers/hotelControllers');
const hotelMiddleware = require('Trippy_API/middleware/hotelMiddleware')

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