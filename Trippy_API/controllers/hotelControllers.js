const hotels = require("../json/hotel.json");

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
}

module.exports = {
    getHotels: getHotels,
    getHotelById: getHotelById
}