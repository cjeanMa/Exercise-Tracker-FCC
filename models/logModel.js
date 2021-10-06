const mongoose = require("mongoose");
const { Schema } = mongoose;

const logSchema = Schema({
    username: String,
    count: Number,
    log: [
        {
            description: String,
            duration: String,
            date: String
        }
    ]
})