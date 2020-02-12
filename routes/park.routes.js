const express = require('express')
const router = express.Router()
const Park = require("../models/park.model");
// Aquí los endpoints
router.get("/new-park", (req, res, next) => res.render("parks/new-park"));
router.post("/new-park", (req, res, next) => {
    Park.create({
        name: req.body.name,
        description: req.body.description,
    })
        .then(() => res.redirect("/parks/new-park"))
        .catch(function () {
            next();
            throw new Error("Error");
        });
});
module.exports = router

// router.get('/ruta1', (req, res) => res.render('parks/new-park'));


// router.get("/new-park", (req, res, next) => {
//     Park.find({}).populate("coaster")
//         .then(allParks =>
//             res.render("parks/new-park", { parks: allParks })
//         )
//         .catch(function () {
//             next();
//             throw new Error("There's an error.");
//         });
// });
