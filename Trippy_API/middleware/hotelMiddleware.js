const {body} = require("express-validator");

const hotelCheckIn = () => [

    body("name").notEmpty().isString(),
    body("address").notEmpty().isString(),
    body("city").notEmpty().isString(),
    body("country").notEmpty().isString(),
    body("stars").notEmpty().not().isString().isInt({min: 1, max:3}),
    body("hasSpa").isBoolean(),
    body("hasPool").isBoolean(),
    body("priceCategory").notEmpty().not().isString().isInt({min: 1, max:3}),
]
    
module.exports = {
    hotelCheckIn: hotelCheckIn
}