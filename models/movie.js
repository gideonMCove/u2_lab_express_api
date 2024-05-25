//Title, Runtime, Rating, Year Released and a brief description. You can also include a link to a poster image for it


const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Movie = new Schema (
    {
        title: {type: String, required: true},
        runtimeInMinutes: {type: Number, required: true},
        rating: {type: Number, required: true},
        yearReleased: {type: Number, required: true},
        description: {type: String, required: true},
        poster: {type: Image, required: true}
    },
    { timestamps: true},
)
module.exports = Movie