const {body} = require("express-validator");

const restaurantCheckIn = 
    body("name").isString()
    body("address").isString()
    body("city").isString()
    body("country").isString()
    body("stars").isInt({min: 1, max: 5})
    body("cuisine").isString()
    body("priceCategory").isInt({min: 1, max:3});

module.exports = {
    restaurantCheckIn: restaurantCheckIn
}