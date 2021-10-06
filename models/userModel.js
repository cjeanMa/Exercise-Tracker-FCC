const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
    username: {
      type: String,
      required: true
    }
})

//const user = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);

/* module.export = {
  User: mongoose.model("User", userSchema)
} */