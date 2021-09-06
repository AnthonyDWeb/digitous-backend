const restaurants = require('../json/restaurant.json');

const getRestaurants = (req,res) => {
    res.json({
        status: "OK!",
        data: restaurants
    })
};

const getRestaurantById = (req,res) =>{
    let id = req.params.id;
    res.json({
        status: "OK!",
        data: restaurants.find( restaurant => restaurant.id.toString() === id)
    });
}

module.exports = {
    getRestaurants: getRestaurants,
    getRestaurantById: getRestaurantById   
}