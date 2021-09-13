const express = require('express');
const cors = require('cors');


const hotelsRouter = require('./router/hotelRouter');
const restaurantsRouter = require('./router/restaurantRouter');

const PORT = 9002;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/hotels", hotelsRouter);
app.use("/restaurants", restaurantsRouter);



// Server Started
app.listen(PORT, console.log(`Server listening on port : ${PORT}`))