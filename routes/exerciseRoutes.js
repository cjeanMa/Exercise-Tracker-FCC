const database = require("../database/database");
const userService = require("../services/userService");
const exerciseService = require("../services/exerciseService");
const utilDate = require("../Utils/validations");


const exerciseRoutes = {
    addExercise: (req, res) => {
        let dateConverted;
        if (req.body.date) {
            if (req.body.date.length == 0) {
                let today = new Date();
                dateConverted = utilDate.convertToUnixTime(today.getTime());
            }
            else {
                dateConverted = utilDate.convertToUnixTime(req.body.date);
                if (!dateConverted) {
                    return res.status(404).send(`Cast to date failed for value "${req.body.date}" at path "date"`);
                }
            }
        }
        else{
            let today = new Date();
            dateConverted = utilDate.convertToUnixTime(today.getTime());
        }


        if (isNaN(parseInt(req.body.duration)))
            return res.status(404).send(`Cast to date failed for value "${req.body.duration}" at path "duration"`);


        userService.findUserById(req.params._id, (err, rUser) => {
            if (!err) {
                if (rUser != "undefined" || rUser != null) {
                    let dataExercise = {
                        username: rUser.username,
                        description: req.body.description,
                        duration: req.body.duration,
                        date: dateConverted,
                        user_id: rUser._id
                    }
                    exerciseService.addExercise(dataExercise, (err, data) => {
                        if (!err) {
                            delete data.status;
                            let convertData = new Date(data.date + 3600 * 5 * 1000);
                            data.date = convertData.toDateString();
                            res.json(data)
                        }
                        else
                            res.json(nExercise)
                    });

                }
            }
            else
                res.send("User Unknow addExercise");
        });
    },
    findLogs: (req, res) => {
        let dUser = {
            from: utilDate.convertToUnixTime(req.query.from) || null,
            to: utilDate.convertToUnixTime(req.query.to) || null,
            limit: parseInt(req.query.limit) || null,
            idUser: req.params._id
        }
        let jsonResponse = {};

        exerciseService.findExercisesByIdUser(dUser, (err, rExercise) => {
            if (!err) {
                if (rExercise.length > 0) {
                    jsonResponse._id = rExercise[0].user_id;
                    jsonResponse.username = rExercise[0].username;
                    if (dUser.from)
                        jsonResponse.from = new Date(dUser.from + 3600 * 5 * 1000).toDateString();
                    if (dUser.to)
                        jsonResponse.to = new Date(dUser.to + 3600 * 5 * 1000).toDateString();
                    jsonResponse.count = rExercise.length;
                    let showExercises = rExercise.map(el => {
                        return {
                            description: el.description,
                            duration: el.duration,
                            date: new Date(el.date + 3600 * 5 * 1000).toDateString()
                        }
                    })
                    jsonResponse.log = showExercises
                    res.json(jsonResponse);
                }
                else
                    res.send("not found");
            }
            else
                res.send("Not was possible")
        })
    }
}

module.exports = exerciseRoutes;