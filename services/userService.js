const database = require("../database/database");
let User = require("../models/userModel");

const createUser = (username) => {
    database.connection;
    let newUser = new User({
        username: username,
    })
    let nuevoRegistro = newUser.save();
    return nuevoRegistro;
}

const findUserById = (idUser, done) => {
    database.connection;
    User.findById(idUser, (err, data) => {
        if (err) {
            console.log(err);
        }
        done(null, data);
    })
}

const allUsers = (done) =>{
    User.find({}, (err, data)=>{
        if(err)
            console.log(err)
        done(null, data)
    });
}

exports.createUser = createUser;
exports.findUserById = findUserById;
exports.allUsers = allUsers;
