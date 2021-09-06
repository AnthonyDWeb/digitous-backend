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
    if (errors.isEmpty() === false){
        res.json(res.status(400));
        return;
    } else {
        restaurants.push(req.body)
        res.json({
            success: true,
            messages: "restaurant will be add"
        })
    }
};

module.exports = {
    getRestaurants: getRestaurants,
    getRestaurantById: getRestaurantById,
    getRestaurantNewName: getRestaurantNewName,
    deleteRestaurantById: deleteRestaurantById,
    checkErrors: checkErrors   
}