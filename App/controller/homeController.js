const HomeModel = require('../models/homeModel');
const connection = require('../models/connection');
const homeModel = require('../models/homeModel');
const tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

const responseData = {
    drinks: [],
    errorMessage: '',
    tagline: ''
}
// getAll 
const getAll = (req, res) => {
    console.log(req.query)
    HomeModel.getAll(function (error, results) {

        if (req.session.loggedIn) {
            if (error) {
                return res.render('pages/index', {
                    errorMessage: error.message
                });
            }
            return res.render('pages/index', {
                ...responseData,
                drinks: results,
                tagline: tagline,
                errorMessage: req.query.errorMessage,
                deleteMessage: req.query.deleteMessage,
                updateMessage: req.query.updateMessage
            });
        } else {
            res.redirect('/login');
        }
    });
};

// Create and Save a new Drinks
const createDrink = (req, res) => {
    const homeModel = new HomeModel({
        drinkID: req.body.drinkID,
        name: req.body.name,
        drunkness: req.body.drunkness
    });

    HomeModel.create(homeModel,
        function (err, result) {
            console.log(result);
            if (err) {
                return res.redirect('/home?errorMessage=' + err.message);
            }
            return res.redirect('/home');
        })

};


// Search drinks by name
const searchDrinks = (req, res) => {
    console.log(req.query)
    HomeModel.searchDrinks(
        req.query.searchInput,
        (err, homeEntity) => {
            if (err) {
                return res.redirect('/home?errorMessage=' + err.message);
            }

            if (homeEntity.length > 0) {
                return res.render('pages/index', {
                    drinks: homeEntity,
                    tagline: tagline,
                    errorMessage: ''
                });
            } else {
                return res.render('pages/index', {
                    drinks: homeEntity,
                    tagline: tagline,
                    errorMessage: 'empty drinks'
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
                return res.redirect('/home?errorMessage=' + err.message);
            }
            // console.log(result);
            return res.redirect('/home?deleteMessage=' + "Delete successfully");
        }
    )
};


// Update drink by id
const UpdateDrink = (req, res) => {
    console.log('updateDrink')
    console.log(req.body, 'saldkejndijn');

    const homeModel = new HomeModel({
        drinkID: req.body.drinkIdUpdate,
        name: req.body.nameUpdate,
        drunkness: req.body.drunknessUpdate
    });

    HomeModel.updateDrink(
        homeModel,
        (err, result) => {
            if (err) {
                return res.redirect('/home?errorMessage=' + err.message);
            }
            console.log(result);
            return res.redirect('/home?updateMessage=' + "Update successful");
        }
    )
};


const DeleteSelect = (req, res) => {
    console.log(req.query, "query")
    console.log(req.query.list)
    console.log(Array.isArray(req.query.list.split(",")))
    console.log(req.query.list.split(","))

    const listSelect = req.query.list.split(",")

    HomeModel.DeleteSelect(
        listSelect,
        (err, result) => {
            if (err) {
                return res.redirect('/home?errorMessage=' + err.message);
            }
            console.log(result);
            return res.redirect('/home?deleteMessage=' + "Delete successfully");
        }
    )
};


module.exports = {
    getAll,
    createDrink,
    searchDrinks,
    deleteDrink,
    UpdateDrink,
    DeleteSelect
}