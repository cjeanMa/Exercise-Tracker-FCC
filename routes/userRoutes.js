//let userService = require("../services/userService");
const database = require("../database/database");
const userService = require("../services/userService")
let User = require("../models/userModel");


/** Functions to connect with database */
/* const createUser = (username) => {
    database.connection;
    let newUser = new User({
        username: username,
    })
    //console.log("from createUser");
    //console.log(newUser);
    let nuevoRegistro = newUser.save();
    return nuevoRegistro;
} */

/** functions to response routes */

const userRoutes = {
    save: (req, res) => {
        let un = req.body.username;
        let jsonResponse = {};
        let registro = userService.createUser(un);
        registro.then((data) => {
            jsonResponse.username = data.username;
            jsonResponse._id = data._id;
            res.send(jsonResponse);
        })
            .catch(err => {
                res.send("Error application")
            })


    },
    logs: (req, res) => {
        let val = typeof userService;
        console.log(userService.test);
        res.send("funcionando - " + val)
    }
}

module.exports = userRoutes