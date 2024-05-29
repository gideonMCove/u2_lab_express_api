const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Review = new Schema (
    {
    movie: {type: Schema.Types.ObjectId, ref: "movie_id"},
    score: {type: Number, min: 1, max: 10, required: true},
    comment: {type: String, required: true}
    },
    {timestamps: true},
)
module.exports = mongoose.model('reviews', Review)