const homeModel = require('../models/homeModel');
const tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

const responseData = {
    drinks: [],
    tagline: '',
    message: {
        error: '',
        delete: '',
        update: '',
        isEmpty: ''
    }
}

const setResponseData = (drinks, tagline, message) => {
    responseData.drinks = drinks;
    responseData.tagline = tagline;
    responseData.message = message;
};


// getAll 
const getAll = (req, res) => {
    console.log(req.query)
    homeModel.getAll(function (error, results) {

        if (req.session.loggedIn) {
            if (error) {
                return res.render('pages/index', {
                    error: error.message
                });
            }
            message = {
                error: req.query.error,
                delete: req.query.delete,
                update: req.query.update,
                isEmpty: '',
            }

            setResponseData(results, tagline, message)

            return res.render('pages/index', responseData);
        }
        res.redirect('/login');
    });
};

// Create and Save a new Drinks
const createDrink = (req, res) => {
    const homeEntity = {
        drinkID: req.body.drinkID,
        name: req.body.name,
        drunkness: req.body.drunkness
    };

    homeModel.create(homeEntity,
        function (err, result) {
            console.log(result);
            if (err) {
                return res.redirect('/home?error=' + err.message);
            }
            return res.redirect('/home');
        })

};


// Search drinks by name
const searchDrinks = (req, res) => {
    console.log(req.query)
    homeModel.searchDrinks(
        req.query.searchInput,
        (err, homeEntity) => {
            if (err) {
                return res.redirect('/home?error=' + err.message);
            }

            if (homeEntity.length > 0) {
                return res.render('pages/index', {
                    drinks: homeEntity,
                    tagline: tagline,
                });
            } else {
                return res.render('pages/index', {
                    drinks: homeEntity,
                    tagline: tagline,
                    message: {
                        isEmpty: 'empty drinks'
                    }
                });
            }
        }
    )
};


// Delete drink 
const deleteDrink = (req, res) => {
    console.log(req.params.drinkID);
    homeModel.deleteDrink(
        req.params.drinkID,
        (err, result) => {
            console.log("deleteDrinkaaaa")
            if (err) {
                return res.redirect('/home?error=' + err.message);
            }
            return res.redirect('/home?delete=' + "Delete successfully");
        }
    )
};


// Update drink by id
const updateDrink = (req, res) => {

    const homeEntity = {
        drinkID: req.body.drinkIdUpdate,
        name: req.body.nameUpdate,
        drunkness: req.body.drunknessUpdate
    };

    homeModel.updateDrink(
        homeEntity,
        (err, result) => {
            if (err) {
                return res.redirect('/home?error=' + err.message);
            }
            console.log(result);
            return res.redirect('/home?update=' + "Update successful");
        }
    )
};


const deleteSelect = (req, res) => {

    const listSelect = req.query.list.split(",")

    homeModel.deleteSelect(
        listSelect,
        (err, result) => {
            if (err) {
                return res.redirect('/home?error=' + err.message);
            }
            console.log(result);
            return res.redirect('/home?delete=' + "Delete successfully");
        }
    )
};


module.exports = {
    getAll,
    createDrink,
    searchDrinks,
    deleteDrink,
    updateDrink,
    deleteSelect
}