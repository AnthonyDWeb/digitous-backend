const restaurants = require('Trippy_API/json/restaurant');
const expressValidator = require('express-validator')

const getRestaurants = (req,res) => {
    console.log(req.body)
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
};

const getRestaurantNewName = (req,res) =>{
    let id = req.params.id;
    let newName = req.query.name;
    let restaurantIndex = restaurants.findIndex( restaurant => restaurant.id.toString() === id)
    restaurants[restaurantIndex].name = newName;
    res.json({
        status: "OK!",
        data: restaurants
    });
}; 

const deleteRestaurantById = (req,res) =>{
    let id = req.params.id;
    let restaurantToDelete = restaurants.find( restaurant => restaurant.id.toString() === id);
    restaurants = restaurants.filter( restaurant => restaurant != restaurantToDelete)
    console.log(restaurants)
    
    res.json({
        status: "OK!",
        data: restaurants

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

    restaurants.push(req.body)
    console.log(req.body.stars, typeof req.body.stars)
    res.json({
        success: true,
        messages: "restaurant will be add",
        data: restaurants
    })
};

module.exports = {
    getRestaurants: getRestaurants,
    getRestaurantById: getRestaurantById,
    getRestaurantNewName: getRestaurantNewName,
    deleteRestaurantById: deleteRestaurantById,
    checkErrors: checkErrors   
}