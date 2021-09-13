const mongoose = require('mongoose');

const AdressSchema = new mongoose.Schema({
    streetName: {
        type: String
    },
    streetNumber: String,
    postCode: String,
    city: String
})

const Address = mongoose.model("Address", AdressSchema);

module.exports = {
    Address: Address
}
