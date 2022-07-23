const express = require("express");
const router = express.Router();

const Movie = require("../models/movie.model.js");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies/movies.hbs", {
        movies,
      });
    })
    .catch((err) => next(err));
});

router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;
    console.log(id)
  Movie.findById(id)
    .then((movie) => {
      res.render("movies/movie-page.hbs", {
        movie,
      });
    })
    .catch((err) => next(err));
});

module.exports = router;
