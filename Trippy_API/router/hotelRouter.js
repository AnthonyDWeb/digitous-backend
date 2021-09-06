const express = require('express');
const hotelController = require('../controllers/hotelControllers');
const hotelMiddleware = require('../middleware/hotelMiddleware')

const router = express.Router()

// ----- GET -----
router.get("/", hotelController.getHotels);
router.get("/:id", hotelController.getHotelById);

// ----- POST -----
router.post("/",
hotelMiddleware.nameValidation,
hotelMiddleware.addressValidation,
hotelMiddleware.cityValidation,
hotelMiddleware.countryValidation,
hotelMiddleware.startsValidation,
hotelMiddleware.spaValidation,
hotelMiddleware.poolValidation,
hotelMiddleware.priceCategoryValidation,
hotelController.checkErrors);

// ----- DELETE -----
router.delete("/:id", hotelController.deleteHotelById);



module.exports = router;