const express = require('express');
const restaurantModel = require('../models/restaurants');
const app = express();

// Returns all restaurant details
// http://localhost:3000/restaurants

app.get('/restaurants', async (req, res) => {
    const restaurants = await restaurantModel.find({});

    try {
        res.send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Search restaurants by name of cuisine
// http://localhost:3000/restaurants/cuisine/Japanese

app.get('/restaurants/cuisine/:name', async (req, res) => {
    const name = req.params.name
    const restaurants = await restaurantModel.find({cuisine: name});

    try {
        if(cuisine.length != 0){
            res.send(restaurants);
        }else{
            res.send(JSON.stringify({status:false, message: "No data found"}))
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// Sort restaurants by ascending order
// http://localhost:3000/restaurants?sortBy=ASC

app.get('/restaurants/?sortBy=ASC', async (req, res) => {
    const restaurants = await restaurantModel.find({}).select("restaurant_id cuisine city name _id").sort({'restaurant_id': 1});

});

// Sort restaurants by descending order
// http://localhost:3000/restaurants?sortBy=DESC

app.get('/restaurants/?sortBy=DESC', async (req, res) => {
    const restaurants = await restaurantModel.find({}).select("restaurant_id cuisine city name _id").sort({'restaurant_id': -1});

});

// Sort restaurant details where cuisines = Delicatessen but city != Brooklyn

app.get('/restaurants/Delicatessen', async (req, res) => {
    const restaurants = await restaurantModel.find({}).select("cuisine city name").sort({'name': 1});

});

module.exports = app

