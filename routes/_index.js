const express = require("express");
const userRoutes = require("./userRoutes");
const exerciseRoutes = require("./exerciseRoutes");

let router = express.Router();
router.get("/", (req, res)=>{
    res.sendFile(process.cwd() + '/views/index.html');
})
router.post("/api/users", userRoutes.save);
router.get("/api/users", userRoutes.all);
router.get("/api/users/:_id/logs", exerciseRoutes.findLogs);
router.post("/api/users/:_id/exercises", exerciseRoutes.addExercise);
//router.post("/user/register", userRoutes.save())

module.exports = router;