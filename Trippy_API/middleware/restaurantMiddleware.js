const {body} = require("express-validator");

const restaurantCheckIn = () => [

    body("name").notEmpty().isString(),
    body("address").notEmpty().isString(),
    body("city").notEmpty().isString(),
    body("country").notEmpty().isString(),
    body("stars").notEmpty().not().isString().isInt({min: 1, max:3}),
    body("cuisine").notEmpty().isString(),
    body("priceCategory").notEmpty().not().isString().isInt({min: 1, max:3}),
]

module.exports = {
    restaurantCheckIn: restaurantCheckIn
}