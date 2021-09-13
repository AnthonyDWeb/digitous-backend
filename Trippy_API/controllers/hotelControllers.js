let hotels = require("../json/hotel");
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

const getHotelNewName = (req,res) =>{
    let id = req.params.id;
    let newName = req.query.name;
    let hotelIndex = hotels.findIndex( hotel => hotel.id.toString() === id)
    hotels[hotelIndex].name = newName;
    res.json({
        status: "OK!",
        data: hotels
    });
}; 

const deleteHotelById = (req,res) =>{
    let id = req.params.id;
    let hotelToDelete = hotels.find( hotel => hotel.id.toString() === id);
    hotels = hotels.filter( hotel => hotel != hotelToDelete)
    console.log("hotels to delete", hotels.filter( hotel => hotel != hotelToDelete))
    console.log(hotels)
    
    res.json({
        status: "OK!",
        data: hotels

    });
};


const checkErrors = (req,res) => {
    
    const errors = expressValidator.validationResult(req);
    console.log(errors)

    if (errors.isEmpty() === false) {
        
        return res.status(400).json({
            message: "error",
            errors: errors.array()
        });
    }

    hotels.push(req.body)
    res.json({
        success: true,
        messages: "hotel will be add",
        data: hotels
    })
};

module.exports = {
    getHotels: getHotels,
    getHotelById: getHotelById,
    getHotelNewName: getHotelNewName,
    deleteHotelById: deleteHotelById,
    checkErrors: checkErrors
}