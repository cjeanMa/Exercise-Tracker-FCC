const database = require("../database/database");
const Exercise = require("../models/exerciseModel");

const addExercise = async (exercise, done) => {
    /* validador primitivo */
    let dataResponse = {
        status: false
    };

    await new Exercise(exercise).save()
        .then((data) => {
            dataResponse.username = data.username
            dataResponse.description = data.description
            dataResponse.duration = data.duration
            dataResponse.date = data.date
            dataResponse._id = data.user_id
            done(null, dataResponse);
        })
        .catch(err => {
            console.log(err);
        })

}

const findExercisesByIdUser = (dUser, done) => {
    let query = Exercise.find({ user_id: dUser.idUser });
    if (dUser.from || dUser.to) {
        query = query.where("date");
        if (dUser.from) {
            query = query.gte(dUser.from)
        }
        if (dUser.to) {
            query = query.lte(dUser.to)
        }
    }
    if (dUser.limit) {
        query = query.limit(dUser.limit)
    }

    query.exec((err, data) => {
        if (err) {
            console.log(err)
            done(err, null);
        }
        done(null, data);
    })

}

exports.addExercise = addExercise;
exports.findExercisesByIdUser = findExercisesByIdUser;