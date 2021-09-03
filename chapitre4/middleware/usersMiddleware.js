const expressValidator = require('express-validator');
const passwordValidator = require('password-validator');

const emailValidation = expressValidator.body("email").isEmail();

const usernameValidation = expressValidator.body("username").custom( value => {
    const schema = new passwordValidator();
    schema.is().min(4);

    return schema.validate(value);
});

const ageValidation = expressValidator.body("age").custom( value => {
    const schema = new passwordValidator();
    schema.has().digits(2);

    return schema.validate(value);
});
const cityValidation = expressValidator.body("city").custom( value => {
    const schema = new passwordValidator();
    schema.is().letters();

    return schema.validate(value);
});


module.exports = {
    emailValidation: emailValidation,
    usernameValidation: usernameValidation,
    ageValidation: ageValidation,
    cityValidation: cityValidation
}