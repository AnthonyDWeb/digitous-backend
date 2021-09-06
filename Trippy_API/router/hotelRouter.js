const express = require('express');
const hotelController = require('../controllers/hotelControllers')

const router = express.Router()

// ----- GET -----
router.get("/", hotelController.getHotels);
router.get("/:id", hotelController.getHotelById)

module.exports = router;