const express = require('express');
const cors = require('cors');
const expressValidator = require('express-validator');
const passwordValidator = require('password-validator');

const PORT = 9002;
const app = express();
app.use(cors());
app.use(express.json());


// Server Started
app.listen(PORT, console.log(`Server listening on port : ${PORT}`))