require("../db");

const movieArr = require("./movies.json");

const Movie = require("../models/movie.model.js");
const { Mongoose } = require("mongoose");

const insertMovie = async () => {
  try {
    await Movie.insertMany(movieArr);
    console.log("Todo Ok, movies agregadas a la DB");
  } catch (err) {
    console.log(err);
  }
};

insertMovie();
