
var express = require('express'),
    router = express.Router(),
    food = require('../models/burger.js');

router.get("/", function (req, res) {
    food.selectAll(function (data) {
        console.log(data);
        var hbsObject = {
            foods: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    food.insertOne(["burger_name", "devoured"], [req.body.burger_name, "0"], function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    food.updateOne({
        devoured: req.body.devoured
    }, condition, function () {
        res.redirect("/");
    });
});

router.delete('/:id', function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    food.deleteOne(condition, function () {
        res.redirect('/');
    });
});
module.exports = router;