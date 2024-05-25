const mongoose = require('mongoose')
const ActorSchema = require('./actor')
const MovieSchema = require('./movie')
const ReviewSchema = require('./review')

const Actor = mongoose.model('Actor', ActorSchema)
const Movie = mongoose.model('Movie', MovieSchema)
const Review = mongoose.model('Review', ReviewSchema)

module.exports = {
    Actor,
    Movie,
    Review
}