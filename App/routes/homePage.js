const express = require('express');
const connection = require('../models/connection');
const router = express.Router();
const { getAll, searchDrinks, createDrink, deleteDrink, UpdateDrink, DeleteSelect } = require('../controller/homeController');

// index page 
router.get('/home', getAll);

// create drink
router.post('/home/drinks/create', createDrink)

// Search drinks
router.get('/home/search', searchDrinks);

// Delete a Tutorial with id
router.get("/home/delete/:drinkID", deleteDrink);

// Update a Tutorial with id    
router.post("/home/update", UpdateDrink);

// Delete by select
router.get("/home/deleteSelect", DeleteSelect);

module.exports = router;
