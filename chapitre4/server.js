const express = require('express');
const usersRouter = require('./routers/usersRouter')

const app = express();
const PORT = 3500;

app.use(express.json());
app.use("/users", usersRouter);

// SERVER STARTED ---------
app.listen(PORT, () => {console.log(`Server listening on port: ${PORT}`);})