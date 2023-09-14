const express = require('express');
const router = express.Router();
const { getAll, searchDrinks, createDrink, deleteDrink, updateDrink, deleteSelect } = require('../controller/homeController');

// index page 
router.get('/home', getAll);

// create drink
router.post('/home/drinks/create', createDrink)

// Search drinks
router.get('/home/search', searchDrinks);

// Delete a Tutorial with id
router.get("/home/delete/:drinkID", deleteDrink);

// Update a Tutorial with id    
router.post("/home/update", updateDrink);

// Delete by select
router.get("/home/deleteSelect", deleteSelect);

module.exports = router;
