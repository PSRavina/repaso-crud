const express = require('express')
const router = express.Router()
const Coaster = require("../models/coaster.model.js");

// Aquí los endpoints
router.get("/new-coaster", (req, res, next) => res.render("coasters/new-coaster"));

router.post("/new-coaster", (req, res, next) => {
  Coaster.create({
      name: req.body.name,
      description: req.body.description,
      inversions: req.body.inversions,
      longitude: req.body.longitude,
      locatedpark: req.body.locatedpark,
  })
      .then(() => res.redirect("/coasters/new-coaster"))
      .catch(function () {
          next();
          throw new Error("Error");
      });
});


router.get("/", (req, res, next) => {
Coaster.find({}).populate("park")
      .then(allCoaster =>
        res.render("coasters/coasters-index", {coasters: allCoaster})
      )
      .catch(function() {
        next();
        throw new Error("There's an error.");
      });
  });

  // router.get("/coasters/new", (req, res, next) => {
  //   Coaster.find({}).populate("coaster")
  //     .then(allCoaster =>
  //       res.render("coasters/new-coaster", {coasters: allCoaster})
  //     )
  //     .catch(function() {
  //       next();
  //       throw new Error("There's an error.");
  //     });
  // });
module.exports = router