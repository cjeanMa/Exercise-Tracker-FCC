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


/* const service = {
    save: () => {
        database.connection();
        let newUser = new User({
            username: "nuevo",
        })
        console.log(newUser);
        return newUSer;
    },
    test: ()=>{
        console.log("servicio prueba");
        return true;
    }
} */
exports.createUser = createUser;
exports.findUserById = findUserById;
