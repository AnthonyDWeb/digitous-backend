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

const checkErrors = (req,res) => {
    const errors = expressValidator.validationResult(req);
    if (errors.isEmpty() === false){
        res.json(res.status(400));
        return;
    } else {
        users.push(req.body)
        res.json({
            success: true,
            messages: "user will be add"
        })
    }
};

module.exports = {
    getRestaurants: getRestaurants,
    getRestaurantById: getRestaurantById,
    checkErrors: checkErrors   
}