const {body} = require("express-validator");

const hotelCheckIn = 
    body("name").isString()
    body("address").isString()
    body("city").isString()
    body("country").isString()
    body("stars").isInt({min: 1, max: 5})
    body("hasSpa").isBoolean()
    body("hasPool").isBoolean()
    body("priceCategory").isInt({min: 1, max:3});

module.exports = {
    hotelCheckIn: hotelCheckIn
}