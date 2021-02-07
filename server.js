const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes');

const app = express();
app.use(express.json()); // returns values as JSON

mongoose.connect(
    "mongodb+srv://dbAdmin:2oonies4me@cluster0.6dh71.mongodb.net/Restaurants?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use(restaurantRouter);

app.listen(3000, () => {
    console.log("The server is running...");
});