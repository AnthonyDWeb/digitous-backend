const express = require('express');
const cors = require('cors');


const hotelsRouter = require('Trippy_API/router/hotelRouter');
const restaurantsRouter = require('Trippy_API/router/restaurantRouter');

const PORT = 9002;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/hotels", hotelsRouter);
app.use("/restaurants", restaurantsRouter);



// Server Started
app.listen(PORT, console.log(`Server listening on port : ${PORT}`))