const express = require('express');
const app = express();
const port = 3000;

const {connection} = require("./database/mongodb");
const {userRouter} = require("./routes/user.routes");
const { errorHandler } = require('./middleware/errorhandling.middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use(errorHandler);

app.listen(port, async(err) => {
    try{
       await connection
       console.log("Server is connected to mongodb");
    }
    catch(err){
        return console.log("error connecting to db", err.message);
    }
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;