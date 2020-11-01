const mongoose = require('mongoose')

const Movie = mongoose.model('movie', {
  title: String,
  year: String,
  poster: String,
  imdbID: String,
  type: String
},'movie')

module.exports = Movie
