const connect = require("./connection.js");

// constructor
const homeModel = function (homeModel) {
    this.drinkID = homeModel.drinkID;
    this.name = homeModel.name;
    this.drunkness = homeModel.drunkness;
};

// get All
homeModel.getAll = (CallBack) => {
    connect.query("SELECT * FROM drinks",
        function (err, results, fields) {
            console.log(results, 'result'); // results contains rows returned by server
            if (err) {
                return CallBack(err);
            }
            return CallBack(null, results);
        });
};

// create Home
homeModel.create = (newHome, result) => {
    connect.query("INSERT INTO drinks SET ?",
        newHome,
        (err, res) => {
            console.log("error:here ");
            if (err) {
                console.log("error: ", err);
                return result(err);
            }

            console.log("created tutorial: ", { ...newHome }, res);
            return result(null, { ...newHome });
        });
};


//select Drink
homeModel.searchDrinks = (inputSelect, result) => {

    connect.query(`SELECT * FROM drinks WHERE name LIKE ?`,
        '%' + inputSelect + '%', (err, results, fields) => {
            console.log(results); // 

            if (err) {
                console.log("error: ", err);
                return result(err, null);
            }
            return result(null, results);

        });
};


// Delete Drinks
homeModel.deleteDrink = (id, results) => {
    console.log(`Delete Drinks`, id)
    connect.query(`delete FROM drinks WHERE drinkID = ?`,
        id,
        (err, result) => {
            if (err) {
                console.log("error: ", err);
                return results(err, null);
            }
            console.log("result: ", result);
            console.log("Delete succeeded")
            return results(null, result)
        }
    )
};


// Update Home
homeModel.updateDrink = (newHome, result) => {
    connect.query(`UPDATE drinks SET name = ?, drunkness = ? where drinkID = ?`,
        [newHome.name, newHome.drunkness, newHome.drinkID],
        (err, res) => {
            console.log(newHome, 'new home');
            if (err) {
                console.log("error: ", err);
                return result(err, null);
            }

            console.log("created home: ", { id: res.insertId, ...newHome });
            result(null, { id: res.insertId, ...newHome });
        });
};


// Delete by select
homeModel.DeleteSelect = (listSelect, results) => {
    const query = 'DELETE FROM Drinks WHERE drinkID IN (?)';
    connect.query(query, [listSelect], (err, result) => {
        if (err) {
            console.error('Error:', err);
            return results(err, null);
        }
        console.log('Deleted rows:', result.affectedRows);
        return results(null, result);
    });
};

module.exports = homeModel