const expressValidator = require('express-validator');
const users = [
    {
    "id": 0,
    "username" :"anthony",
    "email": "testCours@kevin-julie.com",
    "city": "Montreuil",
    "age": 27
    },
    {
    "id": 1,
    "username" : "julien",
    "email": "testCours@kevin-julie.com",
    "city": "Montreuil",
    "age": 25
    }
];

const getAllUsers = (req, res) => {
    res.json({
        status: "OK",
        data: users
    })
};

const getUserSearched = (req,res) => {
    let username = req.params.username.toLowerCase();
    res.json({
        status: "OK",
        data: users.find( user => user.username.toLowerCase() === username),
    })
};
const getUserIDSearched = (req,res) => {
    let id = req.params.id;
    res.json({
        status: "OK",
        data: users.find( user => user.id.toString() === id),
    })
};
const getUserEmailSearched = (req,res) => {
    let email = req.params.email;
    res.json({
        status: "OK",
        data: users.find( user => user.email === email),
    })
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
}

module.exports = { 
    getAllUsers: getAllUsers,
    getUserSearched: getUserSearched,
    getUserIDSearched: getUserIDSearched,
    getUserEmailSearched: getUserEmailSearched,
    checkErrors: checkErrors
}