const mongoose = require("mongoose");
const { Schema } = mongoose;

const exerciseSchema = Schema({
    user_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Number,
        // `Date.now()` returns the current unix timestamp as a number
        //default: () => new Date.now(),
        require: true
      }
})

module.exports = mongoose.model("Exercise", exerciseSchema);