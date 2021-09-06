const {body} = require("express-validator");
const checkValidation = require("password-validator");


const nameValidation = body("name").isString();

const addressValidation = body("address").isString();

const cityValidation = body("city").isString();

const countryValidation = body("country").isString();

const startsValidation = body("stars").isInt({min: 1, max: 5})

const spaValidation = body("hasSpa").isBoolean();

const poolValidation = body("hasPool").isBoolean();

const priceCategoryValidation = body("priceCategory").isInt({min: 1, max:3});


module.exports = {
    nameValidation: nameValidation,
    addressValidation: addressValidation,
    cityValidation: cityValidation,
    countryValidation: countryValidation,
    startsValidation: startsValidation,
    spaValidation: spaValidation,
    poolValidation: poolValidation,
    priceCategoryValidation: priceCategoryValidation
}