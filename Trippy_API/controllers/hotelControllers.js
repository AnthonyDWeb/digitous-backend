let hotels = require("../json/hotel.json");
const expressValidator = require('express-validator')

const getHotels = (req,res) => {
    res.json({
        status: "OK!",
        data: hotels
    })
};

const getHotelById = (req,res) =>{
    let id = req.params.id;
    res.json({
        status: "OK!",
        data: hotels.find( hotel => hotel.id.toString() === id)
    });
};

const deleteHotelById = (req,res) =>{
    let id = req.params.id;
    let hotelToDelete = hotels.find( hotel => hotel.id.toString() === id);
    hotels = hotels.filter( hotel => hotel != hotelToDelete)
    console.log(hotels)
    
    res.json({
        status: "OK!",
        data: hotels

    });
};


const checkErrors = (req,res) => {
    const errors = expressValidator.validationResult(req);
    console.log('error', errors)
    if (errors.isEmpty() === false){
        res.status(400).json({messages: "it's fail"});
        return;
    } else {
        hotels.push(req.body)
        res.json({
            success: true,
            messages: "hotel will be add"
        })
    }
};

module.exports = {
    getHotels: getHotels,
    getHotelById: getHotelById,
    deleteHotelById: deleteHotelById,
    checkErrors: checkErrors
}