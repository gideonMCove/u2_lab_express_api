const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Review = new Schema (
    {
    score: {type: Number, min: 1, max: 10, required: true},
    comment: {type: String, required: true}
    },
    {timestamps: true},
)
module.exports = mongoose.model('reviews', Review)