const {body} = require('express-validator');
const password = require("password-validator");

const registerCheckIn = () => [
    body("email").notEmpty().isEmail().normalizeEmail(),
    body("firstName").notEmpty().isString(),
    body("surname").notEmpty().isString(),
    body("dateOfBirth").notEmpty().isInt().not().isString(),
    body("password").custom(value => {
        const schema = new password();
        schema.is().min(8)

        return schema.validate(value)
    }),
    body("confirmPassword").custom(value => {
        const schema = new password();
        schema.is().min(8)

        return schema.validate(value)
    })
]

module.exports = {
    registerCheckIn: registerCheckIn
}