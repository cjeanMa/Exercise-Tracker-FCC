let config = require("../config/config");
let mongoose = require("mongoose");

const uriDb = `mongodb+srv://${config.mongo.user}:${config.mongo.password}@${config.mongo.host}/${config.mongo.database}?retryWrites=true&w=majority`;

/* const mongodb = {
    connection: ()=>{
        mongoose.connect(uriDb, (err)=>{
            if (err) throw (err);
            console.log("coneccion satisfactoria - " + uriDb);
        })
    }
} */

module.export = mongoose.connect(uriDb);